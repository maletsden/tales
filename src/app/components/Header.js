import React, { Component } from 'react';

export const Header = (props) => {
    return(
      <div className='Header'>


        <div className='flex flex_between'>

          <div className='flex flex_align_center'>
            <img className='header_img' src='images/logo.gif'/>
            <div className='tales'>Tales.</div>
          </div>



            <div className='about_us flex flex_align_end'>
              ABOUT US
            </div>

            <div className="flex flex_align_end">
              <i className="fa fa-facebook flex flex_align_center" aria-hidden="true"></i>
            </div>
            <div className="flex flex_align_end">
              <i className="fa fa-twitter flex flex_align_center" aria-hidden="true"></i>
            </div>


        </div>


      </div>
    );
};
