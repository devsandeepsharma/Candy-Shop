import { useContext } from "react"

import Modal from "../UI/Modal"
import "./cart.css"
import CardContext from "../../store/CartContext"

const Cart = (props) => {

    const {message, items} = useContext(CardContext);

    return (
        <Modal title="Your Cart" onClose={props.onClose} btnText="Order Candies">
            <ul className="cart-container">
                <li className="cart_item">
                    <div className="cart_details">
                        {console.log(items)}
                        <p className="cart_name">Candy Name</p>
                        <p className="cart_price">Candy Price</p>
                    </div>
                    <p className="cart_count">5</p>
                </li>
            </ul>
            <div className="cart-total">
                <p>Total Price</p>
                <p>Rs. 550/-</p>
            </div>
        </Modal>
    )
}

export default Cart;