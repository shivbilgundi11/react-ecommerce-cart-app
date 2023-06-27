import React from "react";
import "../App.css";
import { CartState } from "../context/Context";

const ProdCard = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();


  return (
    <div className="prod-container">
      <div className="img-container">
        <img src={prod.img} alt={prod.title} />
      </div>

      <div className="prod-info">
        <h4 className="prod-name">{prod.title}</h4>
        <p className="prod-reviews">{prod.reviews}</p>

        <div className="price-info">
          <div className="prices">
            <p className="prev-price">{prod.prevPrice}</p>
            <p className="curr-price">${prod.newPrice}</p>
          </div>

          <div className="btns">
            {cart.some(p => p.id === prod.id)? (  
              <button onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }} className="remove-from-cart btn" style={{color:'red'}}>
                <i className="ri-delete-bin-line"></i>
              </button>
            ) : (
              <button onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }} className="add-to-cart btn">
                <i className="ri-shopping-bag-line"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
