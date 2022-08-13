import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import {within} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import CartPage from "./components/CartPage";
import data from "./data";

const mockItems = [
    {
    "index": 0,
    "name": "product-0",
    "quantity": 3
    },

    {
        "index": 2,
        "name": "product-1",
        "quantity": 7
    }
];

test('items appear in on cart page', () => {
    render (
        <CartPage 
            cartItems = {mockItems}
            data = {data}
        />   
    )
    const capoTitle = screen.getByText(/Guitar Capo/i);
    const pickTitle = screen.getByText(/Assorted Picks/i);
    expect(capoTitle).toBeInTheDocument();
    expect(pickTitle).toBeInTheDocument();

});


test('quantity value is correct on cart page', () => {
    render (
        <CartPage 
            cartItems = {mockItems}
            data = {data}
        />   
    )

    const capoDiv = document.getElementById("cartItem-0");
    const pickDiv = document.getElementById("cartItem-2");

    const capoQuantity = within(capoDiv).getByText('3');
    const pickQuantity = within(pickDiv).getByText('7');

    expect(capoQuantity).toBeInTheDocument();
    expect(pickQuantity).toBeInTheDocument();
});


