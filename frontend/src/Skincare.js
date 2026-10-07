import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div>
      <Menu />
      <br /><br />

      {/* Introduction Section */}
      <section className="intro-section container py-5">
        <div className="row align-items-center">

          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="intro-title fw-bold mb-3">Top 3 Skincare Trends for a Healthy Glow! 🌿✨</h2>
            <p className="intro-text mb-4">Achieve radiant, flawless skin with these trending skincare techniques!</p>

            <p className="mb-3">
              <strong>1. Skin Cycling 🔄</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> A gentle yet effective way to use actives without irritation.<br />
              ✔️ <strong>Best For:</strong> Sensitive, dull, or acne-prone skin.<br />
              ✔️ <strong>Key Features:</strong> A 4-day routine alternating between exfoliation, retinol, and recovery.
            </p>

            <p className="mb-3">
              <strong>2. Glass Skin Routine 💧</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Inspired by K-beauty, gives a plump, dewy finish.<br />
              ✔️ <strong>Best For:</strong> Hydrated, poreless, naturally glowing skin.<br />
              ✔️ <strong>Key Features:</strong> Layering hydrating toners, serums, and lightweight moisturizers.
            </p>

            <p className="mb-3">
              <strong>3. Skin Barrier Repair 🌿</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Focuses on strengthening the skin’s natural defense.<br />
              ✔️ <strong>Best For:</strong> Damaged, dry, or over-exfoliated skin.<br />
              ✔️ <strong>Key Features:</strong> Ceramides, niacinamide, and soothing ingredients like centella.
            </p>

            <p className="fw-semibold text-success">
              📍 Book your skincare treatment at <strong>AURA LUXE</strong> &amp; let your skin glow! ✨💆‍♀️
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="images/skincare.jpg"
              alt="Skincare Treatment at AURA LUXE Salon"
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
