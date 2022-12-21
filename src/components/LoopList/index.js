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

    const [isBOFPlaying, setIsBOFPlaying] = useState(false)
    const [isCBPlaying, setIsCBPlaying] = useState(false)
    const [isGHPlaying, setIsGHPlaying] = useState(false)

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
        console.log("current pack", currentPack)

    }

    const startBOFPlaying = (audio) => {
        setIsBOFPlaying(true)
        startAudio(audio)
    }

    const stopBOFPlaying = (audio) => {
        setIsBOFPlaying(false)
        stopAudio(audio)
    }
    const startCBPlaying = (audio) => {
        setIsCBPlaying(true)
        startAudio(audio)
    }

    const stopCBPlaying = (audio) => {
        setIsCBPlaying(false)
        stopAudio(audio)
    }
    const startGHPlaying = (audio) => {
        setIsGHPlaying(true)
        startAudio(audio)
    }

    const stopGHPlaying = (audio) => {
        setIsGHPlaying(false)
        stopAudio(audio)
    }
    console.log(currentPack)
    
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
            {/* {loopPacks.map((pack) => (
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
            ))} */}
             <div onMouseOver={() => setPack(loopPacks[0].audio)} className="card">
                    <div className="img-container">
                        <img
                            src={loopPacks[0].img}
                            alt='Yaaya'
                            className="pack-img"key={loopPacks[0].name}
                        />
                        {!isBOFPlaying ? (
                            <img
                            src={playIcon}
                            className="play-btn"
                            onClick={() => startBOFPlaying()}
                            />  
                        ): (
                            <img
                            src={pauseIcon}
                            className="play-btn"
                            onClick={() => stopBOFPlaying()}
                            />  
                            )}
                    </div>
                    <h2 className="section-header beat-header">{loopPacks[0].name}</h2>
                    <h3 className="beat-details">Genre: {loopPacks[0].genre}</h3>
               

                </div>
             <div onMouseOver={() => setPack(loopPacks[1].audio)} className="card">
                    <div className="img-container">
                        <img
                            src={loopPacks[1].img}
                            alt='Yaaya'
                            className="pack-img"key={loopPacks[1].name}
                        />
                         {!isCBPlaying ? (
                            <img
                            src={playIcon}
                            className="play-btn"
                            onClick={() => startCBPlaying()}
                            />  
                        ): (
                            <img
                            src={pauseIcon}
                            className="play-btn"
                            onClick={() => stopCBPlaying()}
                            />  
                            )}  
                       
                        
                    </div>
                    <h2 className="section-header beat-header">{loopPacks[1].name}</h2>
                    <h3 className="beat-details">Genre: {loopPacks[1].genre}</h3>
               

                </div>
             <div onMouseOver={() => setPack(loopPacks[2].audio)} className="card">
                    <div className="img-container">
                        <img
                            src={loopPacks[2].img}
                            alt='Yaaya'
                            className="pack-img"key={loopPacks[2].name}
                        />
                            {!isGHPlaying ? (
                                    <img
                                    src={playIcon}
                                    className="play-btn"
                                    onClick={() => startGHPlaying()}
                                    />  
                                ): (
                                    <img
                                    src={pauseIcon}
                                    className="play-btn"
                                    onClick={() => stopGHPlaying()}
                                    />  
                                    )}                         
                            
                        
                    </div>
                    <h2 className="section-header beat-header">{loopPacks[2].name}</h2>
                    <h3 className="beat-details">Genre: {loopPacks[2].genre}</h3>
               

                </div>
        </div>
    )
}

export default LoopList