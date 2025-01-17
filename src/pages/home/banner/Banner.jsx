import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-[var(--bg-primary)] py-10 md:py-12 lg:py-16 px-4 md:px-16 lg:px-20 2xl:px-24 rounded-2xl flex flex-col-reverse md:flex-row justify-between items-center gap-12">
      <div className="md:w-2/3">
        <h1 className="cursor-pointer font-playfair text-center md:text-start">
          Revitalize your book collection with these captivating reads.
        </h1>
        <Link to="/listedBooks"><button className="btn w-full md:w-fit mt-10 md:mt-12">View The List</button></Link>
      </div>

      <div className="md:w-2/5 md:1/3">
        <img src="/banner-img.png" alt="" className="w-full max-w-80"/>
      </div>
    </section>
  );
};

export default Banner;
