import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-red-500">Oops!</h1>

        <h5> {error.error?.message}</h5>
        <p className="text-xl font-bold"> Error status : {error.status}</p>
        <Link>
        <button className="btn text-xl font-bold mt-8">Go To Home Page</button>
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
