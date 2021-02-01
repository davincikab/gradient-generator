import React from 'react';
import './GlassMorphism.css';

class GlassMorphism extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="main">
        <div className="navbar">
            <h5>Glazm</h5>  
        </div>

        <div className="section">
            <div className="morph-section">
                <button className="btn"></button>
                <button className="btn"></button>
            </div>

            <p>Glassmorphism</p>
        </div>

        <div className="sliders">
            <div className="form-group">
                <label>Blur</label>
                <input type="range" name="blur"/>
            </div>

            <div className="form-group">
                <label>Opacity</label>
                <input type="range" name="opacity"/>
            </div>

            <div className="form-group">
                <label>Frostiness</label>
                <input type="range" name="frostiness"/>
            </div>  
        </div>
      </div>
    );
  }
}

export default GlassMorphism;
