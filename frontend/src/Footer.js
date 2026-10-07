import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-3 text-center">
            <h5>About Us</h5>
            <p>
              We are dedicated to providing high-quality beauty and wellness
              services that enhance your natural beauty and boost your
              confidence.
            </p>
          </div>

          {/* Services List */}
          <div className="col-md-3 text-center">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/hairstyle" className="text-white">Hair Styling</Link></li>
              <li><Link to="/skin-care" className="text-white">Facials & Skin Care</Link></li>
              <li><Link to="/nail-design" className="text-white">Nail Care</Link></li>
              <li><Link to="/facial" className="text-white">Massage Therapy</Link></li>
              <li><Link to="/bride" className="text-white">Bridal Packages</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 text-center">
            <h5>Contact Info</h5>
            <p><strong>Address:</strong> 202, Waghawadi Road, Bhavnagar, Gujarat - 364001</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:contact@auraluxe.com" className="text-white"> contact@auraluxe.com</a>
            </p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 text-center">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/auraluxe_salon" className="text-white me-3" aria-label="Facebook">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/auraluxe_salon" className="text-white me-3" aria-label="Instagram">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://www.youtube.com/@AuraLuxeSalon" className="text-white me-3" aria-label="YouTube">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4 text-center">
          <div className="col-12">
            <p>&copy; 2025 AURA LUXE | All Rights Reserved</p>
            <p>
              Website designed by{" "}
              <Link to="/" className="text-white">AURA LUXE SALON</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
