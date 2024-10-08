// import { NextResponse } from "next/server";
// import Stripe from "stripe";
// import { connectDB } from "@/dbConfig/dbConfig";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// connectDB();

// export async function POST(req) {
//   if (req.method === "POST") {
//     try {
//       // Parse the request body
//       const reqBody = await req.json();
//       const { rentalFee, listerStripeAccountId } = reqBody;
//       console.log(rentalFee);
//       console.log(listerStripeAccountId);

//       // Validate input
//       if (!rentalFee || !listerStripeAccountId) {
//         return NextResponse.json(
//           {
//             message: "Missing required fields",
//             success: false,
//           },
//           { status: 400 } // Bad Request
//         );
//       }

//       // Create Payment Intent
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: rentalFee * 100, //! Convert USD to cents
//         currency: "usd",
//         payment_method_types: ["card"],
//         transfer_data: {
//           destination: listerStripeAccountId,
//           amount: Math.floor(rentalFee * 0.8 * 100),
//         },
//       });
//       // Return success response
//       return NextResponse.json({
//         clientSecret: paymentIntent.client_secret,
//         message: "Payment intent created successfully",
//         success: true,
//       });
//     } catch (error) {
//       console.error("Payment Intent Creation Error:", error);
//       return NextResponse.json(
//         {
//           error: error.message,
//           success: false,
//         },
//         {
//           status: 500, // Internal Server Error
//         }
//       );
//     }
//   } else {
//     return NextResponse.json(
//       {
//         error: "Method Not POST",
//         success: false,
//       },
//       {
//         status: 405, // Internal Server Error
//       }
//     );
//   }
// }
// /pages/api/stripe/account.js
// /pages/api/payment/createpayment.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { rentalFee, listerStripeAccountId } = await req.json();

    if (!rentalFee || !listerStripeAccountId) {
      return NextResponse.json(
        { message: "Missing required fields", success: false },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: rentalFee * 100, // Amount in cents
      currency: "usd",
      payment_method_types: ["card"],
      transfer_data: {
        destination: listerStripeAccountId, // Connected account ID
        amount: Math.floor(rentalFee * 0.8 * 100), // 80% goes to the lister
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      message: "Payment intent created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Payment Intent Creation Error:", error);
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
}
