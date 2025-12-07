import React from "react";
import Button from "./Button";
import "../styles/card.css";

/**
 * Card component to display a single book.
 * Props:
 * - _id, title, author, category, isBorrowed, borrowerName, borrowDate
 * - onBorrow(id)
 * - onReturn(id)
 */
const Card = ({
  _id,
  title,
  author,
  category,
  isBorrowed,
  borrowerName,
  borrowDate,
  onBorrow,
  onReturn
}) => {
  const handleBorrow = () => {
    // TODO: Prompt for borrower name in parent if required.
    if (onBorrow) onBorrow(_id);
  };

  const handleReturn = () => {
    if (onReturn) onReturn(_id);
  };

  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
      <p className="card-author">by {author}</p>
      <p className="card-category">Category: {category}</p>

      {isBorrowed ? (
        <>
          <p className="card-status">
            Borrowed by {borrowerName} on {borrowDate ? new Date(borrowDate).toLocaleDateString() : ""}
          </p>
          <Button label="Return" onClick={handleReturn} data-testid="return-button" />
        </>
      ) : (
        <>
          <p className="card-status">Available</p>
          <Button label="Borrow" onClick={handleBorrow} data-testid="borrow-button" />
        </>
      )}
    </div>
  );
};

export default Card;
