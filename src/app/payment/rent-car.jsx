import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function RentCar() {
  const [rentalFee, setRentalFee] = useState(100); // Example fee
  const [listerStripeAccountId, setListerStripeAccountId] = useState(
    "acct_listerStripeAccountId"
  );
  const [clientSecret, setClientSecret] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // Step 1: Create payment intent
  const handleRentCar = async () => {
    const res = await fetch(`${apiUrl}/api/payment/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rentalFee, listerStripeAccountId }),
    });

    const data = await res.json();
    setClientSecret(data.clientSecret); // Pass clientSecret to Stripe Elements
  };

  return (
    <div>
      <h1>Rent a Car</h1>
      <button onClick={handleRentCar}>Pay Now</button>
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}

// Checkout form for Stripe payment
function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("Payment successful!");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Confirm Payment
      </button>
    </form>
  );
}
