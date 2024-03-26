import { useLoaderData, useParams } from "react-router-dom";
import { handleReadList, handleWishList } from "../../utils/localStorage";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const {id} = useParams();
  const [book, setBook] = useState({});
  const [tag1, setTag1] = useState(null);
  const [tag2, setTag2] = useState(null);

  useEffect(()=>{
    if(books){
      const targetedBook = books.find((item)=> item.bookId === id);
      setBook(targetedBook);

       // Extracting tags
       if (targetedBook && targetedBook.tags) {
        setTag1(targetedBook.tags[0]);
        setTag2(targetedBook.tags[1]);
      }
    }
  },[books, id]);

  const {bookId, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = book;


  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 2xl:px-14 mb-16 md:mb-20 lg:mb-24 flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
     <div className="bg-[var(--bg-primary)] p-12 md:p-20 rounded-xl lg:rounded-2xl">
      <img src={image} alt={bookName} className="w-full"/>
     </div>
      
      <div className="flex flex-col justify-between">
        <h2>{bookName}</h2>
        <h5 className="font-medium mt-3">By : {author}</h5>
        <h4 className="text-[var(--clr-paragraph)] border-y-2 border-solid border-[var(--bg-primary)] py-4 my-6">{category}</h4>
       
        <p><span className="text-[var(--clr-heading)] font-bold">Review: </span> {review}</p>

        <div className="flex items-center gap-4 border-b-2 border-solid border-[var(--bg-primary)] pb-4">
        <span className="text-[var(--clr-heading)] font-bold my-7">Tag </span> 
            <p className="bg-green-50 py-1.5 px-4 rounded-3xl text-[var(--clr-accent)] font-medium">{tag1}</p>
            <p className="bg-green-50 py-1.5 px-4 rounded-3xl text-[var(--clr-accent)] font-medium ">{tag2}</p>
        </div>       
        
        <table className="border-collapse mb-8">
          <tbody>
          <tr>
            <td>Number of Pages</td>
            <td className="py-2 pl-6 font-semibold">{totalPages}</td>
          </tr>
          <tr>
            <td>publisher</td>
            <td className="py-2 pl-6 font-semibold">{publisher}</td>
          </tr>
          <tr>
            <td>Year of Publishing</td>
            <td className="py-2 pl-6 font-semibold">{yearOfPublishing}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td className="py-2 pl-6 font-semibold">{rating}</td>
          </tr>
          </tbody>
        </table>
       

      <div className="flex gap-6">
      <button className="py-3 px-6 hover:bg-[var(--bg-primary)] border-2 border-[var(--bg-primary)] text-[var(--clr-heading)] rounded-lg font-semibold duration-300 ">Read</button>

      <button className="py-3 px-6 bg-[var(--clr-accent)] hover:bg-transparent text-[var(--clr-white)] border-2 border-[var(--bg-primary)] hover:text-[var(--clr-heading)] rounded-lg font-semibold duration-300 "   onClick={()=> handleWishList(id)}>Wishlist</button>
     
      </div>
      </div>
      {/* 
.btn:hover{
  background:#0f6003;
  border-radius: 12px;
}
.btn-2{
  background: var(--clr-accent-2);
  border: 2px solid var(--clr-accent-2);
}
.btn-2:hover{
  background:#256a72;
} */}
    </section>
  );
};

export default BookDetails;