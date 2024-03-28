

const Contact = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 2xl:px-14 flex justify-center">


      <div className="max-w-6xl px-4 md:px-12 mx-auto bg-[var(--bg-primary)] mt-6 py-8 rounded-md">
      <h2 className="uppercase text-center mb-20 max-w-[70%] mx-auto">
        We are Happy to hear from you
      </h2>
        <form>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-[var(--clr-heading)] bg-transparent border-0 border-b-2 border-text-[var(--clr-accent)] appearance-none dark:text-white dark:border-text-[var(--clr-accent)]dark:focus:border-[var(--clr-accent)] focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-[var(--clr-secondary)] dark:text-[var(--clr-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--clr-accent)] peer-focus:dark:text-[var(--clr-accent)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-[var(--clr-heading)] bg-transparent border-0 border-b-2 border-text-[var(--clr-accent)] appearance-none dark:text-white dark:border-[var(--clr-secondary)] dark:focus:border-[var(--clr-accent)] focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-[var(--clr-secondary)] dark:text-[var(--clr-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--clr-accent)] peer-focus:dark:text-[var(--clr-accent)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Mobile Number
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-[var(--clr-heading)] bg-transparent border-0 border-b-2 border-text-[var(--clr-accent)] appearance-none dark:text-white dark:border-text-[var(--clr-accent)]dark:focus:border-[var(--clr-accent)] focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-[var(--clr-secondary)] dark:text-[var(--clr-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--clr-accent)] peer-focus:dark:text-[var(--clr-accent)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your email
              </label>
            </div>

          {/* description input */}
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              rows="5"
              name="message"
              id="message"
              className="block py-2.5 px-0 w-full text-sm text-[var(--clr-heading)] bg-transparent border-0 border-b-2 border-text-[var(--clr-accent)] appearance-none dark:text-white dark:border-text-[var(--clr-accent)]dark:focus:text-[var(--clr-accent)] focus:outline-none focus:ring-0 focus:border-text-[var(--clr-accent)] peer"
              placeholder=" "
              required
            ></textarea>
            <label className="peer-focus:font-medium absolute text-sm text-[var(--clr-secondary)] dark:text-[var(--clr-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--clr-accent)] peer-focus:dark:text-[var(--clr-accent)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Write short short message here...
            </label>
          </div>


          <button
            type="submit"
            className="text-center mt-4 w-full bg-[var(--clr-accent)] text-white py-3 px-4 mx-auto rounded hover:bg-green-700 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      
    </main>
  );
};

export default Contact;
