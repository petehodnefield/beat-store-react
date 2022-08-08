import React from "react";

function AudioPlayer({audioElem, isPlaying, setIsPlaying}) {

    const PlayPause = () => {
        setIsPlaying(!isPlaying)
    }
    return (
        <div className="play-pause-container">
            {!isPlaying ? (<i className="fa-solid fa-play play-pause play-btn" onClick={PlayPause}></i>) : (
                <i className="fa-solid fa-pause play-pause pause-btn"onClick={PlayPause}></i> 

            )}
            
             
        </div>
    )
}

export default AudioPlayer