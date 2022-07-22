import React from "react";
import Product from "../components/ProductItem";

// import { Item } from "react-bootstrap/lib/Breadcrumb";

// // State
// const [products, setProducts] = useState([
//   { name: "Burger", price: 40, count: 5 },
//   { name: "Fries", price: 20, count: 6 },
//   { name: "Cola", price: 15, count: 4 },
// ]);

// console.log(location.pathname);
// const location = useLocation();

// Render
const Cart = ({ products, handleIncrement, handelDecrement, handleReset }) => {
  return (
    <>
      {products.length === 0 && <img src="empty.png"></img>}
      {products.map((p) => (
        <Product
          key={p.name}
          product={p}
          handleIncrement={handleIncrement}
          handelDecrement={handelDecrement}
        />
      ))}
      <div className="container m-auto">
        {products.length !== 0 && (
          <button
            onClick={() => handleReset()}
            className="btn p-2 ms-5   btn-outline-dark "
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
