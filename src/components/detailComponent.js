import React from "react";

const detailComponent = (props) =>{

    return(

        <div className="container">

            <div className="row service-card">
                <div className="col-md-6">

                    <img src={props.img} className="card-image" loading="lazy"/>
                </div>
                <div className="col-md-6 d-flex align-content-center  justify-content-center flex-column">
                    <h1 className="lato-bol">{props.heading}
                    </h1>
                    <p className="lato-regular">{props.text}</p>
                </div>
            </div>

        </div>
    )
}
export default detailComponent