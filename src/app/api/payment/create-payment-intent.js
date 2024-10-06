import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { rentalFee, listerStripeAccountId } = req.body;

    try {
      //! Create Payment Intent and split payment between admin and lister
      const paymentIntent = await stripe.paymentIntents.create({
        amount: rentalFee * 100, //! Convert usd($) to cents
        currency: "usd",
        payment_method_types: ["card"],
        transfer_data: {
          destination: listerStripeAccountId, //! 80% to lister's Stripe account
          amount: Math.floor(rentalFee * 0.8 * 100), //! 80% in cents
        },
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end("Method Not Allowed");
  }
}
