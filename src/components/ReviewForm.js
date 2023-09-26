import React, { useState } from 'react';

const ReviewForm = ({ bookId, onSubmitReview }) => {
  const [review, setReview] = useState('');

  const handleSubmitReview = () => {
    onSubmitReview(bookId, review);
    setReview('');
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button onClick={handleSubmitReview}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;
