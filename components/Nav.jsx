"use client";
import { Navbar } from "flowbite-react";

const Nav = () => {
  return (
    <div className="flex-between border-b border-gray-400 w-full py-4">
      <div>
        <ul className="flex-between gap-4">
          <li>Gallery</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>Logo</div>
      <div>Social Media</div>
    </div>
  );
};

export default Nav;
