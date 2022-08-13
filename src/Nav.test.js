import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import Nav from "./components/Nav.js"
import { MemoryRouter } from 'react-router-dom';

describe("nav component loads", () => {

    test('Nav title renders', async ()=> {
        render(<Nav />, {wrapper: MemoryRouter});
        const title = screen.getByText(/Shopping Cart Site/i);
        expect(title).toBeInTheDocument();

    });
    
    test('user navigates to cart page', async () => {
        const user = userEvent.setup();
        render (<Nav />, {wrapper: MemoryRouter});
        const cartEl =  screen.getByLabelText(/Open Cart/i)
        await user.click(cartEl);
        expect(screen.getByText(/cart/i)).toBeInTheDocument();
    })

    test('cart count updates', async () => {
        render(<Nav cartCount = {5} />, {wrapper: MemoryRouter});
        expect(screen.getByLabelText(/Cart Count/i)).toHaveTextContent('5');
    });

});


