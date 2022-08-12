import Head from 'next/head';
import Image from 'next/image';

export default function Conversation() {
    return (
        <>
            <Head>
                <title>Art of Communication</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body className="-mb-10 font-sans text-white bg-black scroll-smooth">
                <section className="w-3/4 pb-10 mx-auto">
                    <div className="flex flex-col-reverse items-center justify-center pt-10 md:flex-row">
                        <h1 className="pt-10 text-4xl text-center md:mr-28">The Art of Communication</h1>
                        <Image src="/assets/communication_img.jpg" alt="Telephone" width={250} height={250} />
                    </div>
                    <div w-60 className="w-3/4 py-4 mx-auto my-4 border-b-2 md:py-8 "></div>
                    <div className="w-full mx-auto md:w-3/5 ">
                        <p className="pt-4 text-lg">The way I came about writing this small bite-sized article (or few pointers) on
                            communication, was after watching a video by Jordan Peterson on YouTube.
                            The points he puts emphasis on are pretty straightforward, and with absolutely no jargon.
                        </p>
                        <p className="pt-4 text-lg">Let's get straight to the point.
                        </p>
                        <p className="pt-4 text-lg">There are quite a few methods through which we can improve our communication skills.</p>
                        <p className="pt-4 text-lg">The very first method is to practice. Speak with as many people as possible,
                            preferably vocally and not through a texting medium. The more you do any task, the more you are bound to improve.
                            So this is fairly obvious and the way to get started is to get out and speak.</p>
                        <p className="pt-4 text-lg">The second method can be split into two parts, the input - which is what information you intake and
                            the output - which is how you convey that information.
                        </p>
                        <h2 className="pt-4 text-3xl italic font-bold ">Input End</h2>
                        <p className="pt-4 text-lg">The information that is consumed is through a combination of reading and writing (which is what I am trying to implement
                            by giving a shot at writing this article). Reading gets you much more informed on the topic you are conversing about,
                            while writing about it fills the gaps which exist in your thinking. When you are required to write a couple of well
                            formed sentences on any topic, you begin to understand the topic at hand much better.
                            This makes you much more articulate since we can communicate effectively when we know and
                            understand what we are talking about.
                        </p>
                        <p className="pt-4 text-lg">Another one of the keys for effective communication is to know much more about a
                            particular topic than we are required to talk about.
                        </p>
                        <p className="pt-4 text-lg">One of my major fears is pursuing a career as a teacher.
                            What if a student asks a question which I have absolutely no idea about?
                            This usually happens when we limit our knowledge to just what we are talking about.
                            If we learn 10x on a particular topic, and if, as a teacher I'm required to know only a
                            10th of it for the lecture, I can end up being much more effective and articulate in what I'm trying to convey.
                        </p>
                        <p className="pt-4 text-lg">
                        These are things you can do so that you can be well informed on the input side.
                        </p>
                        <h2 className="pt-4 text-3xl italic font-bold ">Output End</h2>
                        <p className="pt-4 text-lg">
                            On the output side, we are better off looking at the audience as individuals instead of as a group.
                            So each time we speak, we look at them as individuals and get feedback through their reactions and
                            move on to the next individual and repeat the process. This makes it much more easier to communicate as well as 
                            engage the audience in the conversation.
                        </p>
                        <p className="pt-4 text-lg">
                            That concludes most of what contributes to becoming a good communicator.
                            If you as a reader was not impressed or could not understand what I was trying to convey, it's probably because I'm not
                            yet a good communicator, but after all the internet is filled with people who assume they know
                            everything after watching one YouTube video right?
                        </p>
                    </div>
                </section>
            </body>
        </>
    )
}