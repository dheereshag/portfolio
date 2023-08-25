"use client";
import Link from "next/link";
import { AppWrap } from "../../wrapper";

const Header = () => {
  return (
    <div className="flex justify-evenly" id="home">
      <aside className="flex flex-col gap-4 p-4 font-dm-sans w-5/12 rounded-xl shadow-md ">
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
      <aside className="flex flex-col">
        <img
          src="./square.jpg"
          alt="profile_bg"
          className="grayscale hover:grayscale-0 bg-cover bg-grey-300 w-96 shadow rounded-2xl transform rotate-3 scale-110"
        />
        <div className="mt-10">
          <Link
            className="flex items-center gap-2 cursor-pointer hover:text-green-500"
            href="https://github.com/dheereshagrwal"
          >
            <i className="ci ci-github"></i>
            <p>Github</p>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default AppWrap(Header, "home", "bg-blue-50");
