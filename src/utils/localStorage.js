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
  const isExistInReadList = storedReadBooks.find(bookId=> bookId === id);

  if(!isExistInReadList){
    storedReadBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedReadBooks));
  }
}

const saveWishList = (id) => {
  const storedReadBooks = getStoredReadBooks();
  const storedWishList = getStoredWishList();

  const isExistInReadList = storedReadBooks.find(bookId => bookId === id);
  const isExistInWishList = storedWishList.find(listId => listId === id);

  if(!isExistInReadList  && !isExistInWishList ){
    storedWishList.push(id);
    localStorage.setItem("books-wishList", JSON.stringify(storedWishList));
  }
}


export  {saveReadBooks, saveWishList}