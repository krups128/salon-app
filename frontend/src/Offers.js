import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div>
      <Menu />

      {/* Hero Section */}
      <div className="position-relative text-center text-white">
        <img src="images/offers.jpg" alt="Offers" height="500px" width="100%" />
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ zIndex: 2 }}
        >
          <h1 className="display-4 fw-bold">Elevate Your Beauty Journey</h1>
          <p className="lead">Discover new ways to pamper yourself at Aura Luxe.</p>
        </div>
      </div>
<br/><br/>
      {/* Introduction Section */}
      <section className="intro-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="intro-title">Exclusive Deals &amp; Luxurious Indulgence</h2>
            <p className="intro-text">
              Indulge in luxury without breaking the bank! Discover our latest offers and limited-time deals designed to give you the ultimate salon experience at unbeatable prices. Whether you're looking for a relaxing spa session, a rejuvenating facial, or a glamorous hair makeover, our exclusive discounts and special packages ensure you get the best of Aura Luxe at exceptional value. Stay tuned for seasonal promotions, membership perks, and festive offers—because self-care should always be rewarding!
            </p>
            <Link to="/services" className="btn btn-primary intro-btn">DISCOVER MORE</Link>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="images/offer-girl.jpg"
              alt="AURA LUXE Salon"
              className="intro-img img-fluid rounded"
              style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Promo Boxes */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-md-4">
              <Link to="/book-appointment" className="text-decoration-none">
                <div className="promo-box membership-box h-100 d-flex flex-column justify-content-center text-center p-4">
                  <h2 className="text-white">Unlock Year-Round Savings</h2>
                  <p className="text-white">
                    Join our exclusive membership and enjoy{" "}
                    <span className="text-warning">20% off</span> on every visit for a full year
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/book-appointment" className="text-decoration-none">
                <div className="promo-box gift-card h-100 d-flex flex-column justify-content-center text-center p-4">
                  <h2 className="text-dark">Gift a Touch of Luxury</h2>
                  <p className="text-danger fw-semibold">Delight them with an Aura Luxe Gift Card</p>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/book-appointment" className="text-decoration-none">
                <div className="promo-box duty-free h-100 d-flex flex-column justify-content-center text-center p-4">
                  <h2 className="text-white">Exclusive Offer for Travelers</h2>
                  <p className="text-white fw-bold">Enjoy a 20% discount on select services</p>
                  <p className="text-warning">BHAVNAGAR • AHMEDABAD • SURAT</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <div className="container py-5">
        <h1 className="text-center mb-4">Signature Packages</h1>
        <div className="row g-4">
          {[
            {
              name: "Basic",
              pay: "₹11,000",
              value: "₹14,300",
              save: "₹3,300",
              valid: "6 months",
              bg: "white-bg",
            },
            {
              name: "Prime",
              pay: "₹21,000",
              value: "₹28,350",
              save: "₹7,350",
              valid: "10 months",
              bg: "peach-bg",
            },
            {
              name: "Silver",
              pay: "₹42,000",
              value: "₹58,800",
              save: "₹16,800",
              valid: "1 year",
              bg: "white-bg",
            },
            {
              name: "Gold",
              pay: "₹75,000",
              value: "₹1,08,750",
              save: "₹33,750",
              valid: "18 months",
              bg: "peach-bg",
            },
            {
              name: "Platinum",
              pay: "₹1,00,000",
              value: "₹1,50,000",
              save: "₹50,000",
              valid: "18 months",
              bg: "white-bg",
            },
            {
              name: "Diamond",
              pay: "₹1,50,000",
              value: "₹2,25,000",
              save: "₹75,000",
              valid: "2 years",
              bg: "peach-bg",
            },
          ].map((pkg, idx) => (
            <div className="col-md-4" key={idx}>
              <div className={`package-card ${pkg.bg}`}>
                <h2>{pkg.name}</h2>
                <p>Pay</p>
                <p className="price">{pkg.pay}</p>
                <p>
                  Get benefits worth {pkg.value} (Save {pkg.save} - valid for {pkg.valid})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Banner */}
      <div className="enquiry-banner text-center py-3 bg-light fs-5 fw-semibold">
        Enquire Today At Your Nearest Aura Luxe Salon
      </div>

      {/* Hair Botox Offer Section */}
      <div className="position-relative text-center text-white bg-dark mt-5">
        <img
          src="images/g1.jpg"
          className="img-fluid w-100"
          style={{ height: "400px", objectFit: "cover", opacity: 0.5 }}
          alt="Hair Botox Offer"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h2 className="fw-bold">Add a Splash of Color</h2>
          <h3 className="fw-semibold">
            Enjoy up to 40% off on hair coloring services every Tuesday &amp; Thursday. Book today!
          </h3><br/>
          <Link to="/book-appointment" className="btn-custom-offer mt-3">BOOK AN APPOINTMENT</Link>
        </div>
      </div>
<br/>
      <Footer />
    </div>
  );
}
