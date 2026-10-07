import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ External libraries
import './index.css'; // ✅ Base styles
import './style.css';

// ✅ React and routing
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ✅ Scroll behavior
import ScrollToTop from './Scrolltotop';
import Messages from './Messages';
import FloatingChatIcon from './FloatingChatIcon';

// ✅ Pages
import Menu from './Menu';
import Footer from './Footer';
import AboutUs from './AboutUs';
import BookAppointment from './BookAppointment';
import Bride from './Bride';
import Changepsw from './Changepsw';
import MyContact from './MyContact';
import Facial from './Facial';
import ForgotPsw from './ForgotPsw';
import Hairspa from './Hairspa';
import Hairstyle from './Hairstyle';
import Home from './Home';
import Locateus from './Locateus';
import Login from './Login';
import Myappointment from './Myappointment';
import Naildesign from './Naildesign';
import Offers from './Offers';
import Rating from './Rating';
import Register from './Register';
import Services from './Services';
import Skincare from './Skincare';
import Team from './Team';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ScrollToTop /> {/* This ensures scroll resets on route change */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/bride" element={<Bride />} />
      <Route path="/change-password" element={<Changepsw />} />
      <Route path="/contact" element={<MyContact />} />
      <Route path="/facial" element={<Facial />} />
      <Route path="/forgot-password" element={<ForgotPsw />} />
      <Route path="/hair-spa" element={<Hairspa />} />
      <Route path="/hairstyle" element={<Hairstyle />} />
      <Route path="/locate-us" element={<Locateus />} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-appointment" element={<Myappointment />} />
      <Route path="/nail-design" element={<Naildesign />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
      <Route path="/skin-care" element={<Skincare />} />
      <Route path="/team" element={<Team />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
    
    <FloatingChatIcon /> {/* Floating Chat Icon */}
  </BrowserRouter>
);
