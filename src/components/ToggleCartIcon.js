import { hover } from "@testing-library/user-event/dist/hover";

const ToggleCartIcone = ({ isInCart }) => {
  return (
    <>
      {isInCart ? (
        <i
          style={{ color: "#F99D1C" }}
          className="fa-solid fa-cart-shopping"
        ></i>
      ) : (
        <i
          style={{ color: "gray", opacity: "0.6" }}
          className="fa-solid fa-cart-shopping"
        ></i>
      )}
    </>
  );
};

export default ToggleCartIcone;
