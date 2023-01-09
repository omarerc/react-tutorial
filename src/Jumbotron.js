import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import banner1 from "../src/banner-1.jpg";

class Jumbotron extends Component {

  render() {
    return(
      <div className="jumbotron mt-4 p-5 bg-light text-black rounded"
          style={{
            backgroundImage: 'url(' + banner1 + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 150%',}}>
        <div className='container'>
          <h1 className='display-3'>Surf Pocket</h1>
          <h2 className='display-5'>Play Real!</h2>
          <p>Just for real players!</p>
          <p>
            <a className='btn btn-primary btn-lg' href='index'>Learn more</a>
          </p>
        </div>
      </div>
    );
  }

}

export default Jumbotron;