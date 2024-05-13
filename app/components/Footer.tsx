import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center bg-neutral-200 text-center px-6 py-2 mt-6">
      <small className="font-medium">2024 Airbnb-Clone</small>
      <small className="font-medium">Academia SYNTACTIC</small>
      <small className="font-medium">
        <Link
          target="_blank"
          href="https://github.com/juansebastianwebdev"
          className="flex items-center gap-x-1"
        >
          <IoLogoGithub size={20} />
          juansebastiandev
        </Link>
      </small>
    </footer>
  );
}
