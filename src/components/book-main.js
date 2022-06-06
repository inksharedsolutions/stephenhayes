import React from 'react'
import Book from '../../static/book/book1.png'
import { Link } from 'gatsby'

const MainBook = ()=>{

    return(
        <>
            <section className="section-main-book">
                <div className="book-grid-columns">

                    <div className="book-contents">
                        <h1>Ali vs Teo</h1>
                        <span>The Greatest Fight Ever Imagined</span>

                        <p>
                        Life and its daily events as we know them are all etched in reality based colors of black and white. But when the shades of imagination are creatively expanded, we can then see a broader pigment of possibilities known as the world of "What if?"
                        </p>

                        <button className="button-wraps">
                            <Link to="/about-the-book#ali-vs-teo">
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