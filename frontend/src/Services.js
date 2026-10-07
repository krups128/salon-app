import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import { showError,showMessage,showNetworkError} from "./Msg";
import { ToastContainer } from "react-bootstrap";
import axios from "axios";
export default function Services () {

  const [items, setItems] = useState([]);

  const fetchServices = () => {
    const apiAddress = "http://localhost:5000/services";
    axios.get(apiAddress)
      .then((response) => {
        const error = response.data[0]['error'];
        if (error !== 'no') {
          showError(error);
        } else {
          const total = response.data[1]['total'];
          if (total === 0) {
            showError('No services found');
          } else {
            const services = response.data.slice(2);
            setItems(services);
          }
        }
      })
      .catch((error) => showNetworkError(error));
  };

  useEffect(() => {
    fetchServices();
  }, []);
 return(<div>
    <Menu/>
    <div className="service-banner">
      {/* Image with Overlay */}
      <div className="service-banner-image">
        <img src="images/service.jpg" alt="Service Banner" />
        <div className="overlay" />
      </div>
      {/* Text Content */}
      <div className="service-banner-text">
        <h1>Services</h1>
        <p>Unwind with style</p>
      </div>
    </div>
    <ToastContainer/>
    <br />
    <div className="container">
      <h2 className="text-center mb-4" style={{"color":"#1e1e1e","font-weight":"700"}}>Our Luxurious Services</h2><br />
      <div className="row g-4">
        {items.map(function(item) {
            return ( <div className="col-md-4">
              <Link to="/book-appointment" className="text-decoration-none">
                <div className="card service-card shadow">
                  <div className="card-body">
                    <h5>{item.name}</h5>
                    <p>{item.price}</p>
                  </div>
                </div>
              </Link>
            </div>);
        })};
      </div>
    </div> {/* Closing div for row */}
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
    <br /><br />
    <Footer/>
  </div>
  )
}
