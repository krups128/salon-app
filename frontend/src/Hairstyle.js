import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function Hairstyle() {
  return (
    <div>
      <Menu />
      <br /><br />

      {/* Introduction Section */}
      <section className="intro-section container py-5">
        <div className="row align-items-center">

          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="intro-title fw-bold mb-3">Top 3 Trendy Hairstyles This Season ✨</h2>
            <p className="intro-text mb-4">Looking for a fresh new look? Here are the top 3 trending hairstyles of the season that everyone is loving!</p>

            <p className="mb-3">
              <strong>1. Sleek Bob 💇‍♀️</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> A timeless classic that gives a chic and polished vibe.<br />
              ✔️ <strong>Best For:</strong> Straight or slightly wavy hair.<br />
              ✔️ <strong>Key Features:</strong> Use a flat iron and finishing serum for an ultra-smooth, glossy look.
            </p>

            <p className="mb-3">
              <strong>2. Textured Layers 🌊</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Adds volume and movement for a soft, effortless look.<br />
              ✔️ <strong>Best For:</strong> Medium to long hair, especially if you have fine hair.<br />
              ✔️ <strong>Key Features:</strong> Use a curling wand for beachy waves or apply volumizing spray for a natural bounce.
            </p>

            <p className="mb-3">
              <strong>3. Curtain Bangs ✂️</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Frames the face beautifully and works with any hair length.<br />
              ✔️ <strong>Best For:</strong> All hair types! Perfect if you want a subtle yet stylish change.<br />
              ✔️ <strong>Key Features:</strong> Blow-dry with a round brush for that soft, feathered effect.
            </p>

            <p className="fw-semibold text-success">
              📍 Want a trendy makeover? Book your appointment at <strong>AURA LUXE</strong> today! 💕
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="images/hairstyle.jpg"
              alt="Trendy Hairstyles at AURA LUXE Salon"
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
