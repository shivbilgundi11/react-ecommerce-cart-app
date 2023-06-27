import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context';

const CartItem = ({item}) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          id: item.id,
          qty: quantity,
        },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

   const {
     dispatch,
   } = CartState();

  return (
    <div className="cart-item" key={item.id}>
      <div className="img-box">
        <img src={item.img} alt={item.title} />
      </div>

      <h3 className="prod-name">{item.title}</h3>

      <div className="btns">
        <button
          onClick={() => {
            quantity >= 1 ? setQuantity(1) : setQuantity(quantity - 1);
            
          }}
          id="button"
        >
          -
        </button>
        <span className="qty">{quantity}</span>
        <button
          onClick={() => {
            setQuantity(quantity + 1);
            dispatch({
              type: "CHANGE_CART_QTY",
              payload: {
                id: item.id,
                qty: quantity,
              },
            });
          }}
          id="button"
        >
          +
        </button>
      </div>
      <p className="prod-price price">${item.newPrice}</p>
      <button
        onClick={() => {
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: item,
          });
        }}
        id="delete-btn"
      >
        <i className="ri-delete-bin-line"></i>
      </button>
    </div>
  );
}

export default CartItem;