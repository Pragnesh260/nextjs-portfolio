import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <section className="flex items-center p-6 font-sans bg-black">
                <Link href="/">
                    <a className="ml-3 mr-auto md:ml-16">
                        <span className="text-xl tracking-wider text-white">
                            Pragnesh Anekal
                        </span>
                    </a>
                </Link>
                <div className="flex flex-col mr-auto">
                    <a href="https://www.linkedin.com/in/pragnesh-anekal-49b843190/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 tracking-wide text-white md:mx-4">
                        LinkedIn
                    </a>
                    <a href="https://twitter.com/PragneshAnekal" target="_blank" rel="noopener noreferrer" className="px-4 py-2 tracking-wide text-white md:mx-4">
                        Twitter
                    </a>
                    <a href="https://www.instagram.com/pragneshanekal/?hl=en" target="_blank" rel="noopener noreferrer" className="px-4 py-2 tracking-wide text-white md:mx-4">
                        Instagram
                    </a>
                </div>
            </section>
        </>
    )
}