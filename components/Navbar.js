import Link from "next/link";

export const Navbar = () => {

  return (
    <>
      <nav className="flex items-center p-4 font-sans bg-black">
        <Link href="/">
          <a className="flex ml-3 mr-auto md:ml-16">
            <img src=".\website_logo_1.jpg" className="mx-3 w-14 h-14 md:w-20 md:h-20" alt="website_logo"/>
          </a>
        </Link>
        <div className="flex ml-auto md:mr-12">
          <Link href="/">
              <a className="px-4 py-2 text-xl tracking-wide text-white border-2 border-transparent rounded md:mx-4 hover:border-white hover:text-white">
              Home
              </a>
          </Link>
          <Link href="/about">
              <a className="px-4 py-2 text-xl tracking-wide text-white border-2 border-transparent rounded md:mx-4 hover:border-white hover:text-white">
              About
              </a>
          </Link>
        </div>
      </nav>
    </>
  );
};