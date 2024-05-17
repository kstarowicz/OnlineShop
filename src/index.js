import React from 'react';
import { createRoot } from 'react-dom/client';//spr czy działa bez client możliwy błąd bez '/client'
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';


const container = document.getElementById('root'); // Pobierz element DOM
//dev-lbn8zxj2ypy0m2ji.us.auth0.com
//nUzdFBvSxE9dbjUhqWly4BWhXZk887NF



const root = createRoot(container); // Utwórz root przy użyciu createRoot nowy sposób od 18 
root.render(
  <Auth0Provider
    domain="dev-lbn8zxj2ypy0m2ji.us.auth0.com"
    clientId="nAQ2v28A4ikg4ihXPbdl9pcNIdS6sd39"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <UserProvider>
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </FilterProvider>
    
  </ProductsProvider>
  </UserProvider>
  </Auth0Provider>
);

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
