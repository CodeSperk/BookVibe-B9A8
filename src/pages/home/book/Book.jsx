import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const [tag1, setTag1] = useState(null);
  const [tag2, setTag2] = useState(null);

  const { bookId, image, tags, bookName, author, category, rating } = book;

  useEffect(() => {
    if (tags) {
      setTag1(tags[0]);
      setTag2(tags[1]);
    }
  }, [tags]);
  return (
    <Link to={`/bookDetails/${bookId}`} className="p-4 md:p-6 rounded-lg md:rounded-2xl border border-[var(--bg-primary)] flex flex-col items-stretch">
      
        <div className="bg-[var(--bg-primary)] py-6 md:py-8 h-60 px-16 lg:px-20 rounded-lg md:rounded-2xl">
          <img src={image} alt={bookName} className="h-full mx-auto px" />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex gap-4 font-medium text-[var(--clr-accent)] mt-6 mb-4 ">
            <p className="bg-green-100 py-1.5 px-3 rounded-3xl">{tag1}</p>
            <p className="bg-green-100 py-1.5 px-3 rounded-3xl">{tag2}</p>
          </div>

          <div className="pb-5 flex-grow">
            <h4 className="font-playfair">{bookName}</h4>
            <p className="mt-4 font-medium">By: {author} </p>
          </div>

          <div className="border-t border-dashed border-[var(--clr-secondary)] pt-4 flex justify-between font-medium">
            <p>{category}</p>
            <div className="flex gap-2"> 
              <p>{rating} </p>
              <img src="./icons/star.png" alt="" className="w-5 h-5"/>
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
