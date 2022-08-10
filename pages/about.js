export default function About() {
    return (
        <>
            <body className="-mb-10 font-sans text-lg text-white bg-black">
                <section className="flex justify-center">
                    <div className="flex flex-col p-4">
                        <h2 className="my-5 text-4xl italic font-semibold mx-14 md:m-5">Hi there!</h2>
                        <div className="flex flex-col-reverse items-center justify-center md:flex-row">
                            <div className="flex flex-col w-56 md:w-1/2 md:max-w-sm mx-7 md:mr-14">
                                <p className="pt-4 text-lg">A little bit about me.</p>
                                <p className="pt-4 text-lg">I enjoy pursuing creative work, solving complex problems and writing.</p>
                                <p className="pt-4 text-lg">Outside of my (hopefully) lucrative skills, I enjoy working out,
                                    playing ball, reading, traveling and photography.</p>
                            </div>
                            <img src=".\profile_img_1.jpg" className="object-contain w-32 h-32 my-4 rounded-full md:m-0 md:w-48 md:h-60 md:rounded-lg" alt="profile_pic"/>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-center">
                    <grid className="grid grid-cols-1 gap-4 my-10 md:pb-24 md:grid-cols-3 md:pt-12">
                        <div className="flex flex-col items-center mx-6 border-b-2 md:mx-0 md:border-b-0 md:border-r-2 border-stone-100">
                            <h5 className="italic tracking-wide ">RESIDENT</h5>
                            <p className="p-2">Bangalore, IN</p>
                        </div>
                        <div className="flex flex-col items-center mx-6 border-b-2 md:mx-0 md:border-b-0 md:border-r-2 border-stone-100">
                            <h5 className="italic tracking-wide">READING RIGHT NOW</h5>
                            <p className="p-2">Deep Work by Cal Newport</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h5 className="italic tracking-wide">GOAL FOR THE MONTH</h5>
                            <p className="p-2">Read for atleast 30 minutes everyday</p>
                        </div>
                    </grid>
                </section>
            </body>
        </>
    )
}

