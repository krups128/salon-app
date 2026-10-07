import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="container-fluid custom-navbar">
      <div className="d-flex align-items-center justify-content-between py-3">
        <img
          src="images/logo.png"
          alt="AURA LUXE Logo"
          style={{ width: "200px", height: "80px" }}
        />

        <div className="d-flex">
          <Link to="/services" className="btn btn-link me-4">
            Services
          </Link>
          <Link to="/offers" className="btn btn-link me-4">
            Offers
          </Link>
          <Link to="/locate-us" className="btn btn-link me-4">
            Locate Us
          </Link>

          <div className="dropdown me-4">
            <button
              className="btn btn-link dropdown-toggle"
              id="aboutDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Us
            </button>
            <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
              <li>
                <Link className="dropdown-item" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/team">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/book-appointment" className="btn btn-link me-4">
            Book Appointment
          </Link>
          <Link to="/my-appointment" className="btn btn-link me-4">
            My Appointment
          </Link>
          <Link to="/login" className="btn btn-link me-4">
            Login
          </Link>
          <Link to="/register" className="btn btn-link me-4">
            Register
          </Link>
          <Link to="/rating" className="btn btn-link me-4">
            Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}
