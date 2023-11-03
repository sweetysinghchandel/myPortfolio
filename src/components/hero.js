import React from "react";

function Hero(){
    return(
        <main>
        <section className="firstsection">
          <div className="leftsection">
            <p>
              Hi , My name is <span className="purple">Sweety</span>
            </p>
            <p>I am a passionate</p>
            <div>web Developer</div>
            <span id="element"></span>
            <div className="buttons">
              <a href="skills.html"></a>
              <button className="btn">
                <a href="skills.html">Download CV</a>
              </button>
            </div>
          </div>
          <div className="rightsection">
            <img src="sweety.webp" alt="" />
          </div>
        </section>
        <hr />
        <section className="secondsection">
          <span className="text-gray">What I have done so far</span>
          <h1>Skills</h1>
          <div className="box">
            <div className="vertical">
              <img className="image-top" src="html1.png" alt="" />
              <div className="vertical-title">HTML</div>
              {/* <div className="vertical-desc">Lorem ipsum dolor sit,</div> */}
            </div>
            <div className="vertical">
              <img className="image-top" src="css1.svg" alt="" />
              <div className="vertical-title">CSS</div>
              {/* <div className="vertical-desc">Lorem ipsum dolor sit,</div> */}
            </div>
            <div className="vertical">
              <img className="image-top" src="developer.png" alt="" />
              <div className="vertical-title">JavaScript</div>
              {/* <div className="vertical-desc">Lorem ipsum dolor sit,</div> */}
            </div>
            <div className="vertical">
              <img className="image-top" src="react1.png" alt="" />
              <div className="vertical-title">React</div>
              {/* <div className="vertical-desc">Lorem ipsum dolor sit,</div> */}
            </div>
          </div>
        </section>
      </main>
    )
}
export default Hero;