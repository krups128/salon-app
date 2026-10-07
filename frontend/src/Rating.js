import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

export default function AboutUs() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  const submitReview = () => {
    if (rating === 0 || reviewText.trim() === "") {
      alert("Please give a rating and write a review.");
      return;
    }

    const newReview = {
      rating,
      text: reviewText,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setRating(0);
  };

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Customer Reviews</h2>

        {/* Review Submission Form */}
        <div className="card review-card mx-auto p-4" style={{ maxWidth: "500px" }}>
          <h4 className="text-center mb-3">Leave a Review</h4>

          <div className="mb-3 text-center">
            <label className="form-label d-block">Your Rating</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={`fa-star fa ${star <= (hoverRating || rating) ? "fas text-warning" : "far"}`}
                  style={{ cursor: "pointer", fontSize: "1.5rem", marginRight: 5 }}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="reviewText" className="form-label">Your Review</label>
            <textarea
              className="form-control"
              id="reviewText"
              rows={3}
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-100" onClick={submitReview}>
            Submit Review
          </button>
        </div>

        {/* Display Submitted Reviews */}
        <div className="mt-5">
          <h4>Recent Reviews</h4>
          <div className="review-list">
            {reviews.length === 0 ? (
              <p className="text-muted">No reviews yet. Be the first to leave one!</p>
            ) : (
              reviews.map((review, index) => (
                <div key={index} className="card mb-3 p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          className={`fa-star fa ${star <= review.rating ? "fas text-warning" : "far"}`}
                        />
                      ))}
                    </div>
                    <small className="text-muted">{review.date}</small>
                  </div>
                  <p className="mt-2">{review.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
