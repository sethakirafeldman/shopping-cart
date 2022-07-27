import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
// https://www.freecodecamp.org/news/react-testing-library-tutorial-javascript-example-code/
//https://testing-library.com/docs/example-react-router/

test('renders learn react link', async () => {
    render(<App />, {wrapper: BrowserRouter});
    const user = userEvent.setup();

    // verify page content for default route
    expect(screen.getByText(/Products/i)).toBeInTheDocument()

    //
    await user.click(screen.getByTestId(/cart-test/));
    expect(screen.getByText(/cart/i));
  });