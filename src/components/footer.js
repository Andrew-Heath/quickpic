import React, { Component } from 'react';

// this header component will appear on every page
// pass in the Link component of React-Route to properly link to other pages
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="reflinks">User Profile | Example User | Activity Feed | Most Recent from All Users</div>
      </div>
    );
  }
}

export default Footer;
