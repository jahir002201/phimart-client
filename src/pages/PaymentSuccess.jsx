import { Link } from "react-router";

const PaymentSuccess = () => {
  return (
    <div>
      <h2>Payment Successful 🎉</h2>
      <p>
        Return to <Link to="/dashboard">Dashboard</Link>
      </p>
    </div>
  );
};

export default PaymentSuccess;