import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utils/localStorage";
import Chart from "./chart/Chart";

const ToRead = () => {
  const books = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(()=>{
    const readBooksIds = getStoredReadBooks();
    
    const filteredBooks = books.filter(book=> readBooksIds.includes(book.bookId) );
    setReadList(filteredBooks);
  },[books])

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 2xl:px-14 mb-16 md:mb-20 lg:mb-28">
      {readList.map((book, idx)=> <Chart key={idx} book={book}></Chart>)}
      
    </section>
  );
};

export default ToRead;