import React,{useEffect, useRef} from 'react'
import {Link} from 'gatsby'
// import  ImgBanner from '../../static/banner/banner_inner.png'

const Banner = ()=>{

    const elemBanner = useRef(null);

    useEffect(() => {

    });
 

    return (
        <>
            <section className="banner-section">

                    <div className="grid-two-layout-col">
                        <div className="wrapper-bg-left">
                            <div className="left-col">
                                <div className="banner-content-wrapper">
                                    
                                    <h1>
                                        <span className="first-block">
                                            <span>Ali</span>
                                            <span>vs</span>
                                        </span>
                                        <span className="second-block">
                                            <span id="color-o"> Teo</span>
                                            <span></span>
                                        </span>
                                    </h1>
                                    
                                    {/* <p>
                                    In the arena of sports fandom, it's easy to lose one's passion in a sea of failed decisions. There finally comes a time when 'desperation' becomes the houses' last seat at the table.
                                    </p> */}

                                    {/* <button>
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button> */}
                               
                                </div>
                            </div>
                        </div>

                        <div className="wrapper-bg-right">
                            <div className="right-col banner-img-col">

                                <div className="img-banner-wrapper" ref={elemBanner}>
                                   {/*  <img src={ImgBanner}/> */}
                                </div>

                            </div>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Banner;