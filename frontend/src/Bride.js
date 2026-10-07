import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function Bride() {
  return (
    <div>
      <Menu />
      <br /><br />

      {/* Bridal Makeup Trends Section */}
      <section className="intro-section container py-5">
        <div className="row align-items-center">

          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="intro-title fw-bold mb-3">Top 3 Bridal Makeup Trends for a Stunning Wedding Look! 💄👰✨</h2>
            <p className="intro-text mb-4">
              Every bride deserves a flawless, radiant look on her big day! Here are the top 3 trending bridal makeup styles you’ll love:
            </p>

            <p className="mb-3">
              <strong>1. Soft Glam Bridal Makeup ✨</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> A perfect balance between natural and glamorous.<br />
              ✔️ <strong>Best For:</strong> Brides who love a dewy, soft, and elegant look.<br />
              ✔️ <strong>Key Features:</strong> Glowing skin, neutral eyes, fluttery lashes, and glossy lips.
            </p>

            <p className="mb-3">
              <strong>2. Classic Matte Bridal Makeup 💖</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Timeless, long-lasting, and picture-perfect.<br />
              ✔️ <strong>Best For:</strong> Brides who want a flawless, oil-free finish all day.<br />
              ✔️ <strong>Key Features:</strong> Matte base, bold eyes, well-defined brows, and a statement lip.
            </p>

            <p className="mb-3">
              <strong>3. Airbrush Bridal Makeup 🌿</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Lightweight yet full coverage, giving an airbrushed finish.<br />
              ✔️ <strong>Best For:</strong> Brides who want a natural yet flawless look that lasts all day.<br />
              ✔️ <strong>Key Features:</strong> HD finish, sweat-proof, and perfect for photography.
            </p>

            <p className="fw-semibold text-success">
              📍 Book your bridal makeup at <strong>AURA LUXE</strong> &amp; glow like a queen on your big day! 👰💖✨
            </p>

            <Link to="/book-appointment" className="btn btn-primary mt-3">
              Book Bridal Appointment
            </Link>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="images/bride.jpg"
              alt="Bridal Look at AURA LUXE"
              className="img-fluid rounded shadow"
              style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <br /><br />
      <Footer />
    </div>
  );
}
