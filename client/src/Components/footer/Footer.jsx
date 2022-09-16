import React from 'react';
import './footer.css';

const Footer = () => {
   const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>Get to Know US</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>
                </div>
                <div className="footr_details_one">
                    <h3>Connect with Us</h3>
                    <a target='blank' href="https://www.facebook.com/shanto.biswas.9887"><p>Facebook</p></a>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Make Money with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Make Money with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="lastdetails">
                <img src={logoURL} alt="logo" />
                <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 2012-{year}, Flipkart.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer;
