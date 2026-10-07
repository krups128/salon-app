import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
export default function AboutUs () {
  return(<div>
    <Menu/>
    
    {/* ⭐ Introduction Section */}
    <section className="team-intro text-center ">
      <div className="container">
        <h2 className="section-title">Meet Our Experts</h2>
        <p className="section-subtitle">Our team of skilled professionals is dedicated to delivering an unmatched salon experience with expertise and luxury.</p>
      </div>
    </section>
    {/* ⭐ Team Members Grid */}
    <section className="team-members ">
      <div className="container">
        <div className="row g-4">
            
          {/* Team Member 1 */}
          <div className="col-md-4">
            <div className="team-card text-center">
              <img src="images/stylish1.jpg" className="team-img img-fluid rounded-circle" alt="Team Member" style={{"width":"200px","height":"auto"}} />
              <h4 className="mt-3">Sophia Patel</h4>
              <p className="role">Senior Hairstylist</p>
              <p className="experience">10+ Years Experience</p>
              <p className="specialty">Expert in Hair Coloring &amp; Styling</p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="col-md-4">
            <div className="team-card text-center">
              <img src="images/stylish2.jpg" className="team-img img-fluid rounded-circle" alt="Team Member" style={{"width":"200px","height":"auto"}} />
              <h4 className="mt-3">Aaravi Mehta</h4>
              <p className="role">Makeup Artist</p>
              <p className="experience">8+ Years Experience</p>
              <p className="specialty">Bridal &amp; Fashion Makeup Expert</p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="col-md-4">
            <div className="team-card text-center">
              <img src="images/stylish3.jpg" className="team-img img-fluid rounded-circle" alt="Team Member" style={{"width":"200px","height":"auto"}} />
              <h4 className="mt-3">Nisha Verma</h4>
              <p className="role">Skincare Specialist</p>
              <p className="experience">6+ Years Experience</p>
              <p className="specialty">Customized Facials &amp; Skin Treatments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ⭐ Why Choose Our Team */}
    <section className="why-choose-team text-center py-5">
      <div className="container">
        <h2 className="section-title">Why Choose Our Team?</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="feature-box">
              <h5>Personalized Consultations</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="feature-box">
              <h5>Use of Premium Products</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="feature-box">
              <h5>Continuous Training &amp; Upgrading Skills</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="feature-box">
              <h5>Certified &amp; Experienced Stylists</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br /><br />
    {/* Offer Section */}
    <div className="position-relative text-center text-white bg-dark">
      <img src="images/g1.jpg" className="img-fluid w-100" style={{"height":"400px","object-fit":"cover","opacity":"0.5"}} alt="Hair Botox Offer" />
      <div className="position-absolute top-50 start-50 translate-middle">
        <br />
        <h2 className="fw-bold">Add a Splash of Color</h2>
        <h3 className="fw-semibold">
          Enjoy up to 40% off on hair coloring services every Tuesday &amp; Thursday. Book today!
        </h3><br />
        <Link to="/book-appointment" className="btn-custom-offer mt-3">BOOK AN APPOINTMENT</Link>
      </div>
    </div>
    <br />
    <Footer/>
  </div>
  )
}
