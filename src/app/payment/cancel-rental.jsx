import { useState } from "react";

export default function CancelRental() {
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [cancellationReason, setCancellationReason] = useState("");
  const [rentalStartTime, setRentalStartTime] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleCancel = async () => {
    const res = await fetch(`${apiUrl}/api/payment/cancel-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentIntentId,
        cancellationReason,
        rentalStartTime,
        rentalFee: 100, // Example fee
      }),
    });

    const data = await res.json();
    if (data.success) {
      console.log("Refund processed:", data.message);
    } else {
      console.error("Refund failed:", data.message);
    }
  };

  return (
    <div>
      <h1>Cancel Rental</h1>
      <input
        type="text"
        placeholder="Payment Intent ID"
        value={paymentIntentId}
        onChange={(e) => setPaymentIntentId(e.target.value)}
      />
      <select
        value={cancellationReason}
        onChange={(e) => setCancellationReason(e.target.value)}
      >
        <option value="">Select Cancellation Reason</option>
        <option value="Lister did not show up">Lister did not show up</option>
        <option value="I want to cancel the ride">
          I want to cancel the ride
        </option>
      </select>
      <input
        type="datetime-local"
        value={rentalStartTime}
        onChange={(e) => setRentalStartTime(e.target.value)}
      />
      <button onClick={handleCancel}>Cancel Rental</button>
    </div>
  );
}
