import React from "react";
import BeatList from "../BeatList";

function Gallery(){
    return (
        <section className="gallery container">
            <h2 className="section-header">Beats</h2>
            <BeatList></BeatList>
        </section >
    )
}

export default Gallery