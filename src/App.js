import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//// imports my components
import Cart from "./pages/Cart";
import About from "./pages/About";
import Hader from "./components/Hader";
import Home from "./pages/Home";
import ProudectPage from "./pages/PeoudectPage";
import NotFound from "./pages/NotFound";
import AboutTeam from "./pages/AboutTeam";
import AboutCompany from "./pages/AboutCompany";
import Menu from "./pages/Menu";
import "./style.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Big Burger",
      price: 65,
      count: 0,
      isInCart: false,
      catrgory: 1,
    },
    {
      id: 2,
      name: "Mideium Burger",
      price: 50,
      count: 0,
      isInCart: false,
      catrgory: 1,
    },
    {
      id: 3,
      name: "Small Burger",
      price: 35,
      count: 0,
      isInCart: false,
      catrgory: 1,
    },
    {
      id: 4,
      name: "Big Fries",
      price: 25,
      count: 0,
      isInCart: false,
      catrgory: 2,
    },
    {
      id: 5,
      name: "Mideium Fries",
      price: 20,
      count: 0,
      isInCart: false,
      catrgory: 2,
    },
    {
      id: 6,
      name: "Small Fries",
      price: 15,
      count: 0,
      isInCart: false,
      catrgory: 2,
    },
    {
      id: 7,
      name: "Big Cola",
      price: 20,
      count: 0,
      isInCart: false,
      catrgory: 3,
    },
    {
      id: 8,
      name: "Mideium Cola",
      price: 15,
      count: 0,
      isInCart: false,
      catrgory: 3,
    },
    {
      id: 9,
      name: "Small Cola",
      price: 10,
      count: 0,
      isInCart: false,
      catrgory: 3,
    },
  ]);

  const caregories = [
    { id: 0, name: "All" },
    { id: 1, name: "Burger" },
    { id: 2, name: "Fries" },
    { id: 3, name: "Drink" },
  ];

  // Handlers
  const handleIncrement = (productName) => {
    // clone
    let newProuducts = [...products];
    // update
    // console.log(product);
    let index = newProuducts.findIndex((item) => item.name === productName);
    newProuducts[index].count = newProuducts[index].count + 1;

    // setState
    setProducts(newProuducts);
  };

  // Handlers
  const handelDecrement = (productName) => {
    // Clone
    const newProuducts = [...products];
    // update
    const index = newProuducts.findIndex((p) => p.name === productName);
    if (newProuducts[index].count > 0)
      newProuducts[index].count = newProuducts[index].count - 1;

    // setState
    setProducts(newProuducts);
  };

  const handleReset = () => {
    // clone
    let newProuducts = [...products];
    // updeate
    newProuducts = newProuducts.map((p) => {
      return { ...p, count: 0 };
    });
    // setState
    setProducts(newProuducts);
  };

  const handelAddToCart = (productId) => {
    // clone
    let newProuducts = [...products];
    // update
    let index = newProuducts.findIndex((p) => p.id == productId);
    newProuducts[index].isInCart = !newProuducts[index].isInCart;
    newProuducts[index].count = 1;
    // setState
    setProducts(newProuducts);
  };

  return (
    <>
      <Router>
        <Hader />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/cart"
              element={
                <Cart
                  products={products.filter((p) => p.isInCart)}
                  handleIncrement={handleIncrement}
                  handelDecrement={handelDecrement}
                  handleReset={handleReset}
                />
              }
            ></Route>
            <Route path="/about" element={<About />}>
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
            </Route>
            <Route path="/product/:name/:id" element={<ProudectPage />}></Route>
            <Route
              path="/menu"
              element={
                <Menu
                  products={products}
                  handelAddToCart={handelAddToCart}
                  caregories={caregories}
                />
              }
            ></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
