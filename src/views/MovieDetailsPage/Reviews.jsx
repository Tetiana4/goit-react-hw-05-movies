import React from "react";

function Reviews ({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <li key={review.id}>
              <p>
                {review.author}
              </p>
              <p>
                {review.content}
              </p>
            </li>
      ))}
    </>
  );
}

export default Reviews;