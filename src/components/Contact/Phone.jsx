const Phone = () => {
  return (
    <div className="w-full bg-blue-100 flex items-center px-5 py-4 rounded-3xl cursor-pointer group">
      <a
        href="tel:+91 9411245528"
        className="text-blue-800 font-pacifico text-sm flex items-center gap-4"
      >
        <img
          src="./mobile.png"
          alt="mobile"
          className="w-9 transition-transform duration-300 transform-gpu group-hover:scale-125 group-hover:rotate-12"
        />
        <span>+91 9411245528</span>
      </a>
    </div>
  );
};

export default Phone;
