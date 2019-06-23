import React from "react";

const detailComponent = (props) =>{
    let { content, swap } = props;
    return(
        <div className="container">
            {
                swap ?
                    <div className="row service-card">
                        <div className="col-md-6">
                            <img src={props.img} className="card-image" loading="lazy" alt=""/>
                        </div>
                        <div className="col-md-6 d-flex align-content-center justify-content-center flex-column content" dangerouslySetInnerHTML={{__html: content}}/>
                    </div>:
                    <div className="row service-card">
                        <div className="col-md-6 d-flex align-content-center justify-content-center flex-column content" dangerouslySetInnerHTML={{__html: content}}/>
                        <div className="col-md-6">
                            <img src={props.img} className="card-image" loading="lazy" alt=""/>
                        </div>
                    </div>

            }
        </div>
    )
}
export default detailComponent