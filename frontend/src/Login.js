import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showError, showMessage } from "./Msg";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginRedirect = (event) => {
    event.preventDefault();

    const apiUrl = "http://127.0.0.1:5000/customers/login";

    axios
      .post(apiUrl, formData)
      .then((response) => {
        const res = response.data;

        if (res[0].error !== "no") {
          showError(res[0].error);
        } else {
          toast.success(res[2].message, { autoClose: 2000 });
          showMessage(res[2].message);

          // Save user in localStorage
          localStorage.setItem("user", JSON.stringify(res[3].user));

          // Redirect after 2 seconds
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Login Error:", error);
        showError("Network or server error occurred.");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <ToastContainer /> {/* Required for toast to appear */}
      <div className="card login-card" style={{ width: "600px", height: "auto" }}>
        <h3 className="text-center mt-3">Customer Login</h3>
        <form onSubmit={loginRedirect} className="p-4">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Customer Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center mb-3">
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}
