import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <Head>
        <title>Pragnesh Portfolio</title>
        <link rel="icon" href="/assets/website_logo_1.jpg" />
        <meta name="description" content="Hey! I'm Pragnesh. An engineer with a passion for tech and fitness." />
        <meta property="og:title" content="Pragnesh's Portfolio" />
        <meta property="og:description" content="An engineer with a passion for tech and fitness." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />
      </Head>
      <body className="bg-black scroll-smooth">
      <section className="flex flex-col items-center justify-center h-96">
        <div className="flex items-center justify-center w-2/3 font-sans text-white ">
          <h1 className="text-xl text-center md:text-4xl">
            Hey! I'm Pragnesh. An engineer with a passion for tech and fitness. Occasionally dabbling in the product space and shooting photographs.
          </h1>
        </div>
      </section>
      <container className="flex items-center justify-center px-6 -mb-10 pt-28 pb-36">
          <grid className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/mamba">
              <a className="overflow-hidden font-sans text-white border-2 sm:hover:scale-105 rounded-xl ">
                <div className='relative flex flex-col-reverse items-start rounded-xl w-72 h-72'>
                  <Image src="/assets/mamba.jpg" alt="Mamba" layout='fill' objectFit='cover' />
                  <h3 className="absolute p-3 text-3xl italic font-extrabold drop-shadow-lg">My Black Mamba Year</h3>
                  <div className="absolute mx-4 border-b-2 w-60 bottom-24"></div>
                </div>
              </a>
            </Link>
            <Link href="/communication">
              <a className="overflow-hidden font-sans text-white border-2 sm:hover:scale-105 rounded-xl ">
                <div className='relative flex flex-col-reverse items-start rounded-xl w-72 h-72'>
                  <Image src="/assets/communication_img.jpg" alt="Telephone" layout='fill' objectFit='cover' />
                  <h3 className="absolute p-3 text-3xl italic font-extrabold drop-shadow-lg">Art of Communication</h3>
                  <div className="absolute mx-4 border-b-2 w-60 bottom-24"></div>
                </div>
              </a>
            </Link>
            <Link href="/bitclass">
              <a className="overflow-hidden font-sans text-white border-2 sm:hover:scale-105 rounded-xl ">
                <div className='relative flex flex-col-reverse items-start rounded-xl w-72 h-72'>
                  <Image src="/assets/bitclass.jpg" alt="BitClass" layout='fill' objectFit='cover' />
                  <h3 className="absolute p-3 text-3xl italic font-extrabold drop-shadow-lg">A BitClass Case Study</h3>
                  <div className="absolute mx-4 border-b-2 w-60 bottom-24"></div>
                </div>
              </a>
            </Link>
          </grid>
        </container>
        <div className="flex flex-col items-end justify-center p-4 font-sans text-sm text-white">
          <div className="flex items-center justify-end font-sans text-white ">
              <p className="px-4 text-center">Source code (website):
              </p>
              <a href='https://github.com/Pragnesh260/nextjs-portfolio' target="_blank" rel="noopener noreferrer" className='underline '>Github</a>
          </div>
          <p className="text-center ">(Would appreciate tips on how to clean the code.)</p>
        </div>
      </body>
    </>
  )
}