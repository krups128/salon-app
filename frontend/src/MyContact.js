import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function MyContact() {
  return (
    <div>
      <Menu />
      <section className="contact-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-5">
              <h4>Contact Information</h4>
              <p>
                <i className="fas fa-map-marker-alt" /> 202, Waghawadi Road,
                Bhavnagar, Gujarat - 364001
              </p>
              <p>
                <i className="fas fa-phone-alt" /> +91 98765 43210
              </p>
              <p>
                <i className="fas fa-envelope" /> contact@auraluxe.com
              </p>
              <h5>Opening Hours</h5>
              <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <h4>Send Us a Message</h4>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Your Message"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="text-center mb-4">Find Us Here</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7360295452196!2d72.15063141493265!3d21.764484985941384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e9fcdd6c767%3A0x370724dbb2f90e26!2s202%20Waghawadi%20Rd%2C%20Bhavnagar%2C%20Gujarat%20364001!5e0!3m2!1sen!2sin!4v1616350546967!5m2!1sen!2sin"
              width="100%"
              height={350}
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <br />
      <Footer />
    </div>
  );
}
