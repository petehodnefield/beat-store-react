import React from "react";
import "./Home.css";
import video from "../../assets/audio/video.mp4";
import { Link } from "react-router-dom";
const Home = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.replace("/thank-you");
  };
  return (
    <div className="content-wrapper">
      <section id="about" className="about margin">
        <div className="about__text-wrapper">
          <h3 className="home__header">Hi, I am mongamonga_</h3>
          <p className="home__text">
            I am a guitar player with a strong understanding of chord
            progressions, music theory, and techniques for manipulating the
            guitar to create a range of sounds and styles. I can play a variety
            of genres, from rock and folk to jazz and blues, and specialize in
            writing loops for producers.
          </p>
          <a href="#contact">
            <button className="btn btn-cta">Get in touch</button>
          </a>
        </div>
        <div className="home__img-div"></div>
      </section>
      <div className="loop__content-wrapper">
        <div className="loop__text-form-wrapper">
          <section id="loops" className="about">
            {" "}
            <div className="about__loop-text-wrapper">
              <h3 className="home__header">Loops</h3>
              <p className="home__text">
                I have been playing guitar for 9 years and previously studied
                electric guitar at the Berklee School of Music in Boston, MA. I
                have written hundreds of loops in the styles of artists such as
                Juice WRLD and Gunna, and have mastered melody writing. I am a
                valuable asset to any producer looking to incorporate live
                instrumentation into their tracks.
              </p>
              <Link to={"/airbit"}>
                <button className="btn btn-cta">50+ royalty-free loops</button>
              </Link>
            </div>
            <div className="home__video-div-mobile">
              <video className="home__video" src={video} autoPlay loop></video>
            </div>
          </section>
          <section id="contact" className="form">
            <a name="contact">
              <p className="bold home__danger">
                If you are an established producer, fill out this form and we
                can do exclusive collaborations.
              </p>
              <article className="home__form-wrapper">
                <h4 className="home__form-header"> Custom Loops</h4>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                  <div className="form__il-wrapper">
                    <label className="form__label">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="form__input"
                    ></input>
                  </div>
                  <div className="form__il-wrapper">
                    <label className="form__label">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="form__input"
                    ></input>
                  </div>
                  <div className="form__il-wrapper">
                    <label className="form__label">Instagram</label>
                    <input
                      name="instagram"
                      type="text"
                      required
                      className="form__input"
                    ></input>
                  </div>
                  <div className="form__il-wrapper">
                    <label className="form__label">Beatstars</label>
                    <input
                      name="beatstars"
                      type="text"
                      required
                      className="form__input"
                    ></input>
                  </div>
                  <div className="form__il-wrapper">
                    <label className="form__label">Message</label>
                    <textarea
                      name="message"
                      type="text"
                      required
                      className="form__input text-area"
                    ></textarea>
                  </div>
                  <button className="btn btn-form" type="submit">
                    Send
                  </button>
                </form>
              </article>
            </a>
          </section>
        </div>
        <div className="home__video-div-comp">
          <video className="home__video" src={video} autoPlay loop></video>
        </div>
      </div>
    </div>
  );
};

export default Home;
