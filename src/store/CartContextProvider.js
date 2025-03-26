import { useState } from "react"

import CardContext from "./CartContext"

const CartContextProvider = (props) => {

    const [cartContextState, setCartContextState] = useState([])

    const handleCartContextState = (cart, quantity=1) => {
        setCartContextState((prevsCart) => {
            const existingCartIndex = prevsCart.findIndex((prevsCartItem) => prevsCartItem.name === cart.name);
     
            if(existingCartIndex !== -1) {
                const updatedCart = [...prevsCart];
                updatedCart[existingCartIndex] = {
                    ...updatedCart[existingCartIndex],
                    quantity: updatedCart[existingCartIndex].quantity + quantity
                }

                return updatedCart;
            } else {
                return [...prevsCart, {...cart, quantity: quantity}];
            }
        })
    }

    const cartContextData = {
        items: cartContextState,
        addItems: handleCartContextState,
        removeItems: () => {},
    }

    return (
        <CardContext.Provider value={cartContextData}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CartContextProvider;