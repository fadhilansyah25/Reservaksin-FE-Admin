import React from 'react';
import './Unauth.css';
import {Link} from 'react-router-dom'
function Unauthorized(props) {
    return (
        <div>
          <div className="gandalf">
            <div className="fireball" />
            <div className="skirt" />
            <div className="sleeves" />
            <div className="shoulders">
              <div className="hand left" />
              <div className="hand right" />
            </div>
            <div className="head">
              <div className="hair" />
              <div className="beard" />
            </div>
          </div>
          <div className="message container-fluid mx-auto">
            <h1>403 - You Shall Not Pass</h1>
            <p>Uh oh, Gandalf is blocking the way!<br />Maybe you have a typo in the url? Or you meant to go to a different location? Like...Hobbiton?</p>
          </div>
          <Link to='/login'>Login</Link>
        </div>
      );
}

export default Unauthorized;