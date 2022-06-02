import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import Book2 from '../../static/book/book1.png'
import { Helmet } from 'react-helmet'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'steve-a-hayes',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
            <Helmet title="About the Book | Steve A. Hayes"/>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`21 Down In Vegas`,
                                    spanTitle: 'Magic in the Madness',
                                    imgSrc: Book1,
                                    id:'21-down-in-vegas',
                                    content:
                                    `In the arena of sports fandom, it's easy to lose one's passion in a sea of failed decisions. There finally comes a time when 'desperation' becomes the houses' last seat at the table. In the most improbable game of 21, Cisco "The Dealer" Wheeler dares to make a gamble with no logic against the odds for one last chance to experience the thing he loved the most!`,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/21-down-in-vegas-steve-a-hayes/1138484881?ean=9781648952760',
                                        amazon :'https://www.amazon.com/21-Down-Vegas-Magic-Madness-ebook/dp/B08QXJSQN5/ref=sr_1_1?dchild=1&keywords=9781648952760&qid=1608320228&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/21-Down-Vegas-Magic-Madness/dp/1648952755/ref=sr_1_1?dchild=1&keywords=9781648952753&qid=1616172522&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/21-down-in-vegas-steve-a-hayes/1138484881?ean=9781648952753',
                                        booksamillion:'https://www.booksamillion.com/p/Down-Vegas/Steve-A-Hayes/9781648952753?id=8161726710909',
                                    }
                                }}
                            />

                            <BookInfo
                                data={{
                                    title:`Ali vs Teo`,
                                    spanTitle: 'The Greatest Fight Ever Imagined',
                                    imgSrc: Book2,
                                    id:'ali-vs-teo',
                                    content:
                                    `
                                    Life and its daily events as we know them are all etched in reality based colors of black and white. But when the shades of imagination are creatively expanded, we can then see a broader pigment of possibilities known as the world of "What if?"
                                    
                                    During the 70's the two greatest heavyweight fighters on the planet were never allowed to compete for political and social reasons. Muhammad Ali and Cuba's Teofilo Stevenson were both considered "the greatest" in their own respective divisions with the exception that Ali was the world renowned champ and Stevenson was a Cuban amateur fighter who appeared on the world stage every four years to win the gold during the Olympics. Over the years far too many watering-hole gatherings and exaggerated conversations fantasized the outcome if these two legends of the ring had they ever had a chance to meet and make history.
                                    
                                    For years I have been a student of the "sweet science" and believe perhaps to have captured the moment that has been a dilemma of debate over these many years. There are no computers, logarithms, analytics, or any other A.I gizmos used to determine the outcome. As a writer who has examined every detail of their skills as well as personal lives at the time, I wanted to make my ultimate consequence the story that it could have been.
                                    
                                    Well, It's finally show time and we're ready to rumble with perhaps the final answer to boxing's biggest unsolved opinion. It's "Ali vs Teo; The Greatest Fight Ever Imagined."
                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/ali-vs-teo-steve-a-hayes/1141566684?ean=9781648959332',
                                        amazon :'https://www.amazon.com/Ali-Teo-Greatest-Fight-Imagined-ebook/dp/B0B2H46L2L/ref=sr_1_1?crid=3UABO0HJAQF5R&keywords=9781648959332&qid=1653664854&sprefix=9781648959332%2Caps%2C276&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Ali-Teo-Greatest-Fight-Imagined/dp/1648959326/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1653664854&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/ali-vs-teo-steve-a-hayes/1141566684?ean=9781648959325',
                                        booksamillion:'',
                                    }
                                }}
                            />

                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;