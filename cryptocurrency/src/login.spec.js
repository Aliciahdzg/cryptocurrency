// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import React from "react";

import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const saveData = jest.fn();

    describe("Login should render", () => {
      test("renders Login component", () => {
        expect(render(<App />)).toMatchSnapshot();
      });
    });

    /*describe("Input should be rendered", () => {
        render(<Login />); 
        test('calls onClick prop when clicked', () => {
          render(<button onClick={saveData}>Login</button>)
          fireEvent.click(screen.getByText(/Acceder/i))
          expect(saveData).toHaveBeenCalledTimes(1)
        })
      
      
        test("renders login component", () => {
          render(<Login saveData={saveData} />);
          const submitButton = screen.getByRole('button', { name: /SignIn with Google/i });
      
          expect(saveData).toHaveBeenCalled();
      
          fireEvent.click(submitButton);
      
          //expect(saveData).toHaveBeenCalledWith('waiter@bq.com', '123456');
        })
      })*/