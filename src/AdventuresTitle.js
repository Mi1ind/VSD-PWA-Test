import React, { Component } from 'react';
import './App.css';
import img_elHeaderImage from './images/AdventuresTitle_elHeaderImage_846627.jpg';


export default class AdventuresTitle extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elHeaderImage = {
        backgroundImage: 'url('+img_elHeaderImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elHeaderText = {
        fontSize: 19.5,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'right',
        textShadow: 'rgba(254, 255, 254, 0.5079) 0.0px 0.7px 6.8px',
     };
    
    return (
      <div className="AdventuresTitle" style={baseStyle}>
        <div className="foreground">
          <div className='elHeaderImage' style={style_elHeaderImage} />
          <div className='font-avenirNextBold  elHeaderText' style={style_elHeaderText}>
            <div>{this.props.locStrings.adventurestitle_headertext_66245}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
