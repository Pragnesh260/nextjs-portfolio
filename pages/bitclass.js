export default function BitClass() {
    return (
        <>
            <body className="-mb-10 font-sans text-white bg-black">
                <section className="w-3/4 pb-10 mx-auto">
                    <div className="flex flex-col-reverse items-center justify-center pt-10 md:flex-row">
                        <h1 className="pt-10 text-4xl text-center md:mr-28">Product Teardown: BitClass</h1>
                        <img src="./bitclass_2.jpg" className="object-cover rounded w-60 h-60" alt="bitclass"/>
                    </div>
                    <div w-60 className="w-3/4 py-4 mx-auto my-4 border-b-2 md:py-8 "></div>
                    <div className="w-full mx-auto md:w-3/5 ">
                        <h3 className="pt-4 text-3xl italic font-bold ">What does BitClass do?</h3>
                        <p className="pt-4 text-lg">BitClass enables teachers, tutors and skilled professionals to start their own live courses
                            for zero upfront costs. It provides a cohort based learning experience in different fields such as music,
                            art, dance, crypto, etc. </p>
                        <h5 className="pt-4 text-xl italic font-medium">After a dive into the product, came across a few USP of  BitClass:</h5>
                        <ul className="pt-4 pl-6 list-disc ">
                            <li className="py-2 text-lg">
                            Live courses with interactive student-teacher experience.
                            </li>
                            <li className="py-2 text-lg">
                                Live courses on a range of skills:
                                <ul className="pt-4 pl-6 list-decimal">
                                <li className="py-2 text-lg"> Coding in various languages, interview prep, blockchain (Lucrative Skills) </li>
                                <li className="py-2 text-lg"> Cooking, Nail art, art and craft, photography (Hobbyist Skills)</li>
                                </ul>
                            </li>
                            <li className="py-2 text-lg">
                                Providing the opportunity for teachers to monetize off of their skills by
                                providing them with growth, marketing and branding strategies, and a large audience of students.
                            </li>
                        </ul>
                        <h3 className="pt-4 text-3xl italic font-semibold">The Problem Statement:</h3>
                        <p className="pt-4 pl-2 text-lg ">User Activation ⚡ - Given the free live classes & recorded properties present on
                            the app, design a user journey to "activate" all the new users within the first 7 days of signing-up on the app.
                            Activation here means doing at least one of the 3:</p>
                        <ul className="pt-4 pl-6 list-disc ">
                            <li className="py-2 text-lg">
                            Attending one live class for more than 10 mins.
                            </li>
                            <li className="py-2 text-lg">
                            Spending 15 mins watching recordings of past classes.
                            </li>
                            <li className="py-2 text-lg">
                            Registering for 2 free classes.
                            </li>
                        </ul>
                        <div w-60 className="w-3/4 py-4 mx-auto my-4 border-b-2 md:py-4 "></div>
                        <p className="pt-4 text-lg">Let's begin by sketching out a user persona - what are the kind of users use a product such as BitClass?</p>
                    </div>
                    <img src="./persona.jpg" className="object-cover pt-6 mx-auto md:w-3/4" alt="persona"/>
                    <div className="w-full py-4 mx-auto md:w-3/5 ">
                        <h5 className="pt-4 text-3xl italic font-semibold">User Journey:</h5>
                        <p className="pt-4 text-lg">A new user goes through a standard procedure of looking at which courses he/she likes
                            and then subsequently registering for a course by signing up through a mobile number or email address.</p>
                        <p className="pt-4 text-lg">Following which the user can go to the profile settings and select the topics
                            they would be interseted in.</p>
                    </div>
                    <img src="./user_journey.jpg" className="object-cover pt-6 mx-auto md:w-3/4" alt="user journey"/>
                    <div className="w-full py-4 mx-auto md:w-3/5 ">
                        <p className="pt-4 text-lg">A few observations from the user journey:</p>
                        <ul className="pt-4 pl-6 list-disc ">
                            <li className="py-2 text-lg">
                                <p className="italic font-semibold">Personalied Recommendations don't exist:</p>Since choosing
                                "Interested in" screen is in the profile settings, users are recommended random courses which
                                are not personalized for the user (unless a user goes to the settings and chooses the topics which
                                she's interested in).
                            </li>
                            <li className="py-2 text-lg">
                                <p className="italic font-semibold">No option to search for a topic/course:</p>On the home screen, there
                                is no option for the user to search for a course or topic.
                            </li>
                        </ul>
                        <h5 className="pt-4 text-3xl italic font-semibold">Possible Solutions:</h5>
                        <h5 className="pt-4 text-xl italic font-semibold">1. User Journey Revamp:</h5>
                        <p className="pt-4 text-lg">By just reordering the screens during Signup the user can get personalized recommendations
                            for courses right on the Home page.</p>
                    </div>
                    <img src="./user_journey_revamp.jpg" className="object-cover pt-6 mx-auto md:w-3/4" alt="user journey revamp"/>
                    <div className="w-full py-4 mx-auto md:w-3/5 ">
                        <p className="pt-4 text-lg">The user is asked to pick the topics he/she is interested in
                            during Signup, hence, the user can get personalized recommendations right on the Home page.</p>
                        <h5 className="pt-4 text-xl italic font-semibold">2. Custom Notifications:</h5>
                        <p className="pt-4 text-lg">Another method in which a personalized experience can be provided to the 
                            user is through sending them custom notifications.</p>
                        <p className="pt-4 text-lg">Example of a notification being received by an user:
                        </p>
                        <div w-60 className="w-full py-2 mx-auto my-4 border-2 rounded-xl">
                        <p className="p-4 text-lg">Learn anything for FREE ♾️
                            BitClass has everything you're looking for!
                            Here are some free classes to get you started ✈️
                        </p>
                        </div>
                        <p className="pt-4 text-lg">Example of a custom notification personalized for the user (whose chosen "Art" as an interest):
                        </p>
                        <div w-60 className="w-full py-2 mx-auto my-4 border-2 rounded-xl">
                            <p className="p-4 text-lg">A FREE LIVE class in Sketching is starting in 30 minutes!
                            Tap to Register for FREE!
                            </p>
                        </div>
                        <h5 className="pt-4 text-xl italic font-semibold">3. User Points (Gamification):</h5>
                        <p className="pt-4 text-lg">Implement a points tracking section which provides adds points after accomplishing a milestone.</p>

                        <p className="pt-4 text-lg">Examples of milestones reached:
                        </p>
                        <div w-60 className="w-full py-2 mx-auto my-4 border-2 rounded-xl">
                            <ul className="p-4 pl-6 list-disc ">
                                <li className="py-2 text-lg">
                                    <p className="italic font-semibold">Register for one FREE Live Class</p>
                                </li>
                                <li className="py-2 text-lg">
                                    <p className="italic font-semibold">Complete one full Live Course</p>
                                </li>
                            </ul>
                        </div>
                        <h5 className="pt-4 text-3xl italic font-semibold">Conclusion:</h5>
                        <p className="pt-4 text-lg">The objective  of all the above solutions are to increase activation.
                            The methods are mainly by reducing friction by personalizing the experience for the user or through
                            gamification where the user feels a sense of accomplishment each time he/she reaches a milestone.
                        </p>
                    </div>
                </section>
            </body>
        </>
    )
}