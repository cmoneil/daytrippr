import React, { Component } from 'react';
import Main from '../components/Main/Main'
import LogIn from '../components/LogIn/LogIn'
import Background from "../components/Main/images/clouds2.jpg"
import PropTypes from "prop-types"

class AuthPage extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    
    return (
      <div >
        {
          isAuthenticated() 
        }
        {
          !isAuthenticated() && (
            //   <h4>
            //     You are not logged in! Please{' '}
            //     <a
            //       style={{ cursor: 'pointer' }}
            //       onClick={this.login.bind(this)}
            //     >
            //       Log In
            //     </a>
            //     {' '}to continue.
            //   </h4>
              
            // )&&
            <div className="container-fluid" style={
              {backgroundImage: `url(${Background})`,
              backgroundSize: `cover`,
              height: "100vh"}}>
            <LogIn/>
            </div>)
        }

        {isAuthenticated() && (
          <div style={
            {backgroundImage: `url(${Background})`,
            backgroundSize: `cover`}}>
            <Main/>
            </div>
        )}
      </div>
    );
  }
}

AuthPage.propTypes = {
  auth: PropTypes.node
}
export default AuthPage;