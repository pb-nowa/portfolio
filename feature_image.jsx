import React from 'react';
import Loading from './loading';

const image = ({ setLoadState, loaded }) => {
    return(
        <div className="project-image-container">
            <img 
                // ref={ref => this.imageRef = ref}
                onLoad={setLoadState}
                className="project-image"
                src="https://raw.githubusercontent.com/pb-nowa/Virtual-Synthesizer/master/assets/screenshots/granular-synth-destructure.gif"
                alt="granular site"
            />
            <Loading />
        </div> 
    );
}

export default image;