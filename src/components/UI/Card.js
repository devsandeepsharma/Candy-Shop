import { useContext } from "react";

import Button from "./Button";
import CardContext from "../../store/CartContext";
import "./card.css";

const Card = (props) => {

    const { addItems } = useContext(CardContext);

    const handleClick = (e) => {
        if(e.target.textContent === "2x") {
            addItems(props, 2);
        } else if (e.target.textContent === "3x") {
            addItems(props, 3);
        } else {
            addItems(props, 1);
        }
    }

    return (
        <div className="card">
            <img className="card_img" src={props.img} alt="candy image" />
            <h2 className="card_title">{props.name}</h2>
            <p className="card_price">Rs. {props.price}/-</p>
            <p className="card_desc">{props.desc}</p>
            <div className="flex-container">
                <Button className="btn-primary" onClick={handleClick}>1x</Button>
                <Button className="btn-primary" onClick={handleClick}>2x</Button>
                <Button className="btn-primary" onClick={handleClick}>3x</Button>
            </div>
        </div>
    )
}

export default Card;