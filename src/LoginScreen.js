import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      userNameField: '',
      passwordField: '',
    };
  }

  textInputChanged_userNameField = (event) => {
    this.setState({userNameField: event.target.value});
  }
  
  textInputChanged_passwordField = (event) => {
    this.setState({passwordField: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'Adventures'
    this.props.appActions.goToScreen('adventures', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elHeaderTitle = {
        fontSize: 30.1,
        color: 'black',
        textAlign: 'center',
     };
    const style_elUserNameField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        fontSize: 17.2,
        fontFamily: "'AvenirNext-Regular', sans-serif",
     };
    
    const style_elUserNameField_outer = {
        pointerEvents: 'auto',
     };
    const style_elPasswordField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        fontSize: 17.2,
        fontFamily: "'AvenirNext-Regular', sans-serif",
     };
    
    const style_elPasswordField_outer = {
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        textTransform: 'none',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elHeaderTitle'>
            <div className='font-avenirNextDemiBold' style={style_elHeaderTitle}>
              <div>{this.props.locStrings.login_headertitle_957097}</div>
            </div>
          
          </div>
          
          <div className='elUserNameField' style={style_elUserNameField_outer}>
            <input className='' style={style_elUserNameField} type="text" placeholder={this.props.locStrings.login_usernamefield_184628} onChange={this.textInputChanged_userNameField} value={this.state.userNameField}  />
          
          </div>
          
          <div className='elPasswordField' style={style_elPasswordField_outer}>
            <input className='' style={style_elPasswordField} type="text" placeholder={this.props.locStrings.login_passwordfield_268823} onChange={this.textInputChanged_passwordField} value={this.state.passwordField}  />
          
          </div>
          
          <div className='elButton' style={style_elButton_outer}>
            <Button className='actionFont' style={style_elButton}  variant="raised" color="primary" onClick={this.onClick_elButton} >
              {this.props.locStrings.login_button_71145}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
