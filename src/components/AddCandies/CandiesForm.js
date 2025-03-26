import { useContext, useRef, useState } from "react";

import Input from "../UI/Input";
import Modal from "../UI/Modal";
import CandiesContext from "../../store/CandiesContext";
import "./candiesForm.css";

import defaultImg from "../../assets/default.jpg";

const CandiesForm = (props) => {

    const {addCandies} = useContext(CandiesContext);

    const candyNameRef = useRef()
    const candyDescRef = useRef()
    const candyPriceRef = useRef()

    const [errorMessages, setErrorMessages] = useState({
        candyname: "",
        candydesc: "",
        candyprice: "",
    });

    const handleModalSubmit = (e) => {
        e.preventDefault();
        document.getElementById("candies-form").requestSubmit();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const candyName = candyNameRef.current.value.trim();
        const candyDesc = candyDescRef.current.value.trim();
        const candyPrice = candyPriceRef.current.value.trim();

        setErrorMessages({ candyname: "", candydesc: "", candyprice: "" });

        let hasError = false;
        const newErrors = {};

        if (candyName === "") {
            newErrors.candyname = "Candy name is empty!";
            hasError = true;
        }
        if (candyDesc === "") {
            newErrors.candydesc = "Candy description is empty!";
            hasError = true;
        }
        if (candyPrice === "") {
            newErrors.candyprice = "Candy price is empty!";
            hasError = true;
        }

        if (hasError) {
            setErrorMessages(newErrors);
            return;
        }

        const candy = {
            name: candyName, 
            desc: candyDesc, 
            price: candyPrice, 
            img: defaultImg
        }

        addCandies(candy);
        props.onClose();
    };

    return (
        <Modal 
            title="Add Candies" 
            onSubmit={handleModalSubmit} 
            btnText="Add Candies"
            onClose={props.onClose}
        >
            <form className="form" id="candies-form" onSubmit={handleSubmit}>
                <Input 
                    htmlFor="candyname" 
                    errText={errorMessages.candyname} 
                    labelText="Write Candy Name..."  
                    type="text"
                    placeholder= "Candy Name"
                    ref={candyNameRef}
                />
                <Input 
                    htmlFor="candydesc" 
                    errText={errorMessages.candydesc} 
                    labelText="Write Candy Description..."  
                    type="text"
                    placeholder= "Candy Description"
                    ref={candyDescRef}
                />
                <Input 
                    htmlFor="candyprice" 
                    errText={errorMessages.candyprice}
                    labelText="Write Candy Price..."  
                    type="number"
                    placeholder= "Candy Price"
                    ref={candyPriceRef}
                />
            </form>
        </Modal>
    )
}

export default CandiesForm;