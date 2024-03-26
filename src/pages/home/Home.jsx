import useBooksData from "../../hooks/useBooksData";
import Banner from "./banner/Banner";
import Books from "./books/Books";

const Home = () => {
  const {data} = useBooksData();
  
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 2xl:px-14">
      <Banner></Banner>

      <main>
        <Books books={data}></Books>
        
      </main>
      


      
    </div>
  );
};

export default Home;