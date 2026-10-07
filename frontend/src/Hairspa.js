import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function Hairspa() {
  return (
    <div>
      <Menu />
      <br /><br />

      {/* Introduction Section */}
      <section className="intro-section container py-5">
        <div className="row align-items-center">

          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="intro-title fw-bold mb-3">Top 3 Hair Spa Treatments for Healthy, Gorgeous Hair! 💆‍♀️✨</h2>
            <p className="intro-text mb-4">Want silky, strong, and frizz-free hair? Here are the top 3 must-try hair spa treatments!</p>

            <p className="mb-3">
              <strong>1. Keratin Hair Spa 💖</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Deeply nourishes and strengthens hair while reducing frizz.<br />
              ✔️ <strong>Best For:</strong> Dry, frizzy, and chemically treated hair.<br />
              ✔️ <strong>Key Features:</strong> Smooth, shiny, and manageable hair for 4-6 weeks.
            </p>

            <p className="mb-3">
              <strong>2. Moisture Boost Spa 💦</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Infuses hair with intense hydration and nourishment.<br />
              ✔️ <strong>Best For:</strong> Dry, brittle, or color-damaged hair.<br />
              ✔️ <strong>Key Features:</strong> Softer, healthier hair with a natural bounce.
            </p>

            <p className="mb-3">
              <strong>3. Scalp Detox Spa 🍃</strong><br />
              ✔️ <strong>Why It’s Trending:</strong> Cleanses the scalp, removes product buildup, and promotes hair growth.<br />
              ✔️ <strong>Best For:</strong> Oily scalp, dandruff, and hair fall issues.<br />
              ✔️ <strong>Key Features:</strong> A fresh, healthy scalp and stronger roots.
            </p>

            <p className="fw-semibold text-success">
              📍 Get the best hair spa experience at <strong>AURA LUXE</strong> – Book your appointment today! 💆‍♀️✨
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="images/hair spa.jpg"
              alt="Hair Spa Treatment at AURA LUXE Salon"
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
