import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import Main from "../components/providerMain";
import DetailCard from "../components/detailComponent";

const Families = () => (
    <Layout>
        <SEO title="Families"/>
        <Main title="Scientifically Proven Addiction Relapse Prevention" image="/images/WEC_Team-About.webp"/>
        <div className="provider-detail-section">
            <DetailCard img={"/images/Self-care.webp"} swap={true}  content={"<h1>Building products that heal</h1><p>Our mission is to save lives, provide accurate outcomes data, and support healthcare ecosystems, communities and families. Born from our co-founder’s personal journeys in long-term recovery, WEconnect is a Social Purpose “B Corporation” with a focus on ending addiction around the world.</p>"}/>
        </div>

    </Layout>
)

export default Families;
