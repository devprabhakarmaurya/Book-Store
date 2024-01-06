import React from "react";
import BookSingleCard from "./BookSingleCard";
const BookCard = ({books}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item, index) => (
        // {console.log(item)}
       <BookSingleCard book={item} index={index} key={item._id}></BookSingleCard>
      ))}
    </div>
  );
};

export default BookCard;
