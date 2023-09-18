"use client";
import SocialMedia from "./SocialMedia";
import Copyright from "./Copyright";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mt-20">
      <SocialMedia />
      <Copyright />
    </div>
  );
};

export default Footer;
