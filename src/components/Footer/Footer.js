import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="" id="footer">
            <div className="row">

                <div className="col-lg-3 align-center mt-5">
                    <p>KIDS EDUCATION</p>
                    <small><i class="fas fa-map-marker-alt"></i>Roads 33,House 33,New York</small>
                    <br />
                    <small><i class="fas fa-phone"></i> :99835672378</small>
                </div>

                <div className="col-lg-3 mt-5">
                    <h6>SUCCESS</h6>
                    <h6>POLICY</h6>
                    <h6>TERMS AND CONDITION</h6>
                    <h6>ABOUT US</h6>
                </div>
                <div className="col-lg-3 mt-5">
                    <p className="ms-3">FOLLOW US</p>
                    <i class="fab fa-facebook ms-3"></i><i class="fab fa-twitter ms-3"></i><i class="fab fa-instagram ms-3"></i>
                </div>
            </div>

            <small className="justify-center mt-3">copyright<i class="far fa-copyright"></i>2021</small>
        </div>
    );
};

export default Footer;