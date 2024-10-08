// "use client";
// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   useStripe,
//   useElements,
//   CardElement,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// export default function RentCar() {
//   const [rentalFee, setRentalFee] = useState(100); // Example fee
//   const [listerStripeAccountId, setListerStripeAccountId] = useState(
//     "acct_1Gq2GZ2eZvKYlo2C"
//   );
//   const [clientSecret, setClientSecret] = useState("");

//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//   // Step 1: Create payment intent
//   const handleRentCar = async () => {
//     const res = await fetch(`${apiUrl}/api/payment/create-payment-intent`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ rentalFee, listerStripeAccountId }),
//     });

//     const data = await res.json();
//     setClientSecret(data.clientSecret); // Pass clientSecret to Stripe Elements
//   };

//   return (
//     <div>
//       <h1>Rent a Car</h1>
//       <button onClick={handleRentCar}>Pay Now</button>
//       {clientSecret && (
//         <Elements stripe={stripePromise}>
//           <CheckoutForm clientSecret={clientSecret} />
//         </Elements>
//       )}
//     </div>
//   );
// }

// // Checkout form for Stripe payment
// function CheckoutForm({ clientSecret }) {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (result.error) {
//       console.error(result.error.message);
//     } else {
//       if (result.paymentIntent.status === "succeeded") {
//         console.log("Payment successful!");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Confirm Payment
//       </button>
//     </form>
//   );
// }
// "use client";
// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   Elements,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";

// import "../../styles/common.css";
// import "../../styles/2-Card-Detailed.css";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY); // Ensure to use your environment variables.

// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#fff",
//       fontWeight: 500,
//       fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//       ":-webkit-autofill": {
//         color: "#dfbb08",
//       },
//       "::placeholder": {
//         color: "#ffffff",
//       },
//     },
//     invalid: {
//       iconColor: "#bf0b89",
//       color: "#c20088",
//     },
//   },
// };

// const RentCar = () => {
//   const [rentalFee, setRentalFee] = useState(50); // Example fee
//   const [listerStripeAccountId, setListerStripeAccountId] = useState(
//     `acct_1Q7EL5FakmBsJtgW`
//   );
//   // user accountId: acct_1Q7EL5FakmBsJtgW;
//   // my accountId: acct_1Q7EAWCLqXvgIfXy;
//   const [clientSecret, setClientSecret] = useState("");

//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//   const handleRentCar = async () => {
//     const res = await fetch(`${apiUrl}/api/payment/createpayment`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ rentalFee, listerStripeAccountId }),
//     });
//     const data = await res.json();
//     setClientSecret(data.clientSecret);
//   };

//   return (
//     <div className="AppWrapper">
//       <h1>Rent a Car</h1>
//       <button
//         onClick={handleRentCar}
//         className="px-4 py-2 border-rose-500 rounded cursor-pointer"
//       >
//         Pay Now
//       </button>
//       {clientSecret && (
//         <Elements stripe={stripePromise}>
//           <CheckoutForm clientSecret={clientSecret} />
//         </Elements>
//       )}
//     </div>
//   );
// };

// const CheckoutForm = ({ clientSecret }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [processing, setProcessing] = useState(false);
//   const [error, setError] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;

//     setProcessing(true);
//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     setProcessing(false);
//     if (result.error) {
//       setError(result.error.message);
//     } else if (result.paymentIntent.status === "succeeded") {
//       setPaymentMethod(result.paymentIntent);
//     }
//   };

//   return paymentMethod ? (
//     <div className="Result">
//       <div className="ResultTitle">Payment successful</div>
//       <div className="ResultMessage">Payment ID: {paymentMethod.id}</div>
//     </div>
//   ) : (
//     <form onSubmit={handleSubmit} className="Form">
//       <fieldset className="FormGroup">
//         <CardElement options={CARD_OPTIONS} />
//       </fieldset>
//       {error && <div className="ErrorMessage">{error}</div>}
//       <button className="SubmitButton" disabled={!stripe || processing}>
//         {processing ? "Processing..." : "Confirm Payment"}
//       </button>
//     </form>
//   );
// };

// export default RentCar;
// RentCar.js (React component)
"use client";
import "../../styles/common.css";
import "../../styles/2-Card-Detailed.css";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      ":-webkit-autofill": { color: "#dfbb08" },
      "::placeholder": { color: "#ffffff" },
    },
    invalid: { iconColor: "#bf0b89", color: "#c20088" },
  },
};

const RentCar = () => {
  const [rentalFee, setRentalFee] = useState(55); // Example fee
  const [listerStripeAccountId, setListerStripeAccountId] = useState(
    "acct_1Q7XfcJB7MPY3OkO"
  );
  // "acct_1Q7XfcJB7MPY3OkO" //! need rider stripe id and need this id on main account
  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Fetch the connected account for the lister
  //   const fetchListerAccount = async () => {
  //     const res = await fetch(`/api/payment/createaccount`, {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     const data = await res?.json();
  //     console.log(data);

  //     setListerStripeAccountId(data.accountId);
  //   };

  //   fetchListerAccount();
  // }, []);

  const handleRentCar = async () => {
    const res = await fetch(`/api/payment/createpayment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rentalFee, listerStripeAccountId }),
    });
    const data = await res.json();
    setClientSecret(data.clientSecret);
  };

  return (
    <div className="AppWrapper">
      <h1>Rent a Car</h1>
      <button
        onClick={handleRentCar}
        className="px-4 py-2 border-rose-500 rounded cursor-pointer"
      >
        Pay Now
      </button>
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    setProcessing(false);
    if (result.error) {
      setError(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      setPaymentMethod(result.paymentIntent);
    }
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle">Payment successful</div>
      <div className="ResultMessage">Payment ID: {paymentMethod.id}</div>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="Form">
      <fieldset className="FormGroup">
        <CardElement options={CARD_OPTIONS} />
      </fieldset>
      {error && <div className="ErrorMessage">{error}</div>}
      <button className="SubmitButton" disabled={!stripe || processing}>
        {processing ? "Processing..." : "Confirm Payment"}
      </button>
    </form>
  );
};

export default RentCar;
