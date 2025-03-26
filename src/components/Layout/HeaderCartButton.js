import { useContext } from "react";

import CardContext from "../../store/CartContext";
import "./headerCartButton.css";

const HeaderCartButton = (props) => {

    const {items} = useContext(CardContext);

    const totalItems = items.length !== 0 ? items.reduce((total, item) => total + item.quantity, 0) : 0;

    return (
        <button className="btn btn-header" onClick={props.onClick}>
            <span>Your Cart</span>
            <span className="badge">{totalItems}</span>
        </button>
    )
}

export default HeaderCartButton;