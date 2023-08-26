import React from "react"
import Navbar from "./Navbar"
import Destination from "./Destination"
import data from "./data"


export default function App(){
    const places = data.map(item=>{
        
        return (
            <Destination 
            key={item.id}
            item={item}
       
            
            />
        )
    })
    return (
        <div>
        <Navbar />
        {places}
        
        
        </div>
    )
    
}