import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = [
    {id: '1', name: 'sushi', amount: 2, price: 12.99}
  ].map(item => <li>{item.name}</li>)
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.cartItem}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>23.50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
 
export default Cart;