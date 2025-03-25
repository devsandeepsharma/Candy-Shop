import "./card.css";

import Button from "./Button";

const Card = (props) => {
    return (
        <div className="card">
            <img className="card_img" src={props.img} alt="candy image" />
            <h2 className="card_title">{props.name}</h2>
            <p className="card_price">Rs. {props.price}/-</p>
            <p className="card_desc">{props.desc}</p>
            <div className="flex-container">
                <Button className="btn-primary">1x</Button>
                <Button className="btn-primary">2x</Button>
                <Button className="btn-primary">3x</Button>
            </div>
        </div>
    )
}

export default Card;