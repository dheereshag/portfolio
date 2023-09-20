import { ProfileImage, HeaderSocial } from ".";
const HeaderSocials = () => {
  return (
    <div className="gap-16 flex flex-col ">
      <ProfileImage />

      <div className="grid grid-cols-2 gap-x-16 gap-y-4 font-inter text-zinc-300">
        <HeaderSocial
          href="mailto:da11@iitbbs.ac.in"
          iconClass="fa-solid fa-envelope"
        >
          da11@iitbbs.ac.in
        </HeaderSocial>
        <HeaderSocial
          href="https://github.com/dheereshagrwal"
          iconClass="ci ci-lg ci-github ci-invert"
        >
          Github
        </HeaderSocial>
        <HeaderSocial
          href="https://www.linkedin.com/in/dheereshagrwal/"
          iconClass="ci ci-lg ci-linkedin"
        >
          LinkedIn
        </HeaderSocial>
        <HeaderSocial
          href="https://leetcode.com/dheereshagrwal/"
          iconClass="ci ci-lg ci-leetcode-light"
        >
          Leetcode
        </HeaderSocial>
      </div>
    </div>
  );
};

export default HeaderSocials;
