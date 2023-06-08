import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../redux/productReducer";
import { Button } from "react-bootstrap";
import ProductNavigation from "./ProductNavigation";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/CartReducer";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import Filter from "../components/Filter";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

function Products() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  //to get all the product details
  const getProducts = async () => {
    try {
      let response = await axios.get(`${url}/product/product-details`);
      dispatch(addItems(response.data.products));
    } catch (error) {
      console.log(error);
    }
  };

  //to get the updated state of the product
  let items = useSelector((state) => state.product);

  // to update the quantity
  let [value, setValue] = useState(1);

  //to pre-populate the product details
  useEffect(() => {
    getProducts();
  }, []);

  //function for addToCart send product details store data in addToCart redux storage
  const handleAddToCart = ({ e }) => {
    console.log(e);
    dispatch(
      addToCart({
        e,
        price: value * e.price,
        value,
      })
    );
  };

  return (
    <>
      <div className="fixed-top">
        {" "}
        <ProductNavigation />
      </div>
      <div className="menu-body">
        <div className="container-fluid px-4 px-lg-5 mt-5">
          <Filter />
          <div className="card-header">
            {items.products.map((e, i) => {
              return (
                <div className="col mb-5 pt-5">
                  <div
                    className="card"
                    style={{ height: "40em", width: "18em" }}
                  >
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                      key={i}
                    >
                      {e.category}
                    </div>
                    <img
                      className="card-img-top"
                      height={250}
                      src={e.imgurl}
                      alt="..."
                    />
                    <div className="card-body p-2">
                      <div className="text-center">
                        <h5 className="fw-bolder">{e.name}</h5>
                      </div>
                      <hr />
                      <div className="text-center" style={{ height: "7em" }}>
                        {e.description}
                      </div>
                      <hr />

                      <div className="text-center">
                        <FaRupeeSign />
                        <b> {e.price}/-</b>
                      </div>

                      <hr />

                      <div className="d-flex justify-content-around">
                        <div>
                          Qty-
                          <select
                            onChange={(e) => setValue(e.target.value)}
                            style={{
                              backgroundColor: "rgb(232, 61, 61)",
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                            }}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className=" pb-2 bg-transparent">
                      <div className="text-center">
                        <Button
                          variant="outline-success"
                          onClick={() => handleAddToCart({ e })}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
                                                                                