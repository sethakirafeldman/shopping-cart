import React from 'react';
import { render, screen } from "@testing-library/react";
import ProductCard from "../src/components/ProductCard";
import '@testing-library/jest-dom'
import { within } from '@testing-library/react';
import data from "./data";

test('available products render', async ()=> {
    render( 
    
    <ProductCard
      data = {data}
    />

    )
    const item0 = document.getElementById("item-0");
    const item1 = document.getElementById("item-1");
    const checkItem0 = within(item0).getByText(/8.99/i);
    const checkItem1 = within(item1).getByText(/Stay in tune with this clip on./i);

    expect(checkItem0).toBeInTheDocument();
    expect(checkItem1).toBeInTheDocument();

    //    const cartEl = screen.getByTestId('cart-test');
    //    await user.click(cartEl);
    //    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  })