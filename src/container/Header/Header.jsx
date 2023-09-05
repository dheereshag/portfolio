"use client";
import { AppWrap } from "../../wrapper";
import HeaderText from "./HeaderText";
import ViewCV from "./ViewCV";
import Social from "./Social";

const Header = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between text-zinc-300"
      id="home"
    >
      <aside className="flex flex-col gap-10 mt-10 lg:m-10 font-dm-sans w-full lg:w-6/12 xl:w-5/12">
        <HeaderText />
        <ViewCV />
      </aside>
      <aside className="xl:mr-28 lg:mr-10 mt-16 w-full md:w-7/12 lg:w-5/12 xl:w-3/12">
        <Social />
      </aside>
    </div>
  );
};

export default AppWrap(Header, "home", "bg-zinc-900");
