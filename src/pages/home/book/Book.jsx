import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const [tag1, setTag1] = useState(null);
  const [tag2, setTag2] = useState(null);

  const { bookId, image, tags, bookName, author, category, rating } = book;

  useEffect(()=>{
    if(tags){
        setTag1(tags[0]);
        setTag2(tags[1]);     
    }
  },[tags]);


 


  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="max-w-96 mx-auto p-4 md:p-6 rounded-lg md:rounded-xl border border-[var(--bg-primary)]">
        <div className="bg-[var(--bg-primary)] py-6 md:py-8 h-60 px-16 lg:px-20">
          <img src={image} alt={bookName} className="h-full mx-auto px" />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex gap-4 font-medium text-[var(--clr-accent)] mt-6">
            <p className="bg-green-100 py-1.5 px-3 rounded-3xl">{tag1}</p>
            <p className="bg-green-100 py-1.5 px-3 rounded-3xl">{tag2}</p>
          </div>
          <div className="flex-grow">
            <h4 className="font-playfair">{bookName}</h4>
            <p>By: {author} </p>
          </div>
          <div className="border-t border-dashed pt-4 border-red-300 text-[var(--clr-secondary)] flex justify-between">
            <p>{category}</p>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
