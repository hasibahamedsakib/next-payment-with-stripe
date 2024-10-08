import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    // Define your custom account with additional required information
    const account = await stripe.accounts.create({
      type: "custom", // Or 'standard' if you want Stripe to handle more
      country: "US", // Define the country for the connected account
      email: "user@gmail.com", // Optional: email of the lister
      business_type: "individual", // Set to 'individual' or 'company'
      capabilities: {
        card_payments: { requested: true }, // Request capabilities based on platform
        transfers: { requested: true }, // For payouts
      },
      tos_acceptance: {
        date: Math.floor(Date.now() / 1000), // Accept Terms of Service on behalf of the lister
        ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress, // Track the IP address for record
      },
      business_profile: {
        mcc: "4784", // Merchant Category Code (optional but recommended)
        url: "http://localhost:3000/", // Your platform's URL
      },
    });

    // Generate the account onboarding link
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "http://localhost:3000/payment/cancel", // URL on failure
      return_url: "http://localhost:3000/", // URL on success
      type: "account_onboarding",
    });

    return NextResponse.json({
      accountId: account.id,
      onboardingUrl: accountLink.url,
    });
  } catch (error) {
    console.error("Error creating Stripe account:", error);
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
}
