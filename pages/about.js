import Head from 'next/head';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body className="-mb-10 font-sans text-lg text-white bg-black scroll-smooth">
                <section className="flex justify-center">
                    <div className="flex flex-col p-4">
                        <h1 className="my-5 text-4xl italic font-semibold text-center sm:text-left mx-14">Hi there!</h1>
                        <div className="flex flex-col-reverse items-center justify-center sm:flex-row">
                            <div className="flex flex-col w-56 sm:w-1/2 sm:max-w-sm mx-7 sm:mr-14">
                                <p className="pt-4 text-lg">A little bit about me.</p>
                                <p className="pt-4 text-lg">I enjoy pursuing creative work, solving complex problems and writing.</p>
                                <p className="pt-4 text-lg">Outside of my (hopefully) lucrative skills, I enjoy working out,
                                    playing ball, reading, travelling and photography.</p>
                            </div>
                            <div className='relative w-32 h-32 my-4 overflow-hidden rounded-full sm:m-0 sm:w-48 sm:h-60 sm:rounded-lg'>
                                <Image src="/assets/profile_img_1.jpg" alt="Profile Picture" layout='fill' objectFit='cover' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center">
                    <grid className="grid grid-cols-1 gap-4 my-10 md:pb-24 md:grid-cols-3 md:pt-12">
                        <div className="flex flex-col items-center mx-6 border-b-2 md:mx-0 md:border-b-0 md:border-r-2 border-stone-100">
                            <h3 className="italic tracking-wide ">RESIDENT</h3>
                            <p className="p-2">Bangalore, IN</p>
                        </div>
                        <div className="flex flex-col items-center mx-6 border-b-2 md:mx-0 md:border-b-0 md:border-r-2 border-stone-100">
                            <h3 className="italic tracking-wide">READING RIGHT NOW</h3>
                            <p className="p-2">Deep Work by Cal Newport</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="italic tracking-wide">GOAL FOR THE MONTH</h3>
                            <p className="p-2">Read for atleast 30 minutes everyday</p>
                        </div>
                    </grid>
                </section>
            </body>
        </>
    )
}

