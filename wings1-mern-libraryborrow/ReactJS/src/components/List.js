import React from "react";
import Card from "./Card";
import "../styles/list.css";

/**
 * List component.
 * Props:
 * - data: array of book objects
 * - onBorrow: function(id)
 * - onReturn: function(id)
 */
const List = ({ data = [], onBorrow, onReturn }) => {
  if (!data.length) {
    return <p data-testid="empty-list">No books available.</p>;
  }

  return (
    <div className="list-container">
      {data.map((book) => (
        <Card
          key={book._id}
          _id={book._id}
          title={book.title}
          author={book.author}
          category={book.category}
          isBorrowed={book.isBorrowed}
          borrowerName={book.borrowerName}
          borrowDate={book.borrowDate}
          onBorrow={onBorrow}
          onReturn={onReturn}
        />
      ))}
    </div>
  );
};

export default List;
