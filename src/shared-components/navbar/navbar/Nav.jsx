import "./nav.css";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  ListItem,
  List,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const menuList = (
    <>
      <List className="flex lg:gap-3 lg:flex-row nav-list mb-10 lg:mb-0 font-work-sans nav-list">
        <NavLink to="/" className="item">
          <ListItem>Home</ListItem>
        </NavLink>
        <NavLink to="/listedBooks" className="item">
          <ListItem>Listed Books</ListItem>
        </NavLink>
        <NavLink to="/pagesToRead" className="item">
          <ListItem>Page to Read</ListItem>
        </NavLink>
        <NavLink to="/faq" className="item">
          <ListItem>FAQ</ListItem>
        </NavLink>
        <NavLink to="/contact" className="item">
          <ListItem>Contact</ListItem>
        </NavLink>
      </List>
    </>
  );

  return (
    
      <nav className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 2xl:px-14 py-6 md:py-8 lg:py-10">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography variant="h4" className="cursor-pointer font-work-sans">
            Book Vibe
          </Typography>

          <div className="hidden lg:block">{menuList}</div>

          <div className="hidden gap-2 lg:flex">
            <button className="btn">Sign In</button>
            <button className="btn btn-2">Sign Up</button>
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        <Collapse open={openNav}>
          {menuList}

          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <button className="btn w-full lg:w-fit">Sign In</button>
            <button className="btn btn-2 w-full lg:w-fit">Sign Up</button>
          </div>
        </Collapse>
      </nav>
  );
};

export default Nav;
