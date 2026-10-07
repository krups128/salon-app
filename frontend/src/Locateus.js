import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function Locateus() {
  return (
    <div>
      <Menu />
      <div className="service-banner">
        {/* Image with Overlay */}
        <div className="service-banner-image">
          <img src="images/L3.webp" alt="Aura Luxe Salon Location Banner" />
          <div className="overlay" />
        </div>
        {/* Text Content */}
        <div className="service-banner-text">
          <h1>Locate Us</h1>
        </div>
      </div>
      <div className="container">
        {/* City 1 */}
        <div className="city-container">
          <div className="city-name">Ahmedabad</div>
          <div className="card p-3">
            <div className="card-body">
              <p><strong>Email:</strong> ahmedabad@salon.com</p>
              <p><strong>Phone:</strong> 9876543210</p>
              <p><strong>Address:</strong> 123, CG Road, Ahmedabad, Gujarat - 380001</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=123+CG+Road,+Ahmedabad,+Gujarat+380001" className="btn-custom" target="_blank" rel="noopener noreferrer">Get Directions</a> <br />
              <Link to="/book-appointment" className="btn-custom">Book Now</Link>
            </div>
          </div>
        </div>
        {/* City 2 */}
        <div className="city-container">
          <div className="city-name">Surat</div>
          <div className="card p-3">
            <div className="card-body">
              <p><strong>Email:</strong> surat@salon.com</p>
              <p><strong>Phone:</strong> 9876543211</p>
              <p><strong>Address:</strong> 456, Ring Road, Surat, Gujarat - 395002</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=456+Ring+Road,+Surat,+Gujarat+395002" className="btn-custom" target="_blank" rel="noopener noreferrer">Get Directions</a> <br />
              <Link to="/book-appointment" className="btn-custom">Book Now</Link>
            </div>
          </div>
        </div>
        {/* City 3 */}
        <div className="city-container">
          <div className="city-name">Vadodara</div>
          <div className="card p-3">
            <div className="card-body">
              <p><strong>Email:</strong> vadodara@salon.com</p>
              <p><strong>Phone:</strong> 9876543212</p>
              <p><strong>Address:</strong> 789, Alkapuri, Vadodara, Gujarat - 390007</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=789+Alkapuri,+Vadodara,+Gujarat+390007" className="btn-custom" target="_blank" rel="noopener noreferrer">Get Directions</a> <br />
              <Link to="/book-appointment" className="btn-custom">Book Now</Link>
            </div>
          </div>
        </div>
        {/* City 4 */}
        <div className="city-container">
          <div className="city-name">Rajkot</div>
          <div className="card p-3">
            <div className="card-body">
              <p><strong>Email:</strong> rajkot@salon.com</p>
              <p><strong>Phone:</strong> 9876543213</p>
              <p><strong>Address:</strong> 101, Yagnik Road, Rajkot, Gujarat - 360001</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=101+Yagnik+Road,+Rajkot,+Gujarat+360001" className="btn-custom" target="_blank" rel="noopener noreferrer">Get Directions</a> <br />
              <Link to="/book-appointment" className="btn-custom">Book Now</Link>
            </div>
          </div>
        </div>
        {/* City 5 */}
        <div className="city-container">
          <div className="city-name">Bhavnagar</div>
          <div className="card p-3">
            <div className="card-body">
              <p><strong>Email:</strong> bhavnagar@salon.com</p>
              <p><strong>Phone:</strong> 9876543214</p>
              <p><strong>Address:</strong> 202, Waghawadi Road, Bhavnagar, Gujarat - 364001</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=202+Waghawadi+Road,+Bhavnagar,+Gujarat+364001" className="btn-custom" target="_blank" rel="noopener noreferrer">Get Directions</a> <br />
              <Link to="/book-appointment" className="btn-custom">Book Now</Link>
            </div>
          </div>
        </div>
        {/* City 6 */}
        <div className="city-container">
          <div className="city-name">Gandhinagar</div>
          <div className="card p-3">
            <div className="card-body">
              <p><strong>Email:</strong> gandhinagar@salon.com</p>
              <p><strong>Phone:</strong> 9876543215</p>
              <p><strong>Address:</strong> 303, Sector 21, Gandhinagar, Gujarat - 382021</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=303+Sector+21,+Gandhinagar,+Gujarat+382021" className="btn-custom" target="_blank" rel="noopener noreferrer">Get Directions</a> <br />
              <Link to="/book-appointment" className="btn-custom">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="enquiry-banner">
        Enquire Today At Your Nearest Aura Luxe Salon
      </div>
      <br /><br />
      {/* Offer Section */}
      <div className="position-relative text-center text-white bg-dark">
        <img src="images/g1.jpg" className="img-fluid w-100" style={{ height: "400px", objectFit: "cover", opacity: "0.5" }} alt="Special offer on hair botox services" />
        <div className="position-absolute top-50 start-50 translate-middle">
          <br />
          <h2 className="fw-bold">Add a Splash of Color</h2>
          <h3 className="fw-semibold">
            Enjoy up to 40% off on hair coloring services every Tuesday &amp; Thursday. Book today!
          </h3><br />
          <Link to="/book-appointment" className="btn-custom-offer mt-3">BOOK AN APPOINTMENT</Link>
        </div>
      </div>
      <br /><br />
      <Footer />
    </div>
  );
}
