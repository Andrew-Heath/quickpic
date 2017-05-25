import React, { Component } from 'react';

// The landing component will have the sign up and login capabilities
// The server can redirect to a user's dashboard or profile if they are already logged in
class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="col-wrapper" >
          <div className="col-2 col-left">Advertisement or some kind of general image selection to show potential users. Could include popular posts by users or information on recent updates.</div>
          <div className="col-2 col-right">Sign Up box<br />
          Page divider<br />
          Login box</div>
        </div>
      </div>
    );
  }
}

export default Landing;
