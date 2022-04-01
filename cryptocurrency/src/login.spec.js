// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// learn more: https://github.com/testing-library/jest-dom

import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'


import { login } from './App';
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
      render(<button onClick={saveData}>Sign out</button>);
      const submitButton = screen.getByRole('button', { name: /Sign Out/i });
          
      expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
      //expect(saveData).not.toHaveBeenCalled();
      
      fireEvent.click(submitButton);
      expect(saveData).toHaveBeenCalled();
    })
})

// Test de integracion
const currentUser = {
  email: "prueba@prueba.com"
}
//jest.mock(login)
const mockLoginSuccess = () => {
  login.jest.mock()
    .mockImplementationOnce(() => Promise.resolve(currentUser));
 }
 const userLogIn = (name, password) => {
  userEvent.type(screen.getByPlaceholderText('Email...'), name)
  userEvent.type(screen.getByPlaceholderText('Password...'), password)
  userEvent.click(screen.getByText(/login/i))
 }

test ('Is logged in', async () => {
  mockLoginSuccess()
  render(<App />)

  act(() => userLogIn('prueba@prueba.com', '123456') )

  await waitFor(() => {
    expect(mockLoginSuccess).toHaveBeenCalledWith(contentEmail, contentPassword);
  })
})
/*test('Should user LogIn', async () => {
  const mockHandleLogin = jest.fn();
  
  const emailValue = 'prueba@prueba.com';
  const passwordValue = '123456';

  render(<App />);

  const contentEmail = screen.getByPlaceholderText('Email...');
  //user.type(contentEmail, emailValue)
  const contentPassword = screen.getByPlaceholderText('Password...');
  //user.type(contentPassword, passwordValue);
  const buttonLogin = screen.getByRole('button', { name: /Login/i });
  
  console.log('BOTON');
  console.log(buttonLogin);

  fireEvent.change(contentEmail, { target: { value: emailValue } });
  fireEvent.change(contentPassword, { target: { value: passwordValue } });
  fireEvent.click(buttonLogin);
  
  expect(login).toHaveBeenCalled();
  //await waitFor(() => expect(mockHandleLogin).toHaveBeenCalledWith(contentEmail, contentPassword) );
  //expect(await screen.findByText(/prueba@prueba.com/i));
})*/