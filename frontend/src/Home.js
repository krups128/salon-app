import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
export default function Home () {
 return(<div>
    <Menu />
    <div id="salonCarousel" className="carousel slide hero" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#salonCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#salonCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#salonCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      {/* Slides */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="images/black int.jpg" alt="Salon Interior" />
          <div className="carousel-caption">
            <h1>JOIN THE AURA LUXE SALON LEGACY</h1>
            <p> Elevate your style with the fastest-growing salon chain in our state, celebrated as a top franchise.</p>
            <Link to="book-appointment" className="btn">BOOK AN APPOINTMENT</Link>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="images/girls.jpg" alt="Luxury Salon Experience" />
          <div className="carousel-caption">
            <h1>LUXURY BEAUTY SERVICES</h1>
            <p>✨ Indulge in premium hair, skin, and beauty treatments designed just for you.</p>
            <Link to="servicesl" className="btn">view services</Link>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="carousel-item">
          <img src="images/hair.jpg" alt="Professional Salon Team" />
          <div className="carousel-caption">
            <h1>EXPERT STYLISTS AT YOUR SERVICE</h1>
            <p>💆‍♀️ Let our expert stylists craft your perfect look—effortless beauty, just a click away!</p>
            <Link to="book-appointment" className="btn">BOOK AN APPOINTMENT</Link>
          </div>
        </div>
      </div>
      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#salonCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#salonCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <br /><br />
    {/* Introduction Section */}
    <section className="intro-section container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6">
          <h2 className="intro-title">Indulge in the Extraordinary</h2>
          <p className="intro-text">
            Welcome to Aura Luxe, the premier salon brand in our region—famed for its chic ambiance, personalized treatments, and a clientele of fashion-forward individuals. Immerse yourself in a world of luxury, where our dedicated stylists and color experts curate your perfect look from head to toe.
          </p>
          <Link to="about" className="btn btn-primary intro-btn">DISCOVER MORE</Link>
        </div>
        {/* Image */}
        <div className="col-md-6 text-center">
          <img src="images/g3.jpg" alt="AURA LUXE Salon" className="intro-img img-fluid rounded" style={{"width":"auto","height":"800px"}} />
        </div>
      </div>
    </section>
    {/* Services Section */}
    <section className="container my-5 text-center">
      <h2 className="mb-4">Your Palace of Beauty</h2>
      <div className="row">
        {/* Hair Service */}
        <div className="col-md-3">
          <Link to="services" className="text-decoration-none">
            <div className="service-card p-4">
              <h4>Hair</h4>
              <p>Beautiful styling &amp; cuts</p>
            </div>
          </Link>
        </div>
        {/* Cosmetology Service */}
        <div className="col-md-3">
          <Link to="services" className="text-decoration-none">
            <div className="service-card p-4">
              <h4>Cosmetology</h4>
              <p>Skincare &amp; rejuvenation</p>
            </div>
          </Link>
        </div>
        {/* Make-up Service */}
        <div className="col-md-3">
          <Link to="services" className="text-decoration-none">
            <div className="service-card p-4">
              <h4>Make-up</h4>
              <p>Glamorous looks</p>
            </div>
          </Link>
        </div>
        {/* Nails Service */}
        <div className="col-md-3">
          <Link to="servicesl" className="text-decoration-none">
            <div className="service-card p-4">
              <h4>Nails</h4>
              <p>Perfect manicure</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
    {/* Offer Section */}
    <div className="position-relative text-center text-white bg-dark">
      <img src="images/g1.jpg" className="img-fluid w-100" style={{"height":"400px","object-fit":"cover","opacity":"0.5"}} alt="Hair Botox Offer" />
      <div className="position-absolute top-50 start-50 translate-middle">
        <br />
        <h2 className="fw-bold">Add a Splash of Color</h2>
        <h3 className="fw-semibold">
          Enjoy up to 40% off on hair coloring services every Tuesday &amp; Thursday. Book today!
        </h3><br />
        <Link to="book-appointment" className="btn-custom-offer mt-3">BOOK AN APPOINTMENT</Link>
      </div>
    </div>
    {/* Testimonial Section */}
    <section className="container my-5 text-center">
      <h2>What Our Clients Say</h2><br />
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="testimonial-card p-4">
                  <p>“I had the best salon experience at Aura Luxe! The staff were incredibly attentive, explaining every step of my hair treatment in detail. My hair looks so vibrant and healthy now—I’m already planning my next visit!”</p>
                  <strong>– Sakshi S.</strong>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-card p-4">
                  <p>“Walking into Aura Luxe felt like stepping into a luxurious retreat. The calming ambiance put me at ease right away, and their signature facial left my skin glowing for days. I can’t wait to come back for more pampering!”</p>
                  <strong>– Rohan D.</strong>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-card p-4">
                  <p>“I’ve never felt so well cared for at a salon before. The stylists at Aura Luxe truly understood my personal style, giving me a stunning new look that’s perfect for me. It’s definitely my go-to place now!”</p>
                  <strong>– Meera K.</strong>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="testimonial-card p-4">
                  <p>“From the moment I stepped into Aura Luxe, I was greeted with warmth and professionalism. The stylist listened carefully to my needs, ensuring I got the perfect cut. I’ve never felt so confident about my hair!”</p>
                  <strong>– Priya R.</strong>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-card p-4">
                  <p>“Aura Luxe truly exceeded my expectations. Their staff walked me through each step of my hair coloring process, and the results were flawless. I’m already recommending this place to all my friends!”</p>
                  <strong>– Rahul S.</strong>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-card p-4">
                  <p>“The ambiance at Aura Luxe is simply breathtaking. I went in for a facial and left feeling rejuvenated, relaxed, and glowing. Their attention to detail made all the difference.”</p>
                  <strong>– Diya M.</strong>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button " data-bs-target="#testimonialCarousel" data-bs-slide-to={0} className="active" />
          <button type="button " data-bs-target="#testimonialCarousel" data-bs-slide-to={1} />
        </div>
      </div>
    </section>
    {/* Welcome to Aura Luxe - Locations Section */}
    <section className="container my-5 text-center">
      <h2>Welcome to Aura Luxe</h2>
      <br />
      <div id="locationCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Bhavnagar */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <Link to="https://www.google.com/maps/dir/?api=1&destination=202+Waghawadi+Road,+Bhavnagar,+Gujarat+364001">
                <img src="images/L1.webp" className="img-fluid" style={{"max-width":"400px"}} alt="Bhavnagar Location" />
              </Link>
            </div>
            <h4 className="mt-3">Bhavnagar</h4>
          </div>
          {/* Ahmedabad */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <Link to="https://www.google.com/maps/dir/?api=1&destination=123+CG+Road,+Ahmedabad,+Gujarat+380001">
                <img src="images/L3.webp" className="img-fluid" style={{"max-width":"400px"}} alt="Ahmedabad Location" />
              </Link>
            </div>
            <h4 className="mt-3">Ahmedabad</h4>
          </div>
          {/* Surat */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <Link to="https://www.google.com/maps/dir/?api=1&destination=456+Ring+Road,+Surat,+Gujarat+395002">
                <img src="images/L2.webp" className="img-fluid" style={{"max-width":"400px"}} alt="Surat Location" />
              </Link>
            </div>
            <h4 className="mt-3">Surat</h4>
          </div>
        </div>
        <br /><br />
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#locationCarousel" data-bs-slide-to={0} className="active" />
          <button type="button" data-bs-target="#locationCarousel" data-bs-slide-to={1} />
          <button type="button" data-bs-target="#locationCarousel" data-bs-slide-to={2} />
        </div>
        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#locationCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#locationCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </section>
    {/* Our Blog Section */}
    <section className="container my-5 text-center">
      <h2>Latest Blog</h2><br />
      <div id="blogCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#blogCarousel" data-bs-slide-to={0} className="active" />
          <button type="button" data-bs-target="#blogCarousel" data-bs-slide-to={1} />
          <button type="button" data-bs-target="#blogCarousel" data-bs-slide-to={2} />
        </div>
        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <Link to="hairstyle"><img src="images/hairstyle.jpg" className="img-fluid" alt="Hairstyles" /></Link>
                <br /><br />Hairstyles
              </div>
              <div className="col-md-4">
                <Link to="facial"><img src="images/facial.jpg" className="img-fluid" alt="Facials" /></Link>
                <br /><br />Facials
              </div>
              <div className="col-md-4">
                <Link to="nail-design"><img src="images/nails.jpg" className="img-fluid" alt="Nail Designs" /></Link>
                <br /><br />Nail Designs
              </div>
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <Link to="hair-spa"><img src="images/hair spa.jpg" className="img-fluid" alt="Hair Spa" /></Link>
                <br /><br />Hair Spa
              </div>
              <div className="col-md-4">
                <Link to="bride"><img src="images/bride.jpg" className="img-fluid" alt="Bridal Makeup" /></Link>
                <br /><br /> Bridal Makeup
              </div>
              <div className="col-md-4">
                <Link to="skin-care"><img src="images/skincare.jpg" className="img-fluid" alt="Skincare Tips" /></Link>
                <br /><br /> Skincare
              </div>
            </div>
          </div>
          <br /><br /><br /><br />
          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div></section>
    <br />
    <Footer/>
  </div>
  )
}