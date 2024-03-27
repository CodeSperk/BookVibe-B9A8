import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredWishList = () => {
  const storedWishList = localStorage.getItem("books-wishList");
  if(storedWishList){
    return JSON.parse(storedWishList);
  }
  return [];
}

const getStoredReadBooks = () => {
  const storedReadBooks = localStorage.getItem("read-books");
  if(storedReadBooks){
    return JSON.parse(storedReadBooks);
  }
  return [];
}



const saveReadBooks = (id) => {
  const storedReadBooks = getStoredReadBooks();
  const storedWishList = getStoredWishList();
  const isExistInReadList = storedReadBooks.find(bookId=> bookId === id);
  const isExistInWishList = storedWishList.find(bookId => bookId === id);

  if(!isExistInReadList){
    storedReadBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedReadBooks));
    toast.success("Successfully added to read list!");
  }else{
    toast.error("You have already read the books.");
  }

  // if new read id exist in the wish list
  if(isExistInWishList){
    const index = storedWishList.indexOf(id);
    storedWishList.splice(index, 1);
    localStorage.setItem("books-wishList", JSON.stringify(storedWishList));
  }
}

const saveWishList = (id) => {
  const storedReadBooks = getStoredReadBooks();
  const storedWishList = getStoredWishList();

  const isExistInReadList = storedReadBooks.find(bookId => bookId === id);
  const isExistInWishList = storedWishList.find(listId => listId === id);

  if(isExistInReadList){
    toast.error("You have already read the book");
  }else if(isExistInWishList ){
    toast.error("Existed in your wishListed");
  }else{
    storedWishList.push(id);
    localStorage.setItem("books-wishList", JSON.stringify(storedWishList));
    toast.success("Successfully! added")
  }
}


export  {saveReadBooks, saveWishList, getStoredWishList, getStoredReadBooks }