import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import Main from "../components/providerMain";
import DetailCard from "../components/detailComponent";
import Partners from "../components/aboutPartners"

const Families = () => (
    <Layout>
        <SEO title="Providers"/>
        <Main title="Learn how WEconnect reduces relapse rates, increases treatment efficiency and provides support and accountability to patients." image="/images/WEC_Providers.webp"/>
        <div className="provider-detail-section">
            <DetailCard img={"/images/laptop-2.webp"} swap={true}  content={"<h1>Utilize our powerful, data-driven dashboard.</h1><p>Designed and built specificially for treatment centers to easily manage recovery groups. This powerful dashboard includes a personalized risk score for each patient ‐ plus critical data on patients, groups or multiple treatment centers all in one place.</p>"}/>
            <DetailCard img={"/images/map-card.webp"} swap={false} content={"<h1>Analyze live outcomes data and manage JCAHO.</h1><p>Analyze dozens of data points to improve and assess programs. Maintain joint commission compliance certification with verified outcomes data.</p>"}/>
            <DetailCard img={"/images/graph.webp"} swap={true} content={"<h1>Spend time on treatment, not guesswork</h1><p>Instantly be alerted to changes in patient routines, achievements and more. Track group and individual progress, and review gaps in scheduling to recommend care.</p>"}/>
            <Partners/>
        </div>

    </Layout>
)

export default Families;
