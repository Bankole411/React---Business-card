import React from "react"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import data from "./data"


export default function(){
    const sections = data.map(sect =>{
        return <Section
             key = {sect.id}
             {...sect}
        />
    })
    
    return(
        <div className=".container">
            <Navbar />
            <main className="sections--list">
                {sections}
            </main>
        </div>
    )
}