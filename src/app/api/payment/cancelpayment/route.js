// // import Stripe from "stripe";
// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // export default async function handler(req, res) {
// //   console.log("req.method");
// //   console.log(req.method);
// //   if (req.method === "POST") {
// //     const { paymentIntentId, rentalFee, cancellationReason, rentalStartTime } =
// //       req.body;

// //     const currentDate = new Date();
// //     const rentalTimePassed =
// //       (currentDate - new Date(rentalStartTime)) / (1000 * 60);

// //     try {
// //       let refundAmount = 0;

// //       if (
// //         cancellationReason === "Lister did not show up" &&
// //         rentalTimePassed <= 15
// //       ) {
// //         //! Full refund if canceled within 15 minutes
// //         refundAmount = rentalFee * 100;
// //       } else if (
// //         cancellationReason === "I want to cancel the ride" &&
// //         rentalTimePassed < 0
// //       ) {
// //         //! 50% refund if canceled before the rental start time
// //         refundAmount = rentalFee * 0.5 * 100;
// //       }

// //       if (refundAmount > 0) {
// //         // Process the refund
// //         await stripe.refunds.create({
// //           payment_intent: paymentIntentId,
// //           amount: refundAmount, //! Refund in cents
// //         });
// //         res.status(200).json({ success: true, message: "Refund processed." });
// //       } else {
// //         res
// //           .status(400)
// //           .json({ success: false, message: "No refund available." });
// //       }
// //     } catch (error) {
// //       res.status(500).json({ error: error.message });
// //     }
// //   } else {
// //     res.status(405).end("Method Not Allowed");
// //   }
// // }
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   console.log("Received method:", req.method); // Debugging log

//   // if (req.method === "POST") {
//   const { paymentIntentId, rentalFee, cancellationReason, rentalStartTime } =
//     req.body;

//   const currentDate = new Date();
//   const rentalTimePassed =
//     (currentDate - new Date(rentalStartTime)) / (1000 * 60); // Minutes

//   try {
//     let refundAmount = 0;

//     if (
//       cancellationReason === "Lister did not show up" &&
//       rentalTimePassed <= 15
//     ) {
//       // Full refund if canceled within 15 minutes
//       refundAmount = rentalFee * 100;
//     } else if (
//       cancellationReason === "I want to cancel the ride" &&
//       rentalTimePassed < 0
//     ) {
//       // 50% refund if canceled before the rental start time
//       refundAmount = rentalFee * 0.5 * 100;
//     }

//     if (refundAmount > 0) {
//       // Process the refund
//       await stripe.refunds.create({
//         payment_intent: paymentIntentId,
//         amount: refundAmount, // Refund in cents
//       });
//       res.status(200).json({ success: true, message: "Refund processed." });
//     } else {
//       res.status(400).json({
//         success: false,
//         message: "No refund available based on the cancellation policy.",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
//   // } else {
//   //   res.status(405).json({ success: false, message: "Method Not Allowed" });
//   // }
// }

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not POST" });
  }

  const { paymentIntentId, rentalFee, cancellationReason, rentalStartTime } =
    req.body;

  if (!paymentIntentId || !cancellationReason || !rentalStartTime) {
    return res.status(400).json({
      success: false,
      message:
        "Missing required fields: paymentIntentId, cancellationReason, or rentalStartTime",
    });
  }

  try {
    // Calculate the time passed since the rental start time
    const currentDate = new Date();
    const rentalTimePassed =
      (currentDate - new Date(rentalStartTime)) / (1000 * 60); // in minutes

    let refundAmount = 0;

    // Define refund logic based on cancellation reason and time passed
    if (
      cancellationReason === "Lister did not show up" &&
      rentalTimePassed <= 15
    ) {
      // Full refund if canceled within 15 minutes
      refundAmount = rentalFee * 100; // Amount in cents
    } else if (
      cancellationReason === "I want to cancel the ride" &&
      rentalTimePassed < 0
    ) {
      // 50% refund if canceled before the rental start time
      refundAmount = rentalFee * 0.5 * 100; // Amount in cents
    }

    if (refundAmount > 0) {
      // Process the refund with Stripe
      const refund = await stripe.refunds.create({
        payment_intent: paymentIntentId,
        amount: refundAmount,
      });

      // Return a success response
      return res.status(200).json({
        success: true,
        message: "Refund processed successfully",
        refund,
      });
    } else {
      // No refund due to invalid conditions
      return res.status(400).json({
        success: false,
        message: "No refund available based on cancellation policy.",
      });
    }
  } catch (error) {
    // Handle Stripe or other errors
    return res.status(500).json({ success: false, message: error.message });
  }
}
