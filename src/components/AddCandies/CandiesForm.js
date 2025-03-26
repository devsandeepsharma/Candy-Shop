import { useRef, useState } from "react";

import Input from "../UI/Input";
import Modal from "../UI/Modal";
import "./candiesForm.css";

const CandiesForm = (props) => {

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

        setErrorMessages({ candyname: "", candydesc: "", candyprice: "" });

        let hasError = false;
        const newErrors = {};

        if (candyNameRef.current.value.trim() === "") {
            newErrors.candyname = "Candy name is empty!";
            hasError = true;
        }
        if (candyDescRef.current.value.trim() === "") {
            newErrors.candydesc = "Candy description is empty!";
            hasError = true;
        }
        if (candyPriceRef.current.value.trim() === "") {
            newErrors.candyprice = "Candy price is empty!";
            hasError = true;
        }

        if (hasError) {
            setErrorMessages(newErrors);
            return;
        }

        console.log("Candy Name:", candyNameRef.current.value);
        console.log("Candy Desc:", candyDescRef.current.value);
        console.log("Candy Price:", candyPriceRef.current.value);
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