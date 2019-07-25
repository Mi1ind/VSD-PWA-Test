import React, { Component } from 'react';
import './App.css';


export default class Filter extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
    this.props.appActions.updateDataSlot("ds_filter", event.target.value);
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elField_outer = {
        pointerEvents: 'auto',
     };
    
    return (
      <div className="Filter" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elField' style={style_elField_outer}>
            <input className='baseFont' style={style_elField} type="text" placeholder={this.props.locStrings.comp1_field_168381} onChange={this.textInputChanged_field} value={this.state.field}  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
