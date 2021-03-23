import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import UpperMain from "../components/upper-main"
import MidMain from "../components/mid-main"
// import LowerMain from "../components/lower-main"
import BookSection from "../components/book-main"
import Newsletter from "../components/newsletter"
import Testimonial from "../components/testimonial"
import { Helmet } from "react-helmet";

const IndexPage = (props) => (
  <Layout>
      <Helmet title="Home | Steve A. Hayes"/>
      <Nav pathExt={props.path}/>
      <Banner/>
      <UpperMain/>
      <BookSection/>
      <Testimonial/>
      <MidMain/>
      <Newsletter/>
  </Layout>
)

export default IndexPage
