
import React, {useState, useEffect, useRef} from 'react'
import { SliderData } from '../SliderData'
import AudioPlayer from '../AudioPlayer'
import bofAudio from "../../assets/audio/bofPreview.mp3"
import ghAudio from "../../assets/audio/watermelonPreview.mp3"
import cbAudio from "../../assets/audio/cbPreview.mp3"
import { Link } from 'react-router-dom'
import AirbitStore from '../AirbitStore'

const ImageSlider = ({slides}) => {

    const AudioData = [
        {
            name: ghAudio
        },
        {
            name: cbAudio
        },
        {
            name: bofAudio
        },
    ]
// Compare the index to the current object in AudioData
    const [current, setCurrent] = useState(0)
    const [loopAudio, setLoopAudio] = useState(AudioData)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentPackAudio, setCurrentPackAudio] = useState(AudioData[0])

    useEffect(() => {
        if(isPlaying) {
            audioElem.current.play()
        } else {
            audioElem.current.pause()
        }
    }, [isPlaying])

    const audioElem = useRef()
    const length = slides.length

    const findOutCurrent = () => {
        if(current === 2) {
            setCurrentPackAudio(AudioData[0])
        }
        else if(current === 0) {
            setCurrentPackAudio(AudioData[1])
        }
        if(current === 1) {
            setCurrentPackAudio(AudioData[2])
        }
    }

    const nextSlide = () => {
        console.log(current)
        setIsPlaying(false)
        setCurrent(current === length - 1 ? 0 : current + 1)
        findOutCurrent()
    }

    const previousSlide = () => {
        console.log(current)

        setIsPlaying(false)
        setCurrent(current === 0 ? length - 1 : current -1 )
        findOutCurrent()

    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className='container carousel-container'>
            <h2 className='section-header'>Loop Packs (free)</h2>
            <div className='slider'>
            <audio id='audioPlayer' className='audio-player' src={currentPackAudio.name} ref={audioElem}></audio>
            <AudioPlayer loopAudio={loopAudio} setLoopAudio={setLoopAudio} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem}/>


                <i className="fa-solid fa-angle-left left-arrow" onClick={previousSlide}></i> 
                <i className="fa-solid fa-angle-right right-arrow" onClick={nextSlide}></i>
            
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current &&( <img
                                src={slide.image}
                                className="carousel-img"
                            />)}
                        
                        </div>
                    )   
                })}
            </div>
            <Link className="a-link btn" to='/airbit' element={<AirbitStore/>}>Airbit Store</Link>

            
        </section >
    )
}

export default ImageSlider