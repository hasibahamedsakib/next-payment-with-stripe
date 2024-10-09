"use client";
// pages/success.js
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { session_id } = router?.query; // Get the session_id from the URL

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      if (!session_id) return;

      try {
        const response = await fetch(
          `/api/payment/success?session_id=${session_id}`
        );
        const data = await response.json();
        setPaymentDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payment details:", error);
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [session_id]);

  if (loading) return <p>Loading...</p>;

  if (!paymentDetails) {
    return <p>Error: Could not retrieve payment details</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-green-600">
        Payment Successful
      </h1>
      <div className="mt-6 p-6 bg-white border rounded-md shadow-md">
        <p className="text-lg font-semibold text-gray-800">
          Thank you for your payment!
        </p>
        <p className="text-gray-600 mt-4">
          Your payment was successfully processed. Below are the details of your
          transaction:
        </p>
        <div className="mt-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <span className="text-gray-600 font-medium">Payment ID:</span>
            <span className="text-gray-800">
              {paymentDetails.paymentIntentId}
            </span>
          </div>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <span className="text-gray-600 font-medium">Amount Paid:</span>
            <span className="text-gray-800">
              ${paymentDetails.amountPaid / 100}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">
              Lister (Car Owner):
            </span>
            <span className="text-gray-800">{paymentDetails.listerName}</span>
          </div>
        </div>

        {/* Display further information about the rental */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Your Car Rental Information
          </h2>
          <div className="mt-4 space-y-2">
            <p className="text-gray-600">Car: {paymentDetails.carName}</p>
            <p className="text-gray-600">
              Pick-up Date: {paymentDetails.startDate}
            </p>
            <p className="text-gray-600">
              Return Date: {paymentDetails.endDate}
            </p>
            <p className="text-gray-600">
              Pickup Location: {paymentDetails.location}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
