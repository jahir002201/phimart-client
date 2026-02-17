import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import OrderTable from "./OrderTable";
import authApiClient from "../../services/auth-api-client";

const OrderCard = ({ order, onCancel }) => {
  const { user } = useAuthContext();
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

  // Handle status change (staff only)
  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    try {
      const response = await authApiClient.patch(
        `/orders/${order.id}/update_status/`,
        { status: newStatus }
      );

      if (response.status === 200) {
        setStatus(newStatus);
        alert("Status updated successfully");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    }
  };

  // Handle payment for customer
  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/payment/initiate/", {
        amount: order.total_price,
        orderId: order.id,
        numItems: order.items?.length,
      });

      if (response.data.payment_url) {
        window.location.href = response.data.payment_url;
      } else {
        alert("Payment failed");
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  // Status badge color
  const getStatusColor = () => {
    switch (status) {
      case "Not Paid":
        return "bg-red-500";
      case "Ready To Ship":
        return "bg-yellow-500";
      case "Shipped":
        return "bg-blue-500";
      case "Delivered":
        return "bg-green-500";
      case "Canceled":
        return "bg-gray-500";
      default:
        return "bg-gray-400";
    }
  };

  // Can customer cancel?
  const canCancel = !user?.is_staff && status !== "Delivered" && status !== "Canceled";

  return (
    <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">Order #{order.id}</h2>
          <p className="text-gray-600 text-sm">
            Placed on {new Date(order.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          {user?.is_staff ? (
            <select
              value={status}
              onChange={handleStatusChange}
              className="px-3 py-1 rounded-full text-white text-sm font-medium bg-blue-500"
              disabled={status === "Delivered" || status === "Canceled"}
            >
              <option value="Not Paid">Not Paid</option>
              <option value="Ready To Ship">Ready To Ship</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Canceled">Canceled</option>
            </select>
          ) : (
            <span
              className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor()}`}
            >
              {status}
            </span>
          )}

          {canCancel && (
            <button
              onClick={() => onCancel(order.id)}
              className="text-blue-700 hover:underline"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Order Items */}
      <div className="p-6">
        <h3 className="font-medium text-lg mb-4">Order Items</h3>
        <OrderTable items={order.items} />
      </div>

      {/* Footer */}
      <div className="border-t p-6 flex flex-col items-end">
        <div className="space-y-2 w-full max-w-50">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${Number(order.total_price).toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>

          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total:</span>
            <span>${Number(order.total_price).toFixed(2)}</span>
          </div>
        </div>

        {!user?.is_staff && status === "Not Paid" && (
          <button
            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;