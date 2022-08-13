import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
// https://www.freecodecamp.org/news/react-testing-library-tutorial-javascript-example-code/
//https://testing-library.com/docs/example-react-router/

test('renders App comp', async () => {
    render(<App />, {wrapper: BrowserRouter});
  
    // verify page content for default route
    expect(screen.getByText(/Products/i)).toBeInTheDocument()
  });

