import Link from "next/link";
const HeaderSocial = ({ href, iconClass, children }) => {
  return (
    <Link
      className="flex items-center gap-4 cursor-pointer hover:text-blue-500"
      href={href}
      target="_blank"
    >
      <i className={iconClass}></i>
      <p>{children}</p>
    </Link>
  );
};

export default HeaderSocial;
