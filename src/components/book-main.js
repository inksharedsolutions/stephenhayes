import React from 'react'
import Book from '../../static/book/book.png'
import { Link } from 'gatsby'

const MainBook = ()=>{

    return(
        <>
            <section className="section-main-book">
                <div className="book-grid-columns">

                    <div className="book-contents">
                        <h1>21 Down In Vegas</h1>
                        <span>Magic in the Madness</span>

                        <p>
                        In the arena of sports fandom, it's easy to lose one's passion in a sea of failed decisions. There finally comes a time when 'desperation' becomes the houses' last seat at the table.
                        </p>

                        <button className="button-wraps">
                            <Link to="/about-the-book">
                                Read More
                            </Link>
                        </button>
                    </div>

                     <div className="book-img-wrapper">
                            <img src={Book}/>
                     </div>
                </div>
            </section>
        </>
    )
}

export default MainBook