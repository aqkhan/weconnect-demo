import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import Main from "../components/providerMain";
import DetailCard from "../components/detailComponent";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Families = ({ data }) => {

    const pageData = data.contentfulPage;
    console.log('data', pageData);
    const contentMarkup = documentToHtmlString(JSON.parse(pageData.content.content));

    return (
        <Layout>
            <SEO title="Families" />
            <Main title={contentMarkup.replace(/(<([^>]+)>)/ig,"")} image={"https:" + pageData.headerBackground.file.url} />
            <div className="provider-detail-section">
                {
                    pageData.pageBlock.map((single, i) => (
                        <DetailCard key={i} img={"https:" + single.image.file.url} swap={ i % 2 === 0 } content={documentToHtmlString(JSON.parse(single.content.content))} />
                    ))
                }
            </div>

        </Layout>
    );
}

export default Families;

export const PageQuery = graphql`
    query FamiliespageQuery {
        contentfulPage ( slug: { eq: "families" } ) {
            title
            slug
            content {
                content
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
                featureText
            }
            pageBlock {
                title
                content { 
                    content
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

