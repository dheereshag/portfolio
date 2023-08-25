"use client";
import Link from "next/link";
import { AppWrap } from "../../wrapper";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-white" id="home">
      <aside className="flex flex-col gap-4 m-3 md:m-10 font-dm-sans w-full md:w-5/12">
        <h1 className="text-4xl font-extrabold">
          I'm Dheeresh. I am a web developer.
        </h1>
        <p>
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
      </aside>
      <aside className="flex flex-col gap-14 w-full md:w-3/12">
        <img
          src="./square.jpg"
          alt="profile_bg"
          className="grayscale hover:grayscale-0 bg-cover bg-grey-300 shadow rounded-2xl transform rotate-3 scale-110"
        />
        <div className="flex flex-col gap-2 text-lg">
          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
            href="https://github.com/dheereshagrwal"
          >
            <i className="ci ci-github ci-invert"></i>
            <p>Github</p>
          </Link>
          <Link
            className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
            href="https://twitter.com/dheeresh_agrwal"
          >
            <i className="ci ci-twitter"></i>
            <p>Twitter</p>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default AppWrap(Header, "home", "bg-zinc-900");
