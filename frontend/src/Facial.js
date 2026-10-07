import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function Facial() {
  return (
    <div>
      <Menu />
      <br /><br />

      {/* Introduction Section */}
      <section className="intro-section container py-5">
        <div className="row align-items-center">

          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="intro-title fw-bold mb-3">Top 3 Trendy Facials for Glowing Skin ✨</h2>
            <p className="intro-text mb-4">
              Want radiant, healthy skin? Here are the top 3 facial treatments that are trending right now!
            </p>

            <p className="mb-3">
              <strong>1. Glass Skin Facial 💎</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Inspired by Korean skincare, this facial gives a dewy, poreless glow.<br />
              ✔️ <strong>Best For:</strong> Dull, dehydrated skin that needs extra hydration.<br />
              ✔️ <strong>Results:</strong> Smooth, luminous, and deeply moisturized skin.
            </p>

            <p className="mb-3">
              <strong>2. HydraFacial 💦</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> A celebrity-favorite facial that deeply cleanses, exfoliates, and hydrates in one session.<br />
              ✔️ <strong>Best For:</strong> All skin types, especially acne-prone or sensitive skin.<br />
              ✔️ <strong>Results:</strong> Instantly refreshed, plump, and glowing skin.
            </p>

            <p className="mb-3">
              <strong>3. Vitamin C Brightening Facial 🍊</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Packed with antioxidants, it fights dullness and evens out skin tone.<br />
              ✔️ <strong>Best For:</strong> Pigmentation, uneven skin tone, and sun damage.<br />
              ✔️ <strong>Results:</strong> Brighter, more youthful-looking skin with a natural glow.
            </p>

            <p className="fw-semibold text-success">
              📍 Ready to pamper yourself? Book your facial at <strong>AURA LUXE</strong> today! 💆‍♀️✨
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="images/facial.jpg"
              alt="AURA LUXE Salon"
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
