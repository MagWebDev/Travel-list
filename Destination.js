import React from "react"


export default function Destination(props){
    console.log(props)
    return (
        <div>
        <div className="destination-container">
        <img className="destination-img" src={props.item.imageUrl}/>
              <div className="location">
        <div className="location-details">
        <img className="location-img" src="./images/pin.png"/>
        <p className="location-name">{props.item.location}</p>
        <a className="location-url" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
        </div>

           <h2>{props.item.title}</h2>
           <p className="date">12 Oct, 2025-30 Oct, 2025</p>
           <p className="description">{props.item.description}</p>
        </div>
        </div>
           
       
</div>
      
        
    )
}
