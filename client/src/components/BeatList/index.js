import React from "react";
import IceImg from "../../assets/images/bof.jpg"

function BeatList(){
    const beats = [
        {
            name: "Ice Mountain",
            tempo: "123BPM",
            key: "AMinor",
            genre: "Trap Soul",
            img: IceImg
        },
        {
            name: "DUDE",
            tempo: "98BPM",
            key: "F#Minor",
            genre: "Trap",
            img: IceImg
        },
        {
            name: "Rockstar",
            tempo: "168BPM",
            key: "G Major",
            genre: "Pop",
            img: IceImg
        },
    ]
    return (
        <div className="grid">
            {beats.map((beat) => (
                <div className="card">
                    <img
                        src={beat.img}
                        alt='Yaaya'
                        className="beat-img"
                    />
                    <h2 className="section-header beat-header">{beat.name}</h2>
                    <h3 className="beat-details">{beat.tempo}</h3>
                    <h3 className="beat-details">{beat.key}</h3>
                    <h3 className="beat-details">{beat.genre}</h3>

                </div>
            ))}
        </div>
    )
}

export default BeatList