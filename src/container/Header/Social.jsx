import Link from "next/link";
const Social = () => {
  return (
    <div className="gap-16 flex flex-col ">
      
      <img
        src="./square.jpg"
        alt="profile_bg"
        className="hover:grayscale bg-cover rotate-3 scale-110"
      />

      <div className="grid grid-cols-2 gap-4 font-inter text-zinc-300">
        <Link
          className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
          href="mailto:da11@iitbbs.ac.in"
        >
          <i className="fa-solid fa-envelope"></i>
          <p>da11@iitbbs.ac.in</p>
        </Link>
        <Link
          className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
          href="https://github.com/dheereshagrwal"
          target="_blank"
        >
          <i className="ci ci-lg ci-github ci-invert"></i>
          <p>Github</p>
        </Link>

        <Link
          className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
          href="https://www.linkedin.com/in/dheereshagrwal/"
          target="_blank"
        >
          <i className="ci ci-lg ci-linkedin"></i>
          <p>LinkedIn </p>
        </Link>

        <Link
          className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
          href="https://leetcode.com/dheereshagrwal/"
          target="_blank"
        >
          <i className="ci ci-lg ci-leetcode-light"></i>
          <p>Leetcode </p>
        </Link>
      </div>
    </div>
  );
};

export default Social;
