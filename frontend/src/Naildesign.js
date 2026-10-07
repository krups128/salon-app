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
            <h2 className="intro-title fw-bold mb-3">Top 3 Trendy Nail Designs You Need to Try! 💅✨</h2>
            <p className="intro-text mb-4">Want gorgeous, Insta-worthy nails? Here are the top 3 trending nail designs right now!</p>

            <p className="mb-3">
              <strong>1. Glazed Donut Nails 🍩✨💎</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Inspired by Hailey Bieber, this pearly, iridescent look gives a chic, glossy finish.<br />
              ✔️ <strong>Best For:</strong> Those who love minimal yet elegant nails.<br />
              ✔️ <strong>Looks Great With:</strong> Almond or square nail shapes.
            </p>

            <p className="mb-3">
              <strong>2. Aura Nails 🌈</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> A soft, airbrushed blend of colors that creates a magical, aura-like effect.<br />
              ✔️ <strong>Best For:</strong> Those who love bold yet dreamy vibes.<br />
              ✔️ <strong>Popular Shades:</strong> Pink & purple, blue & green, or neon gradients.
            </p>

            <p className="mb-3">
              <strong>3. Chrome French Tips 💎</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> A modern twist on the classic French manicure with a metallic, futuristic touch.<br />
              ✔️ <strong>Best For:</strong> Those who want sophisticated yet trendy nails.<br />
              ✔️ <strong>Color Ideas:</strong> Silver, rose gold, or holographic chrome tips.
            </p>

            <p className="fw-semibold text-success">
              📍 Get the trendiest nails at <strong>AURA LUXE</strong> – Book your appointment today! 💅✨
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="images/nails.jpg"
              alt="Trendy Nail Designs at AURA LUXE Salon"
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
