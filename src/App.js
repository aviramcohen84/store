import React from 'react';
import { StoreContextProvider } from "./store/store-context";
import Store from './components/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <StoreContextProvider>
      <div className="App">
        <Store />
      </div>
    </StoreContextProvider>
  );
}

export default App;
