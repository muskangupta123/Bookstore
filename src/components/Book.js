import React from 'react';
import { Link } from 'react-router-dom';

function Book({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      {/* Display other book details */}
      <Link to={`/submit-review/${book.id}`}>Submit a Review</Link>
    </div>
  );
}

export default Book;