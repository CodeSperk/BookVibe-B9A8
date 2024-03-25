import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>navbar...</h1>
       <Outlet></Outlet>
      <h3>footer....</h3>
    </div>
  );
};

export default Layout;