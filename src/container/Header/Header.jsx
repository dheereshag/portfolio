"use client";
import Link from "next/link";
import { AppWrap } from "../../wrapper";
import HeaderText from "@/container/Header/HeaderText";

const Header = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between text-zinc-300"
      id="home"
    >
      <aside className="flex flex-col gap-4 mt-16 md:m-10 font-dm-sans w-full md:w-5/12">
        <HeaderText />
      </aside>

      <aside className="flex flex-col mr-28 mt-16 gap-16 w-full md:w-3/12">
        <img
          src="./square.jpg"
          alt="profile_bg"
          className="hover:grayscale bg-cover bg-grey-300 shadow rounded-2xl transform rotate-3 scale-110 mr"
        />

        <div className="grid grid-cols-2 gap-4 font-inter text-zinc-300">
          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
            href="mailto:da11@iitbbs.ac.in"
          >
            <i class="fa-solid fa-envelope"></i>
            <p>da11@iitbbs.ac.in</p>
          </Link>
          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
            href="https://github.com/dheereshagrwal"
            target="_blank"
          >
            <i className="ci ci-lg ci-github ci-invert"></i>
            <p>Github</p>
          </Link>

          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
            href="https://www.linkedin.com/in/dheereshagrwal/"
            target="_blank"
          >
            <i className="ci ci-lg ci-linkedin"></i>
            <p>LinkedIn </p>
          </Link>

          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
            href="https://leetcode.com/dheereshagrwal/"
            target="_blank"
          >
            <i className="ci ci-lg ci-leetcode-light"></i>
            <p>Leetcode </p>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default AppWrap(Header, "home", "bg-zinc-900");
