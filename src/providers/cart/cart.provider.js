import React, { createContext, useState, useEffect } from 'react';

import {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    getCartItemsCount,
    getCartItemsTotal,
} from './cart.utils';

export const CartContext = createContext({
    toggleHidden: () => {},
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
});

const localCartItems = JSON.parse(localStorage.getItem("cartItems"));

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState(localCartItems || []);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartItemsTotal, setCartItemsTotal] = useState(0);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartItemsTotal(getCartItemsTotal(cartItems));
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                removeItem,
                cartItemsCount,
                clearItemFromCart,
                cartItemsTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;