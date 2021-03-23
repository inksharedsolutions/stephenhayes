import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/img/author_img.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <img src={AuthorImg} />
                        </div>

                        <div className="wrapper-auth-content">
                            <p>
                                Steve Hayes has been a major radio personality in America for over 50 years. Born and raised in Portsmouth, Ohio, he moved back to his hometown in 1999 after almost 30 years of traveling America to pursue his passion. After working in great cities like Houston, Louisville, Jacksonville, Cincinnati, Lexington, Daytona Beach and Huntington, W.A, it was time to return home to pursue a management/ ownership role while still being the morning show host on WNXT-FM.
                            </p>

                            <h1>Steve A. Hayes</h1>

                            <span className="span-tagline">Author & Writer</span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 