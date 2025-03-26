import { useContext } from "react";

import Card from "../UI/Card";
import CandiesContext from "../../store/CandiesContext";
import "./candies.css"

const Candies = () => {

    const {candies} = useContext(CandiesContext);

    return (
        <ul className="candies-container">
            {
                candies.map(candy => (
                    <li key={candy.name} >
                        <Card 
                            name={candy.name} 
                            desc={candy.desc} 
                            price={candy.price} 
                            img={candy.img} 
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default Candies;