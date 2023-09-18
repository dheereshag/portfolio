"use client";
import FooterSocials from "./FooterSocials";
import Copyright from "./Copyright";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mt-20">
      <FooterSocials />
      <Copyright />
    </div>
  );
};

export default Footer;
