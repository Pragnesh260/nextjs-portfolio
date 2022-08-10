export default function Mamba() {
    return (
        <>
             <body className="-mb-10 font-sans text-white bg-black">
                <section className="w-3/4 pb-10 mx-auto">
                    <div className="flex flex-col-reverse items-center justify-center pt-10 md:flex-row">
                        <h1 className="pt-10 text-4xl text-center md:mr-28">My Black Mamba Year</h1>
                        <img src="./mamba_1.jpg" className="object-cover rounded w-60 h-60" alt="mamba"/>
                    </div>
                    <div w-60 className="w-3/4 py-4 mx-auto my-4 border-b-2 md:py-8 "></div>
                    <div className="w-full mx-auto md:w-3/5 ">
                        <p className="pt-4 text-lg">When I turned 24 on the 30th of July, I thought I would try out something
                            new considering I have just left my job, have no idea what to do next and trying to figure stuff out.</p>
                        <p className="pt-4 text-lg"> So I came up with the idea of creating a bunch of resolutions for the 24th year of my life.</p>
                        <p className="pt-4 text-lg italic font-semibold"> My Black Mamba Year.</p>
                        <p className="pt-4 text-lg">The inspiration behind the philosophy is basically from Kobe Bryant (a.k.a Black Mamba) where
                            he used to set a goal for himself and just work towards that no matter what. In his words, </p>
                        <p className="pt-4 text-lg italic">" I'm not negotiating with myself.
                            When I set out at the beginning of the summer And said: "This is the training plan I'm doing".
                            I signed that contract with myself. You know throughout that process, you will start talking to yourself
                            like: "Man I gotta... I think I need to... Maybe if we...". Nope. This is non-negotiable. "</p>
                        <p className="pt-4 text-lg"> The objective is pretty simple, I just pick out a goal for each month and try to achieve
                            that by the end of the month. The goals are just a bunch of stuff I love to do, but life keeps getting in the way
                            so I keep putting them off.</p>
                        <p className="pt-4 text-lg"> I haven't yet thought about all 12 of my goals yet, but here is the list of the ones
                            I have thought about.</p>
                    </div>
                    </section>
                    <grid className="grid grid-cols-1 py-10 mx-6 md:mx-36 md:pb-24 md:grid-cols-3 md:pt-12">
                        <div className="relative flex flex-col items-center justify-center p-6 border-b-2 md:border-r-2 border-stone-100">
                            <img src=".\read.jpg" className="object-cover w-80 h-52 md:h-60 rounded-xl"alt="Reading"/>
                            <h5 className="absolute text-3xl italic font-semibold tracking-wide top-20 md:top-32">August</h5>
                            <p className="absolute pt-2 italic font-semibold text-center md:text-lg bottom-20">Read for 30 minutes everyday</p>
                        </div>
                        <div className="relative flex flex-col items-center justify-center p-6 border-b-2 md:border-r-2 border-stone-100">
                            <img src=".\write.jpg" className="object-cover w-80 h-52 md:h-60 rounded-xl"alt="Writing"/>
                            <h5 className="absolute text-3xl italic font-semibold tracking-wide top-20 md:top-32">September</h5>
                            <p className="absolute pt-2 italic font-semibold text-center md:text-lg bottom-20">Write 1 article everyday</p>
                        </div>
                        <div className="relative flex flex-col items-center justify-center p-6 border-b-2 border-stone-100">
                            <img src=".\yoga.jpg" className="object-cover h-52 w-80 md:h-60 rounded-xl"alt="Yoga"/>    
                            <h5 className="absolute text-3xl italic font-semibold tracking-wide top-20 md:top-32">October</h5>
                            <p className="absolute pt-2 italic font-semibold text-center md:text-lg bottom-20">Yoga (or meditate) everyday</p>
                        </div>
                        <div className="relative flex flex-col items-center justify-center p-6 border-b-2 md:border-b-0 md:border-r-2 border-stone-100">
                            <img src=".\cook.jpg" className="object-cover w-80 h-52 md:h-60 rounded-xl"alt="Cooking"/>     
                            <h5 className="absolute text-3xl italic font-semibold tracking-wide top-20 md:top-32">November</h5>
                            <p className="absolute pt-2 italic font-semibold text-center md:text-lg bottom-20">Cook all meals by yourself</p>
                        </div>
                    <div className="relative flex flex-col items-center justify-center p-6 md:border-r-2 border-stone-100">
                            <img src=".\weights.jpg" className="object-cover w-80 h-52 md:h-60 rounded-xl"alt="Weights"/>
                            <h5 className="absolute text-3xl italic font-semibold tracking-wide top-20 md:top-32">December</h5>
                            <p className="absolute pt-2 italic font-semibold text-center md:text-lg bottom-20">Maintain 9% body fat</p>
                        </div>
                    </grid>
                </body>
        </>
    )
}