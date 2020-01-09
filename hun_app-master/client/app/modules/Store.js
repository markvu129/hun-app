class Store {

  static storeItemIntoCart(item) {
    let itemsInCart = JSON.parse(localStorage.getItem('items'));
    if (itemsInCart){
      itemsInCart.push(item)
    }
    else {
      itemsInCart = [];
      itemsInCart.push(item)
    }
    localStorage.setItem('items', itemsInCart);
  }

  static returnItemsInCart(){
    return JSON.parse(localStorage.getItem('items'));
  }

  static clearItemsInCart(){
    localStorage.removeItem('accessToken');
  }


  static storeLastOrder(order, sumAmount){
    sessionStorage.setItem('currentOrder', order);
    sessionStorage.setItem('currentSumAmount', sumAmount);
  }

  static clearLastOrder(){
    sessionStorage.removeItem('currentOrder');
    sessionStorage.removeItem('currentSumAmount');
  }

}

export default Store;
