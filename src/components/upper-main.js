import React,{useEffect, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author.jpg'

const UpperMain =()=>{


    // const elemBanner = useRef(null);
    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="Steve A. Hayes"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Steve A. Hayes</h1>
                                <span>Author & Writer</span>

                                <p>
                                Steve Hayes has been a major radio personality in America for over 50 years. Born and raised in Portsmouth, Ohio, he moved back to his hometown in 1999 after almost 30 years of traveling America to pursue his passion. After working in great cities like Houston, Louisville, Jacksonville, Cincinnati, Lexington, Daytona Beach and Huntington, W.A, it was time to return home to pursue a management/ ownership role while still being the morning show host on WNXT-FM.
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain