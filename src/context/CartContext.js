import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const updateQuantity = (id, quantity) => {
		setCartItems(items =>
			items.map(item =>
				item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
			)
		);
	};

	const removeFromCart = id => {
		setCartItems(items => items.filter(item => item.id !== id));
	};

	const getCartTotal = () => {
		return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const getTotalItems = () => {
		return cartItems.reduce((total, item) => total + item.quantity, 0);
	};

	const addToCart = (product) => {
		setCartItems(items => {
			const existing = items.find(item => item.id === product.id);
			if (existing) {
				return items.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + (product.quantity || 1) }
						: item
				);
			} else {
				return [...items, { ...product, quantity: product.quantity || 1 }];
			}
		});
	};

	return (
		<CartContext.Provider value={{ cartItems, updateQuantity, removeFromCart, getCartTotal, getTotalItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
