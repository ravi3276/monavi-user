import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <div className="footer">
        <small>
        NOTE: Monavi is not a real investment, but a virtual simulated investment content community. We does not sell financial products or recommend investments. We are a community operated for non-profit purposes..
        </small>
  
        <div className="footer__links">
            <div className="links">
            <a href="">Terms of use</a>
            </div>
  
            <div className="links">
            <a href="">Privacy Policy</a>
            </div>
  
            <div className="links">
            <a href="">youth protection policy</a>
            </div>
  
            <div className="link">
            <a href="">Contact</a>
            </div>
        </div>
  
        <p className="footer__copyright">COPYRIGHT © 2020 Monavi All rights reserved</p>
        </div>
    )
}

export default Footer
