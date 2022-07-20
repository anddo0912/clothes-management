import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import moment from "moment";
import { Router, Routes, Route, Link, useNavigate  } from "react-router-dom";
import axios, * as others from "axios";
function Update() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setQuantity] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDate, setProductDate] = useState("");
  const [productStatus, setProductStatus] = useState(0);
  const [productDetail, setProductDetail] = useState("");
  const [message, setMessage] = useState("");

  var Object = localStorage.getItem("object");
  var product = JSON.parse(Object);
  // let b = localStorage.getItem("title");
  // let c = localStorage.getItem("price");
  // let history = useNavigate();
  console.log(product.idCategory);

  useEffect(() => {
    setProductName(product.productName);
    setProductCategory(product.idCategory);
    setProductPrice(product.productPrice);
    setQuantity(product.Quantity);
    setProductImage(product.productImage);
    setProductDate(product.productDate);
    setProductStatus(product.productStatus);
  }, []);
  let history = useNavigate();

  const updateProduct = (productId) => {
    const date = moment(productDate).format("YYYY-MM-DD");
    console.log(date);
    axios.put("http://localhost:3001/api/update",{
      idproduct: productId,
      pName: productName,
      pImage: productImage,
      pPrice: productPrice,
      pQuantity: productQuantity,
      pDate: date,
      pCategory: productCategory,
      pStatus: productStatus,
    }).then((response) => {
      console.log(response.data);
      if (response.data == "") {
        setMessage("Updated Successfully");
      }
    })
  };

  return (
    <div>
      <Header />
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h4 className="mt-4">Change Product</h4>

            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Product Name: </label>
                  <input
                    value={productName}
                    type={"text"}
                    placeholder="Product Name"
                    name="productName"
                    className="form-control"
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label> Product Price : </label>
                  <input
                  value={productPrice}
                    placeholder="Product Price"
                    name="productPrice"
                    className="form-control"
                    onChange={(e) => {
                      setProductPrice(e.target.value);
                    }}
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label> Quantity : </label>
                    <input
                    value={productQuantity}
                      placeholder="Quantity"
                      name="quantity"
                      className="form-control"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                  </div>

                  <div class="form-group col-md-6">
                    <label> Date : </label>
                    <input
                    value={moment(productDate).format("YYYY-MM-DD")}
                      placeholder="Date"
                      name="dateProduct"
                      type={"date"}
                      className="form-control"
                      onChange={(e) => {
                        setProductDate(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label> Product Image : </label>
                  <input
                  value={productImage}
                    placeholder="Product Image"
                    name="productImage"
                    className="form-control"
                    onChange={(e) => {
                      setProductImage(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label> Product Category : </label>
                  <input
                  value={productCategory}
                    placeholder="Product Category"
                    name="productCategory"
                    className="form-control"
                    onChange={(e) => {
                      setProductCategory(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label> Product Status : </label>
                  <input
                  value={productStatus}
                    placeholder="Product Status"
                    name="productStatus"
                    className="form-control"
                    onChange={(e) => {
                      setProductStatus(e.target.value);
                    }}
                  />
                </div>
                <p className="mb-4 mt-4">{message}</p>
                <button onClick={() => history("/")}className="btn btn-info mr-3">Back</button>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={() => updateProduct(product.idproduct)}
                >
                  Update
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Update;

//onClick={this.saveOrUpdateEmployee}
// onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}
