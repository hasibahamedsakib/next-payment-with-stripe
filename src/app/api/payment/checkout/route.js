import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2022-11-15",
    });
    // Parse the request body
    const { listedCar } = await req.json();

    const listedItems = listedCar.map((car) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: `${car?.carName}_${car?.carModel}_${car?.countryOfRegistation} - ${car?.yearOfRegistation}`,
          images: [car.image1 ?? car.image],
        },
        unit_amount: Math.floor(car.perDayPrice * 100),
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: listedItems,
      mode: "payment",
      success_url: "http://localhost:3000/search",
      cancel_url: "http://localhost:3000/payment/cancel",
    });

    return NextResponse.json({
      id: session.id,
      message: "Payment Checkout successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({
      message: "Error creating checkout session",
      success: false,
      error: error.message,
    });
  }
}
