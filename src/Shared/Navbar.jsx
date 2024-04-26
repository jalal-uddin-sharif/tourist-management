import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const handleTheme = () => {
    if (!theme) {
      localStorage.setItem("theme", "synthwave");
    } else {
      localStorage.removeItem("theme");
    }
    setTheme(!theme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const Navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?  "focus:text-primary focus:outline-none focus:bg-transparent active:bg-transparent text-primary"
            : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-tourists-spot"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?  "focus:text-primary focus:outline-none focus:bg-transparent active:bg-transparent text-primary"
            : ""
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-tourists-spot"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?  "focus:text-primary focus:outline-none focus:bg-transparent active:bg-transparent text-primary"
            : ""
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-list"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?  "focus:text-primary focus:outline-none focus:bg-transparent active:bg-transparent text-primary"
            : ""
          }
        >
          My List
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-green-500 p-4 fixed w-full z-50 shadow-xl">
      <div className="navbar container mx-auto bg-base-100 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-5 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
            >
              {Navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold space-x-2">
            {Navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="cursor-pointer grid place-items-center mr-2">
            <input
              type="checkbox"
              onChange={handleTheme}
              checked={theme}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
