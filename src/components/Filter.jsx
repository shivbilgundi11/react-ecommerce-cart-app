import React from "react";
import { CartState } from "../context/Context";

const Filter = ({ mobileToggle }) => {
  const {
    productDispatch,
  } = CartState();


  return (
    <div
      className="filter-bar"
      id={mobileToggle ? "active-bar" : "non-active-bar"}
    >
      {/* ------------Category-Filter------------ */}
      <div className="category-container filter-box">
        <p className="title-2">Category</p>
        <ul className="categorys">
          <li className="category">
            <input
              type="radio"
              name="category"
              id="all"
              value="all"
              onChange={(e) =>
                productDispatch({
                  type: "CLEAR_FILTER_CATEGORY",
                  // payload: e.target.value,
                })
              }
            />
            <label htmlFor="all">All</label>
          </li>
          <li className="category">
            <input
              type="radio"
              name="category"
              id="sneakers"
              value={"sneakers"}
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor="sneakers">Sneakers</label>
          </li>
          <li className="category">
            <input
              type="radio"
              name="category"
              id="flats"
              value={"flats"}
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor="flats">Flats</label>
          </li>
          <li className="category">
            <input
              type="radio"
              name="category"
              id="sandals"
              value={"sandals"}
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor="sandals">Sandals</label>
          </li>
          <li className="category">
            <input
              type="radio"
              name="category"
              id="heels"
              value={"heels"}
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: e.target.value,
                })
              }
            />
            <label htmlFor="heels">Heels</label>
          </li>
        </ul>
      </div>

      {/* ------------Price-Range-Filter------------ */}
      <div className="prize-range-container filter-box">
        <p className="title-2">Price</p>

        <ul className="prize-list">
          <li className="price-range">
            <input
              type="radio"
              name="price"
              id="all-price"
              value="all-price"
              onChange={(e) =>
                productDispatch({
                  type: "CLEAR_FILTER_PRICE",
                  // payload: "all-price",
                })
              }
            />
            <label htmlFor="all-price">All</label>
          </li>
          <li className="price-range">
            <input
              type="radio"
              name="price"
              id="0-50"
              value="0-50"
              onChange={(e) =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "0-50",
                })
              }
            />
            <label htmlFor="0-50">0-$50</label>
          </li>
          <li className="price-range">
            <input
              type="radio"
              name="price"
              id="50-100"
              value="50-100"
              onChange={(e) =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "50-100",
                })
              }
            />
            <label htmlFor="50-100">$50-$100</label>
          </li>
          <li className="price-range">
            <input
              type="radio"
              name="price"
              id="100-150"
              value="100-150"
              onChange={(e) =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "100-150",
                })
              }
            />
            <label htmlFor="100-150">$100-$150</label>
          </li>
          <li className="price-range">
            <input
              type="radio"
              name="price"
              id="over-150"
              value="over-150"
              onChange={(e) =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "over-150",
                })
              }
            />
            <label htmlFor="over-150">Over-150</label>
          </li>
        </ul>
      </div>

      {/* ------------Color-Filter------------ */}
      <div className="filter-box color-filter-container">
        <p className="title-2">Color</p>

        <ul className="color-list">
          <li className="color-item">
            <button
              className="color-btn all-color"
              onClick={() =>
                productDispatch({
                  type: "CLEAR_FILTER_COLOR",
                  // payload: "all-color",
                })
              }
            ></button>
            <p className="color-name">All</p>
          </li>
          <li className="color-item">
            <button
              className="color-btn black"
              onClick={() =>
                productDispatch({
                  type: "FILTER_BY_COLOR",
                  payload: "color-black",
                })
              }
            ></button>
            <p className="color-name">Black</p>
          </li>
          <li className="color-item">
            <button
              className="color-btn blue"
              onClick={() =>
                productDispatch({
                  type: "FILTER_BY_COLOR",
                  payload: "color-blue",
                })
              }
            ></button>
            <p className="color-name">Blue</p>
          </li>
          <li className="color-item">
            <button
              className="color-btn red"
              onClick={() =>
                productDispatch({
                  type: "FILTER_BY_COLOR",
                  payload: "color-red",
                })
              }
            ></button>
            <p className="color-name">Red</p>
          </li>
          <li className="color-item">
            <button
              className="color-btn green"
              onClick={() =>
                productDispatch({
                  type: "FILTER_BY_COLOR",
                  payload: "color-green",
                })
              }
            ></button>
            <p className="color-name">Green</p>
          </li>
          <li className="color-item">
            <button
              className="color-btn white"
              onClick={() =>
                productDispatch({
                  type: "FILTER_BY_COLOR",
                  payload: "color-white",
                })
              }
            ></button>
            <p className="color-name">white</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
