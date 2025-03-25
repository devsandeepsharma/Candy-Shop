import Card from "../UI/Card";
import "./candies.css"

import eclair from "../../assets/eclair.png"
import lollipop from "../../assets/lollipop.png"
import jellybeans from "../../assets/jellybeans.png"
import candycane from "../../assets/candycane.png"
import toffee from "../../assets/toffee.png"
import gummybears from "../../assets/gummybears.png"

const candiesData = [
    { name: "Eclair", desc: "Rich chocolaty flavor with a soft caramel center. A delight in every bite!", price: 2, img: eclair },
    { name: "Lollipop", desc: "Sweet and fruity hard candy on a stick. Perfect for a long-lasting treat!", price: 5, img: lollipop },
    { name: "Jelly Beans", desc: "Colorful, chewy, and bursting with fruity flavors. A fun snack for all ages!", price: 10, img: jellybeans },
    { name: "Candy Cane", desc: "Classic peppermint-flavored holiday treat. Refreshing and festive in every way!", price: 8, img: candycane },
    { name: "Toffee", desc: "Smooth, buttery caramel with a rich taste. Melts in your mouth with every bite!", price: 3, img: toffee },
    { name: "Gummy Bears", desc: "Soft, juicy, and packed with fruity goodness. A timeless chewy candy favorite!", price: 7, img: gummybears }
];

const Candies = () => {
    return (
        <ul className="candies-container">
            {
                candiesData.map(candy => (
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