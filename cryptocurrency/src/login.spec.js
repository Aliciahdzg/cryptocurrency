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
 // Test unitarios 
describe("Login should render", () => {
    test("renders Login component", () => {
        expect(render(<App />)).toMatchSnapshot();
      });
});

describe("Elements should be rendered", () => {
    render(<App />); 
        
    test("Should content placeholder", () => {
      render(<App />);

      expect(screen.getByPlaceholderText('Email...')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Password...')).toBeInTheDocument();
    })

    test('calls onClick prop when clicked', () => {
      render(<button onClick={saveData}>Login</button>)
      fireEvent.click(screen.getByText(/Login/i))

      expect(screen.getByText(/Login/i)).toBeInTheDocument();
      expect(saveData).toHaveBeenCalledTimes(1);
    })
      
      
    test("renders Sign out button", () => {
      render(<App saveData={saveData} />);
      const submitButton = screen.getByRole('button', { name: /Sign Out/i });
          
      expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
      expect(saveData).not.toHaveBeenCalled();
      
      fireEvent.click(submitButton);
    })
})

// Test de integracion
test('Should user LogIn', () => {
  const mockHandleLogin = jest.fn();
  render(<App handleLogin={mockHandleLogin} />);

  const contentEmail = screen.getByPlaceholderText('Email...');
  const contentPassword = screen.getByPlaceholderText('Password...');
  const buttonLogin = screen.getByRole('button', { name: /Login/i });

  const emailValue = 'prueba@prueba.com';
  const passwordValue = '123456';

  fireEvent.change(contentEmail, { target: { value: emailValue } });
  fireEvent.change(contentPassword, { target: { value: passwordValue } });
  fireEvent.click(buttonLogin);

  expect(mockHandleLogin).not.toHaveBeenCalled();
})