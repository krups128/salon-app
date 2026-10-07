import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCommentDots, FaBell } from "react-icons/fa";

export default function FloatingChatIcon() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={handleShow}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#1D1D1D", // Dark background for elegance
          color: "#FFD700", // Rose Gold or Soft Gold for the icon color
          borderRadius: "50%",
          padding: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 9999,
          cursor: "pointer",
          transition: "background-color 0.3s ease, transform 0.3s ease",
        }}
        title="Messages & Notifications"
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Add hover effect
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        <FaCommentDots size={20} style={{ color: "#FFD700" }} /> {/* Soft Gold icon */}
        <FaBell size={16} style={{ marginLeft: "6px", color: "#FFD700" }} /> {/* Soft Gold icon */}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Messages & Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>No new messages at the moment. 💅</p>
          <p>You’ll see appointment updates and customer chats here.</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              handleClose();
              navigate("/messages");
            }}
          >
            View All
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
