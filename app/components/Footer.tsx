import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center bg-neutral-200 text-center px-3 lg:px-6 py-2 mt-6">
      <small className="flex flex-col-reverse items-center font-medium sm:flex-row sm:gap-x-1">2024 <span>Airbnb-Clone</span></small>
      <small className="flex flex-col items-center font-medium sm:flex-row sm:gap-x-1">
        <span>Academia</span> <span>SYNTACTIC</span>
      </small>
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
