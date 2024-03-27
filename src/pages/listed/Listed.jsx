import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadBooks, getStoredWishList } from "../../utils/localStorage";
import ListedBookCard from "./listedBooksCard/ListedBookCard";

const Listed = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const allBooks = useLoaderData();
  const [wishList, setWishList] = useState([]);
  const [readList, setReadList] = useState([]);

 useEffect(()=>{
  const wishListedIds = getStoredWishList();
  const readBooksIds = getStoredReadBooks();
  
  
  // to filter list of books added in the wishlist
  const wishListedBooks = allBooks.filter(book=> wishListedIds.includes(book.bookId));
  setWishList(wishListedBooks);

  // to filter list of books added in the readList
  const readListedBooks = allBooks.filter(readBook=> readBooksIds.includes(readBook.bookId));
  setReadList(readListedBooks);

 },[allBooks]);

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 2xl:px-14 mb-16 md:mb-20 lg:mb-28">
      <h2 className="text-center bg-[var(--bg-primary)] p-6 md:p-8 rounded-xl lg:rounded-2xl">
        Books
      </h2>

      <div className="mt-8 text-center w-48 mx-auto" >
        
        <select name="" id="" className="bg-[var(--clr-accent)] py-3 px-6 text-[var(--clr-white)] outline-none rounded-md text-lg">
          <option value="#" >Sort By</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Published Year</option>
        </select>


      </div>

      <section className="mt-10 lg:mt-14">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab><p className="">Read Books</p></Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <div className="flex flex-col gap-6 mt-8">
              {
                readList.map(readBook=> <ListedBookCard key={readBook.bookId} book={readBook}></ListedBookCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="flex flex-col gap-6 mt-8">
              {
                wishList.map(wishedBook=> <ListedBookCard key={wishedBook.bookId} book={wishedBook}></ListedBookCard>)
              }
            </div>

          </TabPanel>
        </Tabs>
      </section>
    </main>
  );
};

export default Listed;
