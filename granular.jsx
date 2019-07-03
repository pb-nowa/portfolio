import React from 'react';
import Tabs from './tabs_container';
import FeatureImg from './feature_image';
class Granular extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
        this.setLoadState = this.setLoadState.bind(this);
    }

    // componentDidMount() {
    //     const lazyLoad = target => {
    //         const io = new IntersectionObserver((entries, observer) => {
    //             entries.forEach(entry => {
    //                 if (entry.isIntersecting) {
    //                     const img = entry.target;
    //                     const src = img.getAttribute('data-lazy');

    //                     img.setAttribute('src', src);

    //                     observer.disconnect();

    //                 }
    //             });
    //         });
    //         io.observe(target);

    //     };
    //     lazyLoad(this.imageRef);
    // }

    setLoadState() {
        this.setState({
            loaded: true,
        });

    }

    render() {
        const { loaded } = this.state;
        return (
            <>
                <Tabs open="granular-synth"/>
                <div className="display-container granular">
                    <div className="project-about">
                        <div className="about-top">
                            <div className="about-top-header">
                                <h1>GRANULAR SYNTH</h1>
                                <h2>-</h2>
                                <div className="links-container">
                                <a href="https://github.com/pb-nowa/Virtual-Synthesizer"><h3>Github</h3></a>
                                <a href="https://granular-synth.herokuapp.com/"><h3>Live</h3></a>
                                </div>
                            </div>
                            <p>Granular Synth is an interactive audio-visualizer. As the user interacts with the orb, the particles fly apart and the audio granulates.</p>
                            <h3 className="features-title">FEATURES</h3>
                            <ul className="features-list">
                                <li className="feature-item"> The audio will granulate as you mouse-over the orb, this is matched by a visual displacing of the particles</li>
                                <li className="feature-item"> All of the particles are rendered on a 2 dimensional plane without the use of a 3D rendering engine</li>
                                <li className="feature-item"> The user can easily affect and edit the sound without any previous music or audio knowledge</li>
                            </ul>
                            <h3 className="features-title">DETAILS</h3>
                            <p>Granular synthesis is the process of breaking up sound into individual audio samples, usually only a few miliseconds in length. The samples can then be reordered and played at any rate. This is the same process that is used for detuning, resampling, and time-control in audio. When mixed with other digital signal processors(DSP), the sounds can be transformed from chaotic noise into rich and texturally complex musical sounds.

Granular synthesis can be commonly heard in modern film soundtracks and electronic music. Be sure to checkout the <a className="hyperlink" href="https://granular-synth.herokuapp.com/">website</a> or
                                visit the <a className="hyperlink" href="https://github.com/pb-nowa/Virtual-Synthesizer">Github</a> for a more detailed look at Granular Synth.
                            </p>
                            <a className="explore" href="https://granular-synth.herokuapp.com/"><h2>Explore</h2></a>
                        </div>
                        <ul className="technologies">
                            <img className="tech-icon javascript" src="images/javascript.png" alt="javascript" />
                            <img className="tech-icon webpack" src="images/webpack.png" alt="webpack" />
                            <img className="tech-icon html5" src="images/html5.png" alt="html5" />
                        </ul>
                    </div>
                    <div className="project-image-container">
                        <img
                            ref={ref => this.imageRef = ref}
                            onLoad={this.setLoadState}
                            className="project-image"
                            src="https://raw.githubusercontent.com/pb-nowa/Virtual-Synthesizer/master/assets/screenshots/granular-synth-destructure.gif"
                            alt="granular site"
                        />
                    </div> 
                </div>
                {/* <FeatureImg setLoadState={this.setLoadState} loaded={loaded}/> */}
            </>
        );
    }
}


export default Granular;