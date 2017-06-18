import React, { Component } from 'react';

export const About = (props) => {
    return(
      <div className='container'>

        <div className='flex flex_wrap ABOUT_US_div'>
          <div className='ABOUT_US'>
            ABOUT US
          </div>
          <hr className='yellow_hr'/>
        </div>

        <div className='ABOUT_US_text'>
          <p>In this age of snapchat and mobile phones, we believe there is a need to change the way we read and write stories.</p>

          <p>At Tales, we are doing our best to push the mobile first experience and an amazing new way to make the stories more interesting by letting the readers interact with them.</p>

          <p>On the other hand, we are also working hard to make writing stories a fun and hip thing again. To do so we use our amazing artificial intelligence technology to provide the writers with the guidance they always needed.</p>
        </div>

        <div className='envelope flex'>
          <div><i className="fa fa-envelope" aria-hidden="true"></i></div> <div className='envelope_email'>help@gettales.com</div>
        </div>

        <div>
          <img className='judgment_cat' src='images/judgment_cat.gif'/>
        </div>

      </div>

    );
};
