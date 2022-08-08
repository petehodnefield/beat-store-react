
import React, {useState} from 'react'
import { SliderData } from '../SliderData'
import {faArrowAltCircleRight, faArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1 )
    }

    console.log(current)
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className='container carousel-container'>
            <h2 className='section-header'>Loop Packs</h2>
            <div className='slider'>
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
            
        </section >
    )
}

export default ImageSlider