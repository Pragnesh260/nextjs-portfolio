import Link from "next/link";
import Image from 'next/image';

export const Navbar = () => {

  return (
    <>
      <nav className="flex items-center p-4 font-sans bg-black">
        <Link href="/">
          <a className="ml-3 mr-auto md:ml-16">
            <Image src="/assets/website_logo_1.jpg" alt="Website Logo" width={70} height={70} />
          </a>
        </Link>
        <div className="flex ml-auto md:mr-12">
          <Link href="/">
              <a className="px-4 py-2 text-xl tracking-wide text-white rounded focus-within:border-b-2 sm:border-2 sm:border-transparent md:mx-4 sm:hover:border-white hover:text-white">
              Home
              </a>
          </Link>
          <Link href="/about">
              <a className="px-4 py-2 text-xl tracking-wide text-white rounded focus-within:border-b-2 sm:border-2 sm:border-transparent md:mx-4 sm:hover:border-white hover:text-white">
              About
              </a>
          </Link>
        </div>
      </nav>
    </>
  );
};