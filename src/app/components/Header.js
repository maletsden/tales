import React, { Component } from 'react';

export const Header = (props) => {
    return(
      <div className='Header flex'>

        <img className='header_img' src='images/logo.gif' href='home'/>

        <div className='tales flex flex_align_center' href='home'>Tales.</div>

        <div className='flex flex_align_end header_social'>
          <div className='about_us flex flex_align_end' href='about'>ABOUT US</div>

          <i className="fa fa-facebook flex flex_align_center" aria-hidden="true"></i>

          <i className="fa fa-twitter flex flex_align_center" aria-hidden="true"></i>

        </div>


      </div>
    );
};
