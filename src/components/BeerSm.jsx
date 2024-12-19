import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";

export default function BeerSm({ test, index }) {
  const { addItem } = useCart();

  return (
    <div>
      <div className="card-container">
        <img
          src={test.catalogimg}
          alt="Flying Mamaliga"
          className="card-image"
        />
        <div>
          <h2 className="card-title">{test.name}</h2>
        </div>

        <div className="info">
          <div className="box type2">
            <p>Price</p>
            <small>{test.price} MDL</small>
          </div>
          <div className="box">
            <p>Alcohol</p>
            <small>{test.alcohol} %</small>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link to={`/beer/${test.slug}`}>
            <button className="card-button card-button-primary w-1/2">
              View More
            </button>
          </Link>
          <div>
            <button
              onClick={() => addItem(test)} // Fixed here
              className="w-1/2 item-cart-btn card-button card-button-secondary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
