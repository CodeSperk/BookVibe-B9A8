import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListedBookCard = ({ book }) => {
  const [tag1, setTag1] = useState(null);
  const [tag2, setTag2] = useState(null);

  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  useEffect(() => {
    if (tags) {
      setTag1(tags[0]);
      setTag2(tags[1]);
    }
  }, [tags]);

  return (
    <div className="flex flex-col md:flex-row gap-6 border border-[var(--bg-primary)] p-4 md:p-6 rounded-lg lg:rounded-2xl">
      <div className="bg-[var(--bg-primary)] w-full md:w-2/5 lg:w-1/5 py-7 px-16 md:px-8 rounded-lg lg:rounded-2xl">
        <img src={image} alt={bookName} className="w-full h-auto" />
      </div>

      <div className="flex flex-col justify-between w-full md:w-3/5 lg:w-3/4">
        <h3 className="font-playfair">{bookName}</h3>
        <h5 className="font-medium my-4">By : {author}</h5>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex gap-3 items-center">
            <span className="text-[var(--clr-heading)] font-bold mr-2">
              Tag
            </span>

        
              <p className="bg-green-50 py-1.5 px-4 rounded-3xl text-[var(--clr-accent)] font-medium">
                #{tag1}
              </p>
              <p className="bg-green-50 py-1.5 px-4 rounded-3xl text-[var(--clr-accent)] font-medium ">
                #{tag2}
              </p>
            </div>

          <div className="flex items-center gap-2">
            <img src="./icons/publishedTime.png" alt="icon" className="w-5 h-auto"/> <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="text-[var(--clr-paragraph)] flex items-center gap-4 my-4">
          <div className="flex items-center gap-2">
          <img src="./icons/publisher.png" alt="icon" className="w-5 h-auto"/>  <p>Publisher: {publisher}</p>
          </div>
          <div className="flex items-center gap-2">
          <img src="./icons/page.png" alt="icon" className="w-5 h-auto"/>  <p>Pages {totalPages}</p>
          </div>
        </div>

        <div className="border-t-2 border-solid border-[var(--bg-primary)] pt-4 grid grid-cols-2 lg:grid-cols-3 gap-3">
          <button className="bg-blue-100 py-2 px-5 rounded-3xl text-blue-700">
            Category: {category}
          </button>
          <button className="bg-orange-50 py-2 px-5 rounded-3xl text-[#FFAC33]">
            Rating: {rating}
          </button>

            <button className="bg-[var(--clr-accent)] py-2 px-5 rounded-3xl text-[var(--clr-white)] font-medium">
          <Link to={`/bookDetails/${bookId}`}>
              View Details
          </Link>
            </button>
        </div>
      </div>
    </div>
  );
};

ListedBookCard.propTypes = {
  book: PropTypes.object,
};

export default ListedBookCard;
