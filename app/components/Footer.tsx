import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-blue-300 border-opacity-25 p-6 text-center relative ">
      <p className="text-headline_light">
        Copyright © 2024. All rights are reserved
      </p>
      <div className="hidden md:flex space-x-4 absolute right-5 top-1/2 -translate-y-1/2">
        <Link
          href={
            "https://www.linkedin.com/in/habib-behdarvandi-7012152ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          }
          className="text-headline_light hover:text-primary_light transition-colors"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </Link>
        <Link
          href={"https://github.com/HabibBehdarvandiDev"}
          className="text-headline_light hover:text-primary_light transition-colors"
        >
          <FiGithub className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
