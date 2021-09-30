import React from "react";
import {List}from './Reviews.styled'

export default function Reviews ({ reviews }) {
  return (
    <List>
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
    </List>
  );
}
