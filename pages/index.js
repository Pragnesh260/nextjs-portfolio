import Link from 'next/link'

export default function Home() {

  return (
    <>
      <body className="bg-black">
      <section className="flex flex-col items-center justify-center h-96">
        <div className="flex items-center justify-center w-2/3 font-sans text-white ">
          <p className="text-xl text-center md:text-4xl">
            Hey! I'm Pragnesh. An engineer with a passion for tech and fitness. Occasionally dabbling in the product space and shooting photographs.
          </p>
        </div>
      </section>
      <container className="flex items-center justify-center px-6 -mb-10 pt-28 pb-36">
          <grid className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/mamba">
              <a className="relative flex flex-col-reverse items-start font-sans text-white border-2 hover:scale-105 rounded-xl w-72 h-72 ">
                <img src=".\mamba.jpg" className="object-cover h-full rounded-xl"alt="Mamba"/>
                <h5 className="absolute p-3 text-3xl italic font-extrabold drop-shadow-lg">My Black Mamba Year</h5>
                <div className="absolute mx-4 border-b-2 w-60 bottom-24"></div>
              </a>
            </Link>
            <Link href="/communication">
              <a className="relative flex flex-col-reverse items-start font-sans text-white border-2 hover:scale-105 rounded-xl w-72 h-72 ">
                <img src=".\communication_img.jpg" className="object-cover h-full rounded-xl"alt="Communication"/>
                <h5 className="absolute p-3 text-3xl italic font-extrabold drop-shadow-lg">Art of Communication</h5>
                <div className="absolute mx-4 border-b-2 w-60 bottom-24"></div>
              </a>
            </Link>
            <Link href="/bitclass">
              <a className="relative flex flex-col-reverse items-start font-sans text-white border-2 hover:scale-105 rounded-xl w-72 h-72 ">
                <img src=".\bitclass.jpg" className="object-cover h-full rounded-xl"alt="Bitclass"/>
                <h5 className="absolute p-3 text-3xl italic font-extrabold drop-shadow-lg">A BitClass Case Study</h5>
                <div className="absolute mx-4 border-b-2 w-60 bottom-24"></div>
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