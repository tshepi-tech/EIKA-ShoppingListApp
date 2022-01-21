import React from "react";
//import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/HomeContent";
import { ShoppingList } from "./components/ShoppingListContent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingList" element={<ShoppingList />} />
      </Routes>
    </div>
  );
}

export default App;
