import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { CartState } from "../context/Context";

const Header = () => {

  const {
    state: { cart },
    productDispatch,
  } = CartState();
  return (
    <div className="header-container">
      <Link to={"/"} className="logo">
        Shopi<span className="dot">.</span>
      </Link>

      <input
        className="input"
        name="text"
        placeholder="Search for products..."
        type="search"
        onChange={(e) =>productDispatch({
          type: "FILTER_BY_SEARCH",
          payload: e.target.value
        })}
      />

      <div className="cart-container">
        <Link to={"/cart"}>
          <i className="ri-shopping-cart-line"></i>
          <span className="badge">{cart.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
