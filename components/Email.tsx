import Link from "next/link";
import { IoMail } from "react-icons/io5";

export default function Email() {
  return (
    <Link
      href="mailto:da11@iitbbs.ac.in"
      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
    >
      <IoMail size={16} />
      da11@iitbbs.ac.in
    </Link>
  );
}
