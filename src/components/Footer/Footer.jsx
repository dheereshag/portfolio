"use client";
import { FooterSocials, Copyright } from ".";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mt-20">
      <FooterSocials />
      <Copyright />
    </div>
  );
};

export default Footer;
