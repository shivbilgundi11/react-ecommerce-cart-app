import { CartState } from "../context/Context";
import "../App.css";
import CartItem from "../components/CartItem";
import PriceDetails from "../components/PriceDetails";

const Cart = () => {
  

  const {
    state: { cart },
  } = CartState();


  

  return (
    <div className="cart-container">
      <p className="title-main">Cart</p>

      {cart.length !== 0 ? (
        ""
      ) : (
        <div className="empty-container">
          <p className="empty-title">Your cart is empty</p>
        </div>
      )}

      <div className="cart-content-wrapper">
        <div className="cart-items-wrapper">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>

        {cart.length === 0 ? "" : <PriceDetails />}
      </div>
    </div>
  );
};

export default Cart;
