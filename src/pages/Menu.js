import { useState } from "react";
import ToggleCartIcone from "../components/ToggleCartIcon";

const Menu = ({ products, caregories, handelAddToCart }) => {
  /// ----------------- Search -----------------
  const [search, setSearch] = useState("");
  const handlersearch = (e) => {
    console.log(e.target.value.toLowerCase());
    setSearch(e.target.value.toLowerCase());
  };

  /// ----------------- Filter -----------------
  const [currentCategory, setCurrentCategory] = useState(0);

  /// Get The Filterd Item
  const filterdItems =
    currentCategory === 0
      ? products.filter((p) => p.name.toLowerCase().includes(search))
      : products.filter(
          (p) =>
            p.name.toLowerCase().includes(search) &&
            p.category === currentCategory,
        );

  /// ----------------- Pagintation -----------------
  const itemsCountPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  /// Get The Start Index In The Page
  const startIndexInPage = (currentPage - 1) * itemsCountPerPage;

  /// Get Items In The Page
  const paginatdItems = filterdItems.slice(
    startIndexInPage,
    startIndexInPage + itemsCountPerPage,
  );

  /// Get  No Of Pages
  const noOfPage = Math.ceil(filterdItems.length / itemsCountPerPage);

  /// Get Array Of Pages No
  let pagesArray = [];
  for (let i = 1; i <= noOfPage; i++) {
    pagesArray.push(i);
  }

  ///Change Page Handler
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  // Change The Current Category Handler
  const handleChangeCategory = (categryId) => {
    setCurrentCategory(categryId);
    setCurrentPage(1);
  };

  return (
    <div className="row mt-2">
      <div class="input-group mb-2">
        <span class="input-group-text" id="basic-addon1">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          style={{ color: "#f99d1c " }}
          type="text"
          className="form-control"
          placeholder="Type To Search"
          aria-label="Search"
          onChange={handlersearch}
          value={search}
        />
      </div>

      <div className="col-3 mt-">
        <ul className="list-group">
          {caregories.map((cat) => (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => handleChangeCategory(cat.id)}
              key={cat.id}
              className={
                cat.id == currentCategory
                  ? "list-group-item active"
                  : "list-group-item list-group-item list-group-item-success"
              }
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-9">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatdItems.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price} $</td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => handelAddToCart(p.id)}
                >
                  <ToggleCartIcone isInCart={p.isInCart} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pagesArray.length !== 1 && (
          <nav aria-label="... ">
            <ul className=" pagination pagination-sm d-flex justify-content-center align-items-center mt-4 $pagination-disabled-bg:$green">
              {pagesArray.map((page) => (
                <li
                  style={{ cursor: "pointer" }}
                  key={page}
                  className={
                    page === currentPage ? "page-item active" : "page-item  "
                  }
                  aria-current="page"
                  onClick={() => handleChangePage(page)}
                >
                  <span className="page-link">{page}</span>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Menu;
