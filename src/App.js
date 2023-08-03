import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import Cart from "./cart";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [products,setproducts] =useState( [
    {
      id: 1,
      name: "iPhone 13",
      price: 110000,
      img: "https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960",
    },
    {
      id: 2,
      name: "iPad Mini",
      price: 44000,
      img: "https://www.seekpng.com/png/detail/40-407510_not-your-device-ipad-mini-e-ipad-air.png",
    },
    {
      id: 3,
      name: "iWatch",
      price: 20000,
      img: "https://www.pngitem.com/pimgs/m/106-1064303_apple-watch-watch-iwatch-png-image-free-download.png",
    },
    {
      id: 4,
      name: "iPad",
      price: 65000,
      img: "https://www.dpreview.com/files/p/articles/5298186898/iPad_pic.jpeg",
    },
    {
      id: 5,
      name: "iPhone 7",
      price: 70000,
      img: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/handset_0030/black/landscape-apple-iphone-11-black-03-900x1200.jpg",
    },
    {
      id: 6,
      name: "Macbook Pro",
      price: 325000,
      img: "https://digistatement.com/wp-content/uploads/2020/05/rsz_16-inch-macbook-pro.jpg",
    },
  ]);
  const [cartItems, setcartItems] = useState([]);
  let m = (v) => {
    setcartItems([...cartItems, v]);
  };

  let removeFromCart = (v) => {
    const indexValue = cartItems.findIndex((obj) => obj.id === v.id);
    cartItems.splice(indexValue, 1);
    setcartItems([...cartItems]);
  };

  return (
    <div className="containor">
      <div className="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">
              HOME
            </a>
          </div>
        </nav>

        <header class="bg-dark py-5">
          <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
              <h1 class="display-4 fw-bolder">Shop in style</h1>
              <p class="lead fw-normal text-white-50 mb-0">
                With this shop hompeage template
              </p>
            </div>
          </div>
        </header>

        <div className="col-lg-8">
          <div className="row">
            {products.map((product) => {
              return <Card v={product} addTocart={m} cartItems={cartItems}></Card>;
            })}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="border border-dark">
            <div className="text-center">
            <h4>Cart <FontAwesomeIcon icon= {faCartShopping} /></h4>
          </div>
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
