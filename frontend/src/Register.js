import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/customers/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data[0].error === "no") {
        alert("Registration successful!");
        // Optionally redirect to login page
        window.location.href = "/login";
      } else {
        alert(data[0].error || "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <>
      <Menu />
      <div className="container mt-5">
        <div className="register-card p-4 mx-auto" style={{ maxWidth: "500px" }}>
          <h3 className="text-center mb-4">Customer Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                required
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                required
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          <div className="text-center mt-3">
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
