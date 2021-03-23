import React from 'react'
import Block from  './Testimonials/testimonial-block'


const Testimonial = ()=>{
    return(
        <>
            <section className="testimonial-section">
                <h1>
                    <span>
                        Testimonials
                    </span>
                </h1>
            </section>

            <section className="testimonial-blocks">
                <div className="grid-block-wrapper">
                    <Block
                        num={`01`}
                        title={`Steve hits a Home Run!`}
                        author={`Randy Yohe`}
                        content={
                            `
                            What a ray of storytelling sunshine in these challenging times. The author takes readers inside the lives of small town heroes and big city moguls. 21 Down in Vegas isn't just a great baseball story, there's a compelling blend of personal heartfelt feelings, character development and real life facts and history that makes you want to read more. I identified with so many of the players, coaches, even the sky box executives - and was dying to learn more about the girlfriends, even the bad guy! And the ending...a colossal and intriguing surprise. You can tell Steve mixed hard work, research, fun and a love of the Great American Pastime in his book, and you will find it's a page-turner!
                            `
                        }
                    />

                    <Block
                        num={`02`}
                        title={`Truly was "Magic in the Madness"`}
                        author={`Belinda L. Smith`}
                        content={
                            `
                            ❤️❤️❤️ 21 Down in Vegas. It was humorous, exciting and a nail biter at times. It was fun recognizing a lot of the character names and places that I know all too well in Portsmouth, Ohio.
                            As I told the Author, Steve...I loved reading about King Kong Karl Smith as he will always be my “hometown hero”.
                            `
                        }
                    />


                    <Block
                        num={`03`}
                        title={`A great story for all baseball lovers`}
                        author={`DebbieB`}
                        content={
                            `
                            This book had me hooked from the very first page to the last! The play by play story-telling reminded me of those hot summer afternoons, sitting in the shade in the back yard, listening to a Reds game on the radio with my Dad. A wonderful book for all those that love the sport and the dream!
                            `
                        }
                    />

                </div>
            </section> 
        </>
    )
}


export default Testimonial


