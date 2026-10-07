import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import { showError, showMessage } from "./Msg";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    timeslot: "",
    request: "",
    payment: "",
  });

  const navigate = useNavigate();

  const servicePrices = {
    "Haircut": 500,
    "Facial": 800,
    "Manicure": 600,
    "Bridal Makeup": 5000,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Preparing the payload to send to the backend API
    const apiAddress = "http://127.0.0.1:5000/appointments";

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      date: formData.date,
      timeslot: formData.timeslot,
      request: formData.request,
      payment: formData.payment,
      price: servicePrices[formData.service] || 0,  // Added price information
    };

    // API call to the backend to insert the data
    axios
      .post(apiAddress, payload)
      .then((response) => {
        const res = response.data;
        console.log(res);

        // Check for any error in the response from the backend
        if (res[0].error !== "no") {
          showError(res[0].error);
        } 
        else 
        {
          toast.success(res[2].message, { autoClose: 2000 });
          showMessage(res[2].message);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      }).catch((error) => {
        console.error("API Error:", error);
        showError("Network or server error occurred.");
      });
  };

  return (
    <div>
      <Menu />
      <div className="booking-header text-center py-4 bg-light">
        <h1>Book Your Appointment</h1>
        <p>Select your service, date, and time to book your slot effortlessly!</p>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="booking-form" onSubmit={handleSubmit}>
              {/* Personal Info */}
              <h4 className="mb-3">Personal Information</h4>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Service Selection */}
              <h4 className="mt-4 mb-3">Select Service</h4>
              <select
                className="form-select"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="Haircut">Haircut - ₹500</option>
                <option value="Facial">Facial - ₹800</option>
                <option value="Manicure">Manicure - ₹600</option>
                <option value="Bridal Makeup">Bridal Makeup - ₹5000</option>
              </select>

              {/* Date & Time */}
              <h4 className="mt-4 mb-3">Select Date & Time</h4>
              <div className="mb-3">
                <label className="form-label">Choose Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Choose Time Slot</label>
                <select
                  className="form-select"
                  name="timeslot"
                  value={formData.timeslot}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a time slot</option>
                  <option value="Morning">Morning (10 AM - 12 PM)</option>
                  <option value="Afternoon">Afternoon (2 PM - 4 PM)</option>
                  <option value="Evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              {/* Additional Requests */}
              <h4 className="mt-4 mb-3">Additional Requests (Optional)</h4>
              <textarea
                className="form-control"
                rows={3}
                name="request"
                value={formData.request}
                onChange={handleChange}
                placeholder="Any special requests?"
              />

              {/* Payment Option */}
              <h4 className="mt-4 mb-3">Payment Option</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="payNow"
                  value="Pay Now"
                  checked={formData.payment === "Pay Now"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="payNow">
                  Pay Now (Online Payment)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="payAtSalon"
                  value="Pay at Salon"
                  checked={formData.payment === "Pay at Salon"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="payAtSalon">
                  Pay at Salon (Cash/Card)
                </label>
              </div>

              {/* Summary */}
              <div className="summary-box border rounded p-3 bg-light">
                <h5>Appointment Summary</h5>
                <p><strong>Service:</strong> {formData.service || "N/A"}</p>
                <p><strong>Date:</strong> {formData.date || "N/A"}</p>
                <p><strong>Time:</strong> {formData.timeslot || "N/A"}</p>
                <p><strong>Total Cost:</strong> ₹{servicePrices[formData.service] || 0}</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" required />
                  <label className="form-check-label">
                    I agree to the cancellation policy
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Confirm & Book Appointment
              </button>

              <a href="/" className="btn btn-secondary w-100 mt-2">
                Back to Home
              </a>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-4 text-center">
        <p>Need help? Call us at <strong>+91 XXXXX-XXXXX</strong> or WhatsApp us!</p>
      </div>

      <Footer />
    </div>
  );
}
