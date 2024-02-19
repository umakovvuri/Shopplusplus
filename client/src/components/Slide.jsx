import React, { Component } from 'react'
import landingData from './landingData';

class Slide extends Component {
    state = {
        landing: landingData
    };
    render() {
        return (
            <React.Fragment>
                {this.state.landing.map((s, index) =>
                    <div className={index === this.props.activeIndex ? 'slide  active' : 'slide'} key={index} style={{
                        backgroundImage: `url(${s.img})`,
                    }}>
                        <div className="container">
                            <div className="caption">
                                <h2>{s.heading}</h2>
                            </div>
                        </div>

                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default Slide;