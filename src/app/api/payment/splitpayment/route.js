// pages/api/payment/split.js
import Stripe from "stripe";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function POST(req, res) {
  //   if (req.method !== "POST") {
  //     return res.status(405).json({
  //       success: false,
  //       message: "Method not allowed",
  //     });
  //   }

  const { paymentInfo, carInfo } = req.body;
  const { paymentIntentId, rentalFee, listerStripeAccountId } = paymentInfo;

  try {
    // Retrieve the payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    // Split 80% to lister (car owner)
    const listerTransfer = await stripe.transfers.create({
      amount: Math.floor(rentalFee * 0.8 * 100),
      destination: listerStripeAccountId,
      transfer_group: paymentIntent.transfer_group,
    });

    // Split 20% to admin
    const adminTransfer = await stripe.transfers.create({
      amount: Math.floor(rentalFee * 0.2 * 100), // 20% of the fee in cents
      currency: "usd",
      destination: process.env.ADMIN_STRIPE_ACCOUNT_ID, // Admin's Stripe Account
      transfer_group: paymentIntent.transfer_group,
    });

    // Respond back with success message
    return res.status(200).json({
      success: true,
      message: "Payment split successfully!",
      listerTransfer,
      adminTransfer,
    });
  } catch (error) {
    // Error handling
    console.error("Error splitting payment:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
