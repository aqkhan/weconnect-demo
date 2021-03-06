import React from "react"
import HomeMainComponent from "../components/homeMainComponent"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <HomeMainComponent/>
    </Layout>
)

export default IndexPage
