import React from "react";
import Main from "./providerMain";
import DetailCard from "./detailComponent";
import Partners from "./aboutPartners"

const providerPageMain = () => {
    return (
        <div>
            <Main/>
            <div className="provider-detail-section">
            <DetailCard img={"/images/laptop-2.png"}  heading={"Utilize our powerful, data-driven dashboard."} text={"Designed and built specificially for treatment centers to easily manage recovery groups. This powerful dashboard includes a personalized risk score for each patient ‐ plus critical data on patients, groups or multiple treatment centers all in one place."}/>
            <DetailCard img={"/images/map-card.png"} heading={"Analyze live outcomes data and manage JCAHO."} text={"Analyze dozens of data points to improve and assess programs. Maintain joint commission compliance certification with verified outcomes data."}/>
            <DetailCard img={"/images/graph.png"} heading={"Spend time on treatment, not guesswork"} text ={"Instantly be alerted to changes in patient routines, achievements and more. Track group and individual progress, and review gaps in scheduling to recommend care."}/>
            <Partners/>
            </div>

        </div>
    )
}
export default providerPageMain