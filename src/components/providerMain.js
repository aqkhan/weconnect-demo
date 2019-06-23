import React from "react";

const providerMain = (props) => {
    let { image, title } = props;
    return (
        <div className="provider-main-header" style={{backgroundImage:"url("+image+")"}}>
            <div className="col-md-8 provider-h content">
                <h1>
                    {title}
                </h1>
            </div>
        </div>
    )
}
export default providerMain