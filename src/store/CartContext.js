import { createContext } from "react";

const CardContext = createContext({
    items: [],
    totalAmount: 0,
    addItems: () => {},
    removeItems: () => {}
})

export default CardContext;