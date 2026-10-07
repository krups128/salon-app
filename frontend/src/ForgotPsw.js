import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function ForgotPsw() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate password reset logic
    alert(`Reset link sent to ${email}`);
    // Navigate to change-password page if needed (can use useNavigate)
  };

  return (
    <>
      <Menu />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card forgot-password-card" style={{ width: "500px", height: "auto" }}>
          <h3 className="text-center mt-3">Forgot Password</h3>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Reset Password
            </button>
          </form>
          <div className="text-center mb-3">
            <Link to="/login" className="btn-back text-decoration-none">Back to Login</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
