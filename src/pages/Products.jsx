import { CartState } from "../context/Context";
import ProdCard from "../components/ProdCard";
import Filter from "../components/Filter";
import { useState } from "react";

const Products = () => {
  const {
    productState: { searchQuery, sort, category, brand, color },
    productDispatch,
  } = CartState();

  const {
    state: { products },
  } = CartState();

  const [mobileToggle, setMobileToggle] = useState(false);


  // Function to filter the products based on the filter inputs...

  const transformProducts = () => {
    let sortedProducts = products;


    // if(color, sort, category, searchQuery, brand){}

    // Filter by Items Color
    if (color) {
      switch (color) {
        case "color-black":
          sortedProducts = sortedProducts.filter(
            (item) => item.color === "black"
          );
          break;
        case "color-blue":
          sortedProducts = sortedProducts.filter(
            (item) => item.color === "blue"
          );
          break;
        case "color-red":
          sortedProducts = sortedProducts.filter(
            (item) => item.color === "red"
          );
          break;
        case "color-green":
          sortedProducts = sortedProducts.filter(
            (item) => item.color === "green"
          );
          break;
        case "color-white":
          sortedProducts = sortedProducts.filter(
            (item) => item.color === "white"
          );
          break;
        // case "all-color":
        //   return sortedProducts = sortedProducts.filter((item) => item.color = 'black', 'red', 'ble', 'green', 'white');
        default:
          return sortedProducts;
      };
    };

    // Filter by Items Prices
    if (sort) {
      switch (sort) {
        case "0-50":
          sortedProducts = sortedProducts.filter(
            (item) => item.newPrice >= 0 && item.newPrice <= 50
          );
          break;
        case "50-100":
          sortedProducts = sortedProducts.filter(
            (item) => item.newPrice >= 50 && item.newPrice <= 100
          );
          break;
        case "100-150":
          sortedProducts = sortedProducts.filter(
            (item) => item.newPrice >= 100 && item.newPrice <= 150
          );
          break;
        case "over-150":
          sortedProducts = sortedProducts.filter(
            (item) => item.newPrice >= 150
          );
          break;
        // case "all-price":
        //   return sortedProducts = sortedProducts.filter((item) => item.newPrice = '0-50', '50-100', '100-150', 'over-150');
        default:
          return sortedProducts;
      };
    };

    // Filter by Items Category
    if (category) {
      switch (category) {
        case "sneakers":
          sortedProducts = sortedProducts.filter(
            (item) => item.category === "sneakers"
          );
          break;
        case "flats":
          sortedProducts = sortedProducts.filter(
            (item) => item.category === "flats"
          );
          break;
        case "sandals":
          sortedProducts = sortedProducts.filter(
            (item) => item.category === "sandals"
          );
          break;
        case "heels":
          sortedProducts = sortedProducts.filter(
            (item) => item.category === "heels"
          );
          break;
        // case "all":
        //   return sortedProducts = sortedProducts.filter((item) => item.category = 'sneakers', 'flats', 'sandals', 'heels');
        default:
          return sortedProducts;
      };
    };

    // Filter by Items Brand
    if (brand) {
      switch (brand) {
        case "Nike":
          sortedProducts = sortedProducts.filter(
            (item) => item.company === "Nike"
          );
          break;
        case "Adidas":
          sortedProducts = sortedProducts.filter(
            (item) => item.company === "Adidas"
          );
          break;
        case "Vans":
          sortedProducts = sortedProducts.filter(
            (item) => item.company === "Vans"
          );
          break;
        case "Puma":
          sortedProducts = sortedProducts.filter(
            (item) => item.company === "Puma"
          );
          break;
        // case "All Products":
        //   return { ...state, brand: action.payload };
        default:
          return sortedProducts;
      };
    };

    //Filter by Search
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    };

    return sortedProducts;
  };

  

  return (
    <div className="products-page">
      <Filter mobileToggle={mobileToggle} />

      <div className="content-wrapper">
        <p className="title-main">Products</p>
        <div className="products-header">
          <div className="selection">
            <select
              name="brand"
              id="brand"
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_BY_BRAND",
                  payload: e.target.value,
                })
              }
            >
              <option value="All Products">All Products</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
              <option value="Vans">Vans</option>
            </select>
          </div>

          <button
            className="filtering none"
            onClick={() => setMobileToggle(!mobileToggle)}
          >
            Filter <i className="ri-filter-3-line"></i>
          </button>
        </div>

        <div className="products">
          {transformProducts().map((product) => {
            return <ProdCard prod={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
