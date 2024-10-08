"use client";
import { useState } from "react";

export default function CancelRental() {
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [cancellationReason, setCancellationReason] = useState("");
  const [rentalStartTime, setRentalStartTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCancel = async () => {
    // Ensure required fields are filled
    if (!paymentIntentId || !cancellationReason || !rentalStartTime) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const res = await fetch(`/api/payment/cancelpayment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentIntentId,
          cancellationReason,
          rentalStartTime,
          rentalFee: 55, // Example fee
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMessage("Refund processed successfully: " + data.message);
      } else {
        setErrorMessage("Refund failed: " + data.message);
      }
    } catch (error) {
      setErrorMessage("Error cancelling rental: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Cancel Your Rental
        </h2>

        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Payment Intent ID"
            value={paymentIntentId}
            onChange={(e) => setPaymentIntentId(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md text-gray-900 bg-gray-50 border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <select
            value={cancellationReason}
            onChange={(e) => setCancellationReason(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md text-gray-900 bg-gray-50 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Cancellation Reason</option>
            <option value="Lister did not show up">
              Lister did not show up
            </option>
            <option value="I want to cancel the ride">
              I want to cancel the ride
            </option>
          </select>

          <input
            type="datetime-local"
            value={rentalStartTime}
            onChange={(e) => setRentalStartTime(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md text-gray-900 bg-gray-50 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm mt-2">{successMessage}</p>
        )}

        <div className="mt-6">
          <button
            onClick={handleCancel}
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Processing..." : "Cancel Rental"}
          </button>
        </div>
      </div>
    </div>
  );
}
