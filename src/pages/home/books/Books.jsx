import PropTypes from 'prop-types';
import Book from '../book/Book';

const Books = ({books}) => {
  return (
    <section className="mt-10 md:mt-16 lg:mt-24">
      <h2 className="text-center">Books</h2>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 xl:gap-6'>
        {
          books.map((book) => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </section>
  );
};

Books.propTypes={
  books:PropTypes.array,
}

export default Books;