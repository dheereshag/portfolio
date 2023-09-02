"use client";
import { AppWrap } from "../../wrapper";
import HeaderText from "@/container/Header/HeaderText";
import Social from "./Social";

const Header = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between text-zinc-300"
      id="home"
    >
      <aside className="flex flex-col gap-4 mt-16 lg:m-10 font-dm-sans w-full lg:w-5/12">
        <HeaderText />
      </aside>

      <aside className="lg:mr-28 mt-16 w-full md:w-7/12 lg:w-3/12">
        <Social />
      </aside>
    </div>
  );
};

export default AppWrap(Header, "home", "bg-zinc-900");
