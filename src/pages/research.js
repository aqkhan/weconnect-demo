import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import Main from "../components/providerMain";
import DetailCard from "../components/detailComponent";

const Families = () => (
    <Layout>
        <SEO title="Families"/>
        <Main title="Scientifically Proven Addiction Relapse Prevention" image="/images/WEC_Research.webp"/>
        <div className="provider-detail-section">
            <DetailCard img={"/images/science-photo-one.webp"} swap={true}  content={"<h1>Identifying Relapse Before It Happens</h1><p>WEconnect’s proprietary risk score algorithm identifies relapse before it happens, so support networks can step in. Our approach is positive reinforcement with no shaming. WEconnect leverages only positive rewards and reinforcement to ensure the best outcomes for patients. We are backed by proven scientific methods by leading scientists, PhD researchers, clinicians and treatment experts based on the latest evidence-based methods.</p>"}/>
            <DetailCard img={"/images/science-photo-two.webp"} swap={false} content={"<h1>Case Management</h1><p>Counselors can view group and individual progress including predictive indicators for patients who are at high risk of relapse. Counselors receive alerts when patients are missing treatment plan activities, and can view gaps in scheduling to address issues ahead of time. Case managers and therapists can have meaningful conersations with clients that have hit milestones by completing activities.</p>"}/>
            <DetailCard img={"/images/science-photo-three.webp"} swap={true} content={"<h1>Track Patient Outcomes</h1><p>Dashboards provide visual breakdowns to easily track HIPAA compliant data. Providers can access pre-made patient panel data for outcomes studies and insights into treatment programs, using 45 different data points.</p>"}/>
        </div>

    </Layout>
)

export default Families;
