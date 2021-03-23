import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import { Helmet } from 'react-helmet'

const ATB = (props)=>{
	
	return (
		<>
            <Helmet title="About the Author | Steve A. Hayes"/>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="Steve A. Hayes"/>
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                There finally comes a moment when ‘desperation’ becomes the houses’ last seat at the table.
                                </h4>
                                
                                <span className="ata-span-fx">
                                    Favorite Line of the Book
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" 
                            id="author">

                            <p>
                                Steve Hayes has been a major radio personality in America for over 50 years. Born and raised in Portsmouth, Ohio, he moved back to his hometown in 1999 after almost 30 years of traveling America to pursue his passion. After working in great cities like Houston, Louisville, Jacksonville, Cincinnati, Lexington, Daytona Beach and Huntington, W.A, it was time to return home to pursue a management/ ownership role while still being the morning show host on WNXT-FM.
                            </p>

                            <p>
                                As an on air radio personality, writing had always been a gift that Steve eventually turned into a full-time desire. Writing a weekly newspaper column for over fifteen years, Hayes eventually began writing books that all received local and regional acclaim. In 2016, he wrote the biography of Cincinnati Reds “super- scout” Gene Bennett and his 58 years with MLB’s first professional baseball team. It and he are now enshrined in Major League Baseball’s Hall of Fame in Cooperstown in the literary section.
                            </p>

                            <p>
                                If you were to ask Steve about being a good writer, he would argue that point to explain that he is better described as a great story-teller. According to Hayes, “While yes, the art of writing is certainly important, having a compelling and interesting yarn to spin is far more important.”
                            </p>

                            <p>
                                Steve currently lives on his five-acre farm in Southern Ohio on the beautiful Ohio River and continues to broadcast his morning show daily from 5a-10a on WNXT-FM as well as world-wide with live-streaming on wnxtradio.com. Transitioning from radio into a full-time writer, Hayes has several other potential best sellers he is currently working on to follow up on the success of his baseball love story that took him 17 years to complete. When asked about the time it took to write “21 Down in Vegas,” he made a startling admission. “It’s just like love.” He candidly admitted, “I went through all the emotions that anybody goes through in a long-term love affair while writing this story, I even walked away from it once. In the end, true love is always worth fighting for and that’s why you’re reading it today.”
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Steve A. Hayes
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;