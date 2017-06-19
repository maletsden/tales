import React, { Component } from 'react';

export const Footer = (props) => {
    return(
      <div className='Footer'>

        <hr className='footer_hr'/>

        <div className='footer_corpopation_license'>© 2017 Tales™. All rights reserved.</div>

        <div className='footer_terms' href='terms'>Terms of service</div>

        <div className="footer_smile">☻</div>

        <div className='footer_privacy' href='privacy'>Privacy Policy</div>

      </div>

    );
};
