import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context';

const PriceDetails = () => {

    const [total, setTotal] = useState();

    const {state:{cart}} = CartState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.newPrice) * curr.qty, 0));
    }, [cart]);

  return (
    <div className="pricing-container">
      <p className="price-details">Price Details</p>

      <span className="items-total flex">
        <p className="items-price">Price {`(${cart.length}) items`}</p>

        <p className="items-total">${total}</p>
      </span>

      <span className="flex">
        <p>Delivery Charges</p>
        <p>$9</p>
      </span>
      <span className="flex">
        <p>Secured Packaging Fee</p>
        <p>$5</p>
      </span>

      <div className="total-container">
        <h3>Total Amount</h3>

        <p className="total-amount price">${total + 9 + 5}</p>
      </div>
    </div>
  );
}

export default PriceDetails;