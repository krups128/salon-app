import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";

export default function MyAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user")); // assuming email stored on login
  const userEmail = user?.email;

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/myappointments?email=${userEmail}`);
      setAppointments(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchAppointments();
    }
  }, [userEmail]);

  return (
    <>
      <Menu />
      <div className="container mt-5 appointments-container position-relative">
        <Link to="/book-appointment" className="btn btn-secondary position-absolute top-0 end-0 m-3">
          ← Back
        </Link>
        <h2 className="text-center mb-4">My Appointments</h2>
        <div className="card shadow p-3">
          <h4 className="text-center mb-3">Upcoming & Past Appointments</h4>
          <div className="table-responsive">
            {loading ? (
              <p className="text-center">Loading appointments...</p>
            ) : appointments.length === 0 ? (
              <p className="text-center">No appointments found.</p>
            ) : (
              <table className="table table-bordered text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((app, index) => (
                    <tr key={index}>
                      <td>{app.service}</td>
                      <td>{app.date}</td>
                      <td>{app.timeslot}</td>
                      <td>{app.payment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
