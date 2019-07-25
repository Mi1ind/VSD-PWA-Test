import React, { Component } from 'react';
import './App.css';
import img_elRoundimage from './images/Comp1_elRoundimage_157210.png';


export default class Comp1 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elRoundimage = {
        backgroundImage: 'url('+img_elRoundimage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    
    return (
      <div className="Comp1" style={baseStyle}>
        <div className="foreground">
          <div className='elRoundimage' style={style_elRoundimage} />
        </div>
      </div>
    )
  }
  

}
