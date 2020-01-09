import React, {Component} from 'react';
import Store from "../../modules/Store.js";

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfItems: [{
        'name': 'Bonsai',
        'price': '$15.00',
        'itemID': 1
      }, {
        'name': 'Chocolate',
        'price': '$19.00',
        'itemID': 2
      }],
      itemsInCart: [],
      currentOrder: {
        totalSum: 0,
        items: []
      }
    };
    this.addItemToCart = this.addItemToCart.bind(this);

  }

  componentDidMount() {
  }

  addItemToCart(itemID){
    let currentItem = this.state.listOfItems.filter(item => {
      return item.itemID === itemID
    });
    let itemsInCart = this.state.itemsInCart;
    itemsInCart.push(currentItem);
    this.setState({
      itemsInCart: itemsInCart
    });
   // Push item to cart stored in cache
    Store.storeItemIntoCart(currentItem);
  }

  checkOutImmediately(){

  }

  renderItem(item){
    return (
      <div>
        <h1>{item.name}</h1>
        <h2>{item.price}</h2>
        <div className="description">
          <p>{item.description}</p>
        </div>
        <button className="add-to-cart" onClick={this.addItemToCart.bind('null', item.itemID)}>Thêm vào giỏ</button>
        <button className="add-to-cart add-to-cart-green">Mua ngay</button>
      </div>
    )
  }


  render() {

    let item = {
      'itemID': 1,
      'name': 'Bonsai',
      'price': '$19.99',
      'description': 'The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of\n' +
        '                    effort and ingenuity for the grower'
    };

    return (
      <section id="single-item">
        <main>
          <div className="container">
            <div className="grid second-nav">
              <div className="column-xs-12">
                <nav>
                  <ol className="breadcrumb-list">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Household Plants</a></li>
                    <li className="breadcrumb-item active">Bonsai</li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="grid product">
              <div className="column-xs-12 column-md-7">
                <div className="product-gallery">
                  <div className="product-image">
                    <img className="active" src="https://source.unsplash.com/W1yjvf5idqA"/>
                  </div>
                  <ul className="image-list">
                    <li className="image-item"><img src="https://source.unsplash.com/W1yjvf5idqA"/></li>
                    <li className="image-item"><img src="https://source.unsplash.com/VgbUxvW3gS4"/></li>
                    <li className="image-item"><img src="https://source.unsplash.com/5WbYFH0kf_8"/></li>
                  </ul>
                </div>
              </div>
              <div className="column-xs-12 column-md-5">
                {this.renderItem(item)}
              </div>
            </div>
            <div className="column-xs-12">
              <h3>You may also like</h3>
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
            </div>
          </div>
        </main>

      </section>

    )
  }

}

export default SingleItem;
