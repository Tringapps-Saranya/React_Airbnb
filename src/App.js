import React from "react"
import Navbar from "./components/Navbar"
import Gridphoto from "./components/Gridphoto"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Gridphoto />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}