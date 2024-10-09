import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { session_id } = req.query;

  try {
    // Retrieve the Checkout Session from Stripe using the session_id
    const session = await stripe.checkout.sessions.retrieve(session_id);

    // You can fetch more details based on your setup (like the rental information)
    const paymentIntent = await Stripe.paymentIntents.retrieve(
      session.payment_intent
    );

    // Extract necessary details
    const carInfo = session.metadata.carInfo
      ? JSON.parse(session.metadata.carInfo)
      : {};
    const listerInfo = session.metadata.listerInfo
      ? JSON.parse(session.metadata.listerInfo)
      : {};

    // Response with session information
    res.status(200).json({
      paymentIntentId: paymentIntent.id,
      amountPaid: paymentIntent.amount_received,
      carName: carInfo.carName,
      startDate: carInfo.startDate,
      endDate: carInfo.endDate,
      location: carInfo.location,
      listerName: listerInfo.name,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
