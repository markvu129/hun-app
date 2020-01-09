import React, {Component} from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {};


  }

  componentDidMount() {

  }

  render() {

    return (
      <section id="shop-item-list">
        <div className="container">
          <div className="column-xs-12">
            <h3>All items</h3>
          </div>
          <div className="grid related-products">

            <div className="column-xs-12 column-md-4">
              <img src="https://source.unsplash.com/miziNqvJx5M"/>
              <h4>Succulent</h4>
              <p className="price">$19.99</p>
            </div>
            <div className="column-xs-12 column-md-4">
              <img src="https://source.unsplash.com/2y6s0qKdGZg"/>
              <h4>Terranium</h4>
              <p className="price">$19.99</p>
            </div>
            <div className="column-xs-12 column-md-4">
              <img src="https://source.unsplash.com/6Rs76hNbIWE"/>
              <h4>Cactus</h4>
              <p className="price">$19.99</p>
            </div>
            <div className="column-xs-12 column-md-4">
              <img src="https://source.unsplash.com/6Rs76hNbIWE"/>
              <h4>Cactus</h4>
              <p className="price">$19.99</p>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default ItemList;
