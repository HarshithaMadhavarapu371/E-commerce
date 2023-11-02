import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i=0; i < all_product.length+1; i++)
    {
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
        console.log(cartItems)
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
    }
    const getCartTotalValue = () => {
        let total = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0) 
            {
                let item_info = all_product.find((product) => product.id === Number(item))
                total += item_info.new_price * cartItems[item]
            }
        }
        return total;
    }

    const context_value = {all_product, cartItems, addToCart, removeFromCart, getCartTotalValue}
    
    return (
        <Shopcontext.Provider value = {context_value}>
            {props.children}
        </Shopcontext.Provider>
    )

}

export default ShopContextProvider;