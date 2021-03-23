import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
// import Book2 from '../../static/book/book.png'
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