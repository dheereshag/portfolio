const Email = () => {
  return (
    <div className="w-full bg-rose-100 flex items-center px-5 py-4 rounded-3xl cursor-pointer group">
      <a
        href="mailto:da11@iitbbs.ac.in"
        className="text-pink-500 font-pacifico text-sm flex items-center gap-4"
      >
        <img
          src="./email.png"
          alt="email"
          className="w-9 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:-translate-y-1"
        />
        <span>da11@iitbbs.ac.in</span>
      </a>
    </div>
  );
};

export default Email;
