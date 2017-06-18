import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { About } from './components/About_us';
import { Footer } from './components/Footer';

class App extends Component {

  render(){
    return (
      <div>

        <Header/>
        <About/>
        <Footer/>
      </div>

    );
  }
}

render(<App/>, window.document.getElementById('main'));
