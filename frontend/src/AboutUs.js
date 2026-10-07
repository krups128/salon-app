import { Link } from "react-router-dom";
  import Menu from "./Menu";
  import Footer from "./Footer";

  export default function AboutUs() {
    return (
      <div>
        <Menu />
        <div>
          <div style={{ position: "relative", textAlign: "center", color: "white" }}>
            <img src="images/about1.jpg" alt="About AURA LUXE" height="500px" width="100%" />
            <div className="overlay">
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Luxury. Elegance. Perfection.</h1>
                <Link to="/book-appointment" className="btn btn-primary">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
  <br/><br/>
          {/* Introduction Section */}
          <section className="intro-section container py-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="intro-title">Welcome to AURA LUXE</h2>
                <p className="intro-text">
                  Experience luxury like never before at <strong>AURA LUXE</strong>. From head-to-toe pampering,
                  our expert stylists and therapists provide top-notch beauty services in a relaxing and elegant ambiance.
                </p>
                <Link to="/services" className="btn btn-primary intro-btn">
                  Explore Services
                </Link>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="images/a2.jpg"
                  alt="AURA LUXE Salon"
                  className="intro-img img-fluid rounded"
                  style={{ width: "500px", height: "600px" }}
                />
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="why-choose-us py-5 bg-light">
            <div className="container">
              <h2 className="section-title text-center">Why Choose Us?</h2>
              <div className="row text-center">
                {[
                  {
                    icon: "fas fa-gem",
                    title: "Luxury Experience",
                    desc: "Enjoy a premium ambience with high-end products & a relaxing environment.",
                  },
                  {
                    icon: "fas fa-user-tie",
                    title: "Professional Experts",
                    desc: "Our trained & experienced staff ensure top-quality services tailored for you.",
                  },
                  {
                    icon: "fas fa-hand-holding-heart",
                    title: "Personalized Services",
                    desc: "We customize each service to match your unique style & preferences.",
                  },
                  {
                    icon: "fas fa-shield-virus",
                    title: "Hygiene & Safety",
                    desc: "We maintain the highest standards of cleanliness & hygiene.",
                  },
                  {
                    icon: "fas fa-star",
                    title: "Top-Rated Experience",
                    desc: "Rated highly by our customers for exceptional service & hospitality.",
                  },
                ].map((item, index) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={index}>
                    <div className="feature-box">
                      <i className={item.icon} style={{ fontSize: "2rem", color: "#222" }} />
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="our-services py-5">
            <div className="container">
              <h2 className="section-title text-center">Our Services</h2>
              <p className="section-subtitle text-center mb-4">Premium services to enhance your beauty & style</p>
              <div className="row text-center">
                {[
                  { icon: "fas fa-cut", title: "Hair Styling", desc: "Trendy cuts & styling for a fresh look." },
                  { icon: "fas fa-spa", title: "Skincare", desc: "Luxury facials & skincare treatments." },
                  { icon: "fas fa-paint-brush", title: "Makeup", desc: "Professional makeup for every occasion." },
                  { icon: "fas fa-hand-paper", title: "Manicure & Pedicure", desc: "Perfect nails with expert care." },
                ].map((item, index) => (
                  <div className="col-md-3 col-sm-6 mb-4" key={index}>
                    <div className="service-box">
                      <i className={item.icon} style={{ fontSize: "2rem", color: "#c69c6d" }} />
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link to="/services" className="btn btn-primary">
                  View All Services
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials Carousel */}
          <section className="testimonials py-5 bg-light">
            <div className="container text-center">
              <h2 className="section-title">Happy Client Reviews</h2>
              <div id="clientCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {["client1.jpg", "client2.jpg", "client3.jpg"].map((img, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={img}>
                      <img
                        src={`images/${img}`}
                        className="d-block mx-auto client-img rounded-circle"
                        alt={`Client ${index + 1}`}
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#clientCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#clientCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" />
``              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
