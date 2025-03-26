import { useContext } from "react"

import Modal from "../UI/Modal"
import "./cart.css"
import CardContext from "../../store/CartContext"
import Button from "../UI/Button"

const Cart = (props) => {

    const {items, addItems, removeItems} = useContext(CardContext);

    const totalPrice = items.length > 0 ? items.reduce((total, item) => total + (item.quantity * item.price), 0) : 0;

    return (
        <Modal title="Your Cart" onClose={props.onClose} btnText="Order Candies">
            <ul className="cart-container">
                {
                    items.length > 0 ?
                        items.map((item, index) => (
                            <li className={`cart_item ${index === items.length - 1 ? "last_cart_item" : ""}`} key={item.name}>
                                <div className="cart_details">
                                    <p className="cart_name">{item.name}</p>
                                    <p className="cart_price">Rs. {item.price}/-</p>
                                </div>
                                <p className="cart_count">{item.quantity}x</p>
                                <div className="btn-container">
                                    <Button onClick={() => {removeItems(item)}}>-</Button>
                                    <Button onClick={() => {addItems(item, 1)}}>+</Button>
                                </div>
                            </li>
                        ))
                        : <p className="cart-msg">No Items Available....</p>
                }
            </ul>
            <div className="cart-total">
                <p>Total Price</p>
                <p>Rs. {totalPrice}/-</p>
            </div>
        </Modal>
    )
}

export default Cart;