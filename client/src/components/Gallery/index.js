import React from "react";
import LoopList from "../LoopList";
import {Link} from 'react-router-dom'
import AirbitStore from "../AirbitStore";
function Gallery(){
    return (
        <section className="gallery container">
            <h2 className="section-header">Loops</h2>
            <LoopList></LoopList>
            <Link to='/airbit' element={<AirbitStore/>}>Airbit</Link>
        </section >
    )
}

export default Gallery