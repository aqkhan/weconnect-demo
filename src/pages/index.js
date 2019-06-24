import React from "react"
import HomeMainComponent from "../components/homeMainComponent"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({data}) => {
    return (
        <Layout>
        <SEO title="Home"/>
        <HomeMainComponent data={data.contentfulPage} />
    </Layout>
    );
}

export default IndexPage

export const PageQuery = graphql`
    query PageQuery {
        contentfulPage ( slug: { eq: "homepage" } ) {
            title
            slug
            content {
                json
            }
            headerBackground {
                file {
                    url
                }
            }
            headerBanner {
                file {
                    url
                }
            }
            featureImage {
                file {
                    url
                }
            }
            featureText {
                json
            }
            pageBlock {
                title
                content { 
                    json
                }
                image {
                    file {
                        url
                    }
                }
                linkText
                linkTo
                icon {
                    file {
                        url
                    }
                }
            }
        }
    }
`
