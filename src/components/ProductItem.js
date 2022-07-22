import React from "react";

const Product = (props) => {
  const { name, price, count } = props.product;
  // Handlers
  // const handleIncrement = () => {
  //   setCount(pros.itemData.count + 1);
  // };
  // // const handleBy1 = () => handleIncrement(1);

  // const handleDecrement = () => {
  //   if (pros.itemData.count > 0) setCount(pros.itemData.count - 1);
  // };

  // render
  return (
    <div className="container me-auto">
      <div className="">
        <div className=" row p-2">
          <span className="fw-bold col-2 d-flex justify-content-center align-items-center">
            {name}
          </span>
          <span className="col-2 d-flex justify-content-center align-items-center">
            {price} $
          </span>
          <button
            onClick={() => props.handleIncrement(name)}
            className=" col-1 btn btn-outline-success"
          >
            +
          </button>

          <span className="col-1 d-flex justify-content-center align-items-center">
            {count}
          </span>
          <button
            onClick={() => props.handelDecrement(name)}
            className=" col-1  btn btn-outline-warning"
          >
            -
          </button>
          <button className=" col-1 btn btn-danger mx-3 ">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
