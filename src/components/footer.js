import React, { Component } from 'react';

// this header component will appear on every page
// pass in the Link component of React-Route to properly link to other pages
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="reflinks">Links to the pages of this example go here.</div>
      </div>
    );
  }
}

export default Footer;
