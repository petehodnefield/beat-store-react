import React, {useState, useEffect} from "react";
import bofImg from "../../assets/images/bof.jpg"
import crybabyImg from "../../assets/images/CryBaby.jpg"
import gorillaheroImg from "../../assets/images/gorillaHero.jpg"
import playIcon from '../../assets/icons/play-outline.svg'
import pauseIcon from '../../assets/icons/pause-outline.svg'
import bofAudio from '../../assets/audio/bofPreview.mp3'
import cryBabyAudio from '../../assets/audio/cbPreview.mp3'
import ghAudio from '../../assets/audio/watermelonPreview.mp3'

function LoopList(){
    const audioPlayer = document.querySelector('.audio-player')

    const [currentPack, setCurrentPack] = useState('')

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


    const setPack = (audio) => {
        console.log('audio', audio)
        setCurrentPack(audio)

    }
    
    const startAudio = (audio) => {

        // clear audio player src before each switch
        audioPlayer.setAttribute('src', "")
 

        // Set audio player = currentPack
        audioPlayer.setAttribute('src', currentPack)

        // Play audio
        audioPlayer.play()

        // setIsPlaying(true)
    }
    
    const stopAudio = (audio) => {
        // Pause audio
        audioPlayer.pause()
    }

    return (
        <div className="grid">
            <audio className="audio-player">
                
            </audio>
            {loopPacks.map((pack) => (
                <div onMouseOver={() => setPack(pack.audio)} className="card">
                    <div className="img-container">
                        <img
                            src={pack.img}
                            alt='Yaaya'
                            className="pack-img"key={pack.name}
                        />

                        <img
                            src={playIcon}
                            className="play-btn"
                            onClick={() => startAudio()}
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