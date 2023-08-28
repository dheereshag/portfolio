"use client";
import Link from "next/link";
import { AppWrap } from "../../wrapper";

const Header = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between text-white"
      id="home"
    >
      <aside className="flex flex-col gap-4  mt-16 md:m-10 font-dm-sans w-full md:w-5/12">
        <h1 className="text-4xl font-extrabold">
          I'm Dheeresh. I am a web developer.
        </h1>
        <p className="mt-2">
          I've loved making things for as long as I can remember, and wrote my
          first program when I was 6 years old, just two weeks after my mom
          brought home the brand new Macintosh LC 550 that I taught myself to
          type on.
        </p>
        <p>
          I spent the next few summers indoors working on a rocket design, while
          I recovered from the multiple surgeries it took to fix my badly broken
          legs. It took nine iterations, but when I was 15 I sent my dad's
          Blackberry into orbit and was able to transmit a photo back down to
          our family computer from space.
        </p>
        <p>
          Today, I’m the founder of Planetaria, where we’re working on civilian
          space suits and manned shuttle kits you can assemble at home so that
          the next generation of kids really can make it to orbit — from the
          comfort of their own backyards.
        </p>

      </aside>

      <aside className="flex flex-col mr-28 mt-16 gap-14 w-full md:w-3/12">
       
        <img
          src="./square.jpg"
          alt="profile_bg"
          className="grayscale hover:grayscale-0 bg-cover bg-grey-300 shadow rounded-2xl transform rotate-3 scale-110 mr"
        />

        <div className="flex flex-col gap-2 font-inter">
          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-green-500"
            href="https://github.com/dheereshagrwal"
          >
            <i className="ci ci-lg ci-github ci-invert"></i>
            <p>Follow on Github</p>
          </Link>
          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-green-500"
            href="https://twitter.com/dheeresh_agrwal"
          >
            <i className="ci ci-lg ci-leetcode-light"></i>
            <p>Follow on Twitter</p>
          </Link>
          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-green-500"
            href="https://www.linkedin.com/in/dheereshagrwal/"
          >
            <i className="ci ci-lg ci-linkedin"></i>
            <p>Follow on LinkedIn </p>
          </Link>

          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-green-500"
            href="https://twitter.com/dheeresh_agrwal"
          >
            <i className="ci ci-lg ci-instagram"></i>
            <p>Follow on Instagram </p>
          </Link>

        </div>
      </aside>
    </div>
  );
};

export default AppWrap( Header, "home", "bg-zinc-900");
