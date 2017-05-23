import React, { Component } from 'react';

// this header component will appear on every page
// pass in the Link component of React-Route to properly link to other pages
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="site-image">QuickPic</div>
        <div className="site-tools">Tools go here</div>
      </div>
    );
  }
}

export default Header;
