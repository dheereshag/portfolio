import Link from "next/link";
const ViewCV = () => {
  return (
    <Link
      href="https://drive.google.com/file/d/1B32Dcsmr-1fQStcyyvHlbJ0RCNBjdOx0/view?usp=sharing"
      target="_blank"
      className="group relative block w-36 h-12"
    >
      <span className="absolute inset-0 border-2 border-dashed border-white"></span>

      <div className="transform-gpu border-2 items-center gap-2 flex justify-center border-white bg-black transition-all group-hover:-translate-x-2 group-hover:-translate-y-2 h-full">
        <i className="fa-solid fa-eye text-white"></i>
        <p className="text-lg text-white">View CV</p>
      </div>
    </Link>
  );
};

export default ViewCV;
