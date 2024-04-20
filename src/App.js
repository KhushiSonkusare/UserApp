import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";

import CreateUserForm from "./components/CreateUserForm";
import UpdateUserForm from "./components/UpdateUserForm";
import DeleteUserForm from "./components/DeleteUserForm";

import CreateProductForm from "./components/CreateProductForm";
import UpdateProductForm from "./components/UpdateProductForm";
import DeleteProductForm from "./components/DeleteProductForm";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/update" element={<UpdateUserForm />} />
            <Route path="/users/remove" element={<DeleteUserForm />} />
            <Route path="/users/create" element={<CreateUserForm />} />

            <Route path="/products" element={<ProductList />} />
            <Route path="/products/update" element={<UpdateProductForm />} />
            <Route path="/products/remove" element={<DeleteProductForm />} />
            <Route path="/products/create" element={<CreateProductForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
