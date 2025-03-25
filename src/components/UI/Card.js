import "./card.css";

import demoImg from "../../assets/demo.jpg"
import Button from "./Button";

const Card = () => {
    return (
        <div className="card">
            <img className="card_img" src={demoImg} alt="candy image" />
            <h2 className="card_title">Candy Name</h2>
            <p className="card_desc">
                Candy  Description lorem ipsum 2 lines
            </p>
            <div className="flex-container">
                <Button className="btn-primary">1x</Button>
                <Button className="btn-primary">2x</Button>
                <Button className="btn-primary">3x</Button>
            </div>
        </div>
    )
}

export default Card;