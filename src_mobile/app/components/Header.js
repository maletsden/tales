import React, { Component } from 'react';

export const Header = (props) => {
    return(
      <div className='Header flex'>

        <div className='menu_icon_div'>
          <div></div>
          <div></div>
          <div></div>
        </div>


        <div className='menu'>

          <i className="fa fa-arrow-left" aria-hidden="true"></i>

          <div className='menu_cont flex flex_align_center flex_wrap flex_center'>
            <div>
              <div className="home flex flex_center" href='home'>HOME</div>
              <div className="about flex flex_center" href='about'>ABOUT</div>
              <div className="terms flex flex_center" href='terms'>TERMS</div>
              <div className="privacy flex flex_center" href='privacy'>PRIVACY</div>
            </div>

            <div className='socials flex flex_center'>
              <i className="fa fa-facebook" aria-hidden="true"></i>

              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
          </div>

        </div>



          <div className='logo flex flex_center'>
            <img className='header_img' src='images/logo.gif' href='home'/>

            <div className='tales flex flex_align_center' href='home'>Tales.</div>
          </div>



      </div>
    );
};
