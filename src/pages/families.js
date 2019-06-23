import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import Main from "../components/providerMain";
import DetailCard from "../components/detailComponent";

const Families = () => (
    <Layout>
        <SEO title="Families"/>
        <Main title="Supporting your recovery journey" image="/images/provider-header.webp"/>
        <div className="provider-detail-section">
            <DetailCard img={"/images/1.webp"} swap={true}  content={"<h1>Be a part of something profound</h1><p>Our mission is to support inpatient, outpatient, healthcare systems, sober living programs and partners to save lives. We achieve this by reducing relapse and making recovery fun, accountable and keeping individuals connected to community support.</p>"}/>
            <DetailCard img={"/images/2.webp"} swap={false} content={"<h1>Stay in recovery with proven techniques</h1><p>Reduce risk of relapse by 50% vs. traditional treatment methods </p>"}/>
            <DetailCard img={"/images/3.webp"} swap={true} content={"<h1>Spend time on treatment, not guesswork</h1><p>Instantly be alerted to changes in patient routines, achievements and more. Track group and individual progress, and review gaps in scheduling to recommend care.</p>"}/>
            <DetailCard img={"/images/4.webp"} swap={false} content={"<h1>Making recovery fun and supportive</h1><p>WEconnect's app supports you in your recovery journey with positive reinforcement and milestone celebrations.</p>"}/>
            <DetailCard img={"/images/5.webp"} swap={true} content={"<h1>Supports all treatment plans</h1><p>WEconnect is program-agnostic, meaning that no matter how you're managing your recovery, WE are here to help </p>"}/>
        </div>

    </Layout>
)

export default Families;
