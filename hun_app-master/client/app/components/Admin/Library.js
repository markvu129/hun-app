import React, {Component} from 'react';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitSuccess: false
    };


  }

  render(){

    return(
      <div>
        <div className="main">
          <div className="hipsum">
            <div className="jumbotron">
              <p className="image-library-title">All images</p>
              <div className="image-library">
                <img src="https://unsplash.it/974/?random" alt="9.jpg" className="single-image"/>
                <img src="https://unsplash.it/974/?random" alt="10.jpg" className="single-image"/>
                <img src="https://unsplash.it/974/?random" alt="11.jpg" className="single-image"/>
                <img src="https://unsplash.it/974/?random" alt="12.jpg" className="single-image"/>
                <img src="https://unsplash.it/974/?random" alt="13.jpg" className="single-image"/>
                <img src="https://unsplash.it/974/?random" alt="14.jpg" className="single-image"/>
                <img src="https://unsplash.it/974/?random" alt="15.jpg" className="single-image"/>
                <img src="https://unsplash.it/974/?random" alt="16.jpg" className="single-image"/>
                <img src="https://unsplash.it/974/?random" alt="17.jpg" className="single-image"/>
              </div>
              <button className="add-new">Upload image</button>
            </div>
          </div>
        </div>
      </div>

    )
  }


}

export default Library;
