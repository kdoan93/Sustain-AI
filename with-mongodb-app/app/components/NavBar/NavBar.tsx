import React from "react";

function NavBar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img
            src="/images/sustainlogo-peach.png"
            className="h-20 w-20"
            alt="Sustain Logo"
          />
          <a className="btn btn-ghost text-xl text-dark-brown">Sustain</a>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {/* THIS SECTION IS THE DROPDOWN NOT SURE IF WE ARE USING DEPENDS IF BACKEND IS DONE */}
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
          {/* ***** */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;