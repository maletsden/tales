import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

class App extends Component {

  render(){
    return (
      <div>
          <Header/>
          <div id='container'></div>
          <div id="particles-js"></div>
          <Footer/>

      </div>

    );
  }
}

render(<App/>, window.document.getElementById('main'));
