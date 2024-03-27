import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredReadBooks,
  getStoredWishList,
} from "../../utils/localStorage";
import ListedBookCard from "./listedBooksCard/ListedBookCard";

const Listed = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const allBooks = useLoaderData();
  const [wishList, setWishList] = useState([]);
  const [readList, setReadList] = useState([]);

  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const wishListedIds = getStoredWishList();
    const readBooksIds = getStoredReadBooks();

    // to filter list of books added in the wishlist
    const wishListedBooks = allBooks.filter((book) =>
      wishListedIds.includes(book.bookId)
    );
    setWishList(wishListedBooks);

    // to filter list of books added in the readList
    const readListedBooks = allBooks.filter((readBook) =>
      readBooksIds.includes(readBook.bookId)
    );
    setReadList(readListedBooks);
  }, [allBooks]);
console.log(readList);
  // function to sort books
  const sortBooks = (books) => {
    if(sortBy === "rating"){
      return [...books].sort((a,b)=> b.rating - a.rating);
    }else if(sortBy === "numberOfPages"){
      return [...books].sort((a,b)=> b.totalPages - a.totalPages);
    }else if(sortBy === "publishedYear"){
      return [...books].sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing);
    }else{
      return books;
    }
  }


  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 2xl:px-14 mb-16 md:mb-20 lg:mb-28">
      <h2 className="text-center bg-[var(--bg-primary)] p-6 md:p-8 rounded-xl lg:rounded-2xl">
        Books
      </h2>

      <div className="mt-8 text-center w-48 mx-auto">  
        <select 
          className="p-2 bg-[var(--clr-accent)] text-white w-full rounded-lg shadow-md py-3 px-6 outline-none"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="" className="bg-[#E7E7E7] text-[var(--clr-primary)]">Sort By</option>

          <option value="rating" className="bg-[#E7E7E7] text-[var(--clr-primary)]">Rating</option>

          <option value="numberOfPages" className="bg-[#E7E7E7] text-[var(--clr-primary)]">Number of Pages</option>

          <option value="publishedYear" className="bg-[#E7E7E7] text-[var(--clr-primary)]">Published Year</option>
          
        </select>
      </div>

      <section className="mt-10 lg:mt-14">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              <p className="">Read Books</p>
            </Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <div className="flex flex-col gap-6 mt-8">
              {sortBooks(readList).map((readBook) => (
                <ListedBookCard
                  key={readBook.bookId}
                  book={sortBooks([readBook])[0]}
                ></ListedBookCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-6 mt-8">
              {sortBooks(wishList).map((wishedBook) => (
                <ListedBookCard
                  key={wishedBook.bookId}
                  book={wishedBook}
                ></ListedBookCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </main>
  );
};

export default Listed;
