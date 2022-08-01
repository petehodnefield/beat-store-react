import React from "react";
import bofImg from "../../assets/images/bof.jpg"
import crybabyImg from "../../assets/images/CryBaby.jpg"
import gorillaheroImg from "../../assets/images/gorillaHero.jpg"

function LoopList(){
    const loopPacks = [
        {
            name: "Bowl of Fruit",
            instruments: ['Nylon'],
            genre: "Trap Soul",
            img: bofImg
        },
        {
            name: "Cry Baby",
            instruments: ['Nylon'],
            genre: "Trap",
            img: crybabyImg
        },
        {
            name: "Gorilla Hero",
            instruments: ['Nylon', "Electric"],
            genre: "Pop",
            img: gorillaheroImg
        },
    ]
    return (
        <div className="grid">
            {loopPacks.map((pack) => (
                <div className="card">
                    <img
                        src={pack.img}
                        alt='Yaaya'
                        className="pack-img"
                    />
                    <h2 className="section-header beat-header">{pack.name}</h2>
                    <h3 className="beat-details">Genre: {pack.genre}</h3>
             

                </div>
            ))}
        </div>
    )
}

export default LoopList