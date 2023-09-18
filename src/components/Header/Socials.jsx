import { ProfileImage, Social } from ".";
const Socials = () => {
  return (
    <div className="gap-16 flex flex-col ">
      <ProfileImage />

      <div className="grid grid-cols-2 gap-x-16 gap-y-4 font-inter text-zinc-300">
        <Social
          href="mailto:da11@iitbbs.ac.in"
          iconClass="fa-solid fa-envelope"
        >
          da11@iitbbs.ac.in
        </Social>
        <Social
          href="https://github.com/dheereshagrwal"
          iconClass="ci ci-lg ci-github ci-invert"
        >
          Github
        </Social>
        <Social
          href="https://www.linkedin.com/in/dheereshagrwal/"
          iconClass="ci ci-lg ci-linkedin"
        >
          LinkedIn
        </Social>
        <Social
          href="https://leetcode.com/dheereshagrwal/"
          iconClass="ci ci-lg ci-leetcode-light"
        >
          Leetcode
        </Social>
      </div>
    </div>
  );
};

export default Socials;
