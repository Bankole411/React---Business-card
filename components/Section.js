import React from "react"

export default function Section(props){
    return(
        <section className="section--container">
            <img className="section--img" src={props.imageUrl} />
            <div className="location-data">
                <span className="location--point">
                    <img src="../images/location-marker.svg" className="section--marker" />
                    <p className="section--div--location">{props.location}</p>
                </span><br/>
                <a href={`${props.googleMapsUrl}`} className="section--div--map">Visit on Google maps</a>
            <h1 className="section--title">{props.title}</h1>
            <h4 className="section--dates">{props.startDate} - {props.endDate}</h4>
            <h6 className="section--description">{props.description}</h6>
            </div>
        </section>
    )
}

            
/*  
             */