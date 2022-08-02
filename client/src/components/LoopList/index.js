import React, {useState} from "react";
import bofImg from "../../assets/images/bof.jpg"
import crybabyImg from "../../assets/images/CryBaby.jpg"
import gorillaheroImg from "../../assets/images/gorillaHero.jpg"
import playIcon from '../../assets/icons/play-outline.svg'
import bofAudio from '../../assets/audio/bofPreview.mp3'
import ghAudio from '../../assets/audio/bofPreview.mp3'
import cryBabyAudio from '../../assets/audio/watermelonPreview.mp3'

function LoopList(){

    const [currentPack, setCurrentPack] = useState('')
    const [isPlaying, setIsPlaying] = useState(false)

    const loopPacks = [
        {
            name: "Bowl of Fruit",
            instruments: ['Nylon'],
            genre: "Trap Soul",
            img: bofImg,
            audio: bofAudio
        },
        {
            name: "Cry Baby",
            instruments: ['Nylon'],
            genre: "Trap",
            img: crybabyImg,
            audio: cryBabyAudio

        },
        {
            name: "Gorilla Hero",
            instruments: ['Nylon', "Electric"],
            genre: "Pop",
            img: gorillaheroImg,
            audio: ghAudio

        },
    ]

    const start = (audio) => {
        let loopAudio = new Audio(audio)
        console.log(loopAudio)

        if(!isPlaying) {
            loopAudio.pause()
            setIsPlaying(true)
            loopAudio.play()
        } else {
            setIsPlaying(false)
            delete Audio(audio)
            loopAudio.pause()
        }
    }
    return (
        <div className="grid">
            {loopPacks.map((pack) => (
                <div onMouseEnter={() => setCurrentPack(pack.audio)} className="card">
                    <div className="img-container">
                        <img
                            src={pack.img}
                            alt='Yaaya'
                            className="pack-img"key={pack.name}
                        />
                            <img
                        src={playIcon}
                        className="play-btn"
                        onClick={() => start(currentPack)}
                    />
                    </div>
                    <h2 className="section-header beat-header">{pack.name}</h2>
                    <h3 className="beat-details">Genre: {pack.genre}</h3>
               

                </div>
            ))}
        </div>
    )
}

export default LoopList