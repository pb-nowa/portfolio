import React from 'react';
import Tabs from './tabs_container';

class Granular extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <>
                <Tabs />
                <div className="display-container granular">
                    <div className="project-about">
                        <div className="about-top">
                            <h1>GRANULAR SYNTH</h1>
                            <p>Granular synthesis is the process of breaking up sound into individual audio samples, usually only a few miliseconds in length. The samples can then be reordered and played at any rate. This is the same process that is used for detuning, resampling, and time-control in audio. When mixed with other digital signal processors(DSP), the sounds can be transformed from chaotic noise into rich and texturally complex musical sounds.

Granular synthesis can be commonly heard in modern film soundtracks and electronic music.</p>
                            <a className="explore" href="">Explore</a>
                        </div>
                        <ul className="technologies">
                            <li>Web Audio API</li>
                            <li>HTML5 Canvas</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image" src="https://raw.githubusercontent.com/pb-nowa/Virtual-Synthesizer/master/assets/screenshots/granular-synth-destructure.gif" alt="project 1" />
                    </div>
                </div>
            </>
        );
    }
}


export default Granular;