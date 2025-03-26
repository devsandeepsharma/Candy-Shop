import { useState } from "react"

import CardContext from "./CartContext"

const CartContextProvider = (props) => {

    const [cartContextState, setCartContextState] = useState([])

    const addItems = (cart, quantity=1) => {
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

    const removeItems = (cart) => {
        setCartContextState((prevsCart) => {
            const existingCartIndex = prevsCart.findIndex((prevsCartItem) => prevsCartItem.name === cart.name);

            const updatedCart = [...prevsCart];
            const quantity = updatedCart[existingCartIndex].quantity;

            if(quantity === 1) {
                return updatedCart.filter(cartItem => cartItem.name !== cart.name);
            } else {
                updatedCart[existingCartIndex] = {
                    ...updatedCart[existingCartIndex],
                    quantity: updatedCart[existingCartIndex].quantity - 1
                }
            }

            return updatedCart;
        })
    }

    const cartContextData = {
        items: cartContextState,
        addItems: addItems,
        removeItems: removeItems,
    }

    return (
        <CardContext.Provider value={cartContextData}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CartContextProvider;