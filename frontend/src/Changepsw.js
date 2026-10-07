import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function AboutUs() {
  function updatePassword(e) {
    e.preventDefault();
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Password validation
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // You can add further logic here to update the password
    alert("Password updated successfully!");
  }

  return (
    <div>
      <Menu />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card change-password-card" style={{ width: "500px" }}>
          <h3 className="text-center">Change Password</h3>
          <form onSubmit={updatePassword}>
            <div className="mb-3">
              <label htmlFor="currentPassword" className="form-label">
                Current Password
              </label>
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Update Password
            </button>
          </form>
          <div className="text-center mt-3">
            <Link to="/login" className="btn btn-link">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
