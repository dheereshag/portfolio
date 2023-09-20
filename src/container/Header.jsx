"use client";
import { AppWrap } from "../wrapper";
import { HeaderText, HeaderSocials, ViewCV } from "../components/Header";

const Header = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between text-zinc-300 mt-10"
      id="home"
    >
      <aside className="flex flex-col gap-10 lg:m-10 font-dm-sans w-full lg:w-6/12 xl:w-5/12">
        <HeaderText />
        <ViewCV />
      </aside>
      <aside className="xl:mr-28 lg:mr-10 mt-16 w-full md:w-7/12 lg:w-5/12 xl:w-3/12">
        <HeaderSocials />
      </aside>
    </div>
  );
};

export default AppWrap(Header, "home", "bg-zinc-900");
