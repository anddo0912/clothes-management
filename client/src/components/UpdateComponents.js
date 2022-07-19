import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios, * as others from 'axios';
function Update() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setQuantity] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDate, setProductDate] = useState("");
  const [productStatus, setProductStatus] = useState(0);
  const [productDetail, setProductDetail] = useState("");

  const submitUpdate = () => {
    axios.post("http://localhost:3001/createdde", {
      pName: productName,
      pImage: productImage,
      pPrice: productPrice,
      pQuantity: productQuantity,
      pDate: productDate,
      pCategory: productCategory,
      pStatus: productStatus,
    }).then(() => {
      alert('successful insert');
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
                  type={"text"}
                    placeholder="Product Name"
                    name="productName"
                    className="form-control"
                    onChange = {(e) => {
                      setProductName(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label> Product Price : </label>
                  <input
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
                      placeholder="Date"
                      name="dateProduct"
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
                    placeholder="Product Status"
                    name="productStatus"
                    className="form-control"
                    onChange={(e) => {
                      setProductStatus(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label> Product Description : </label>
                  <textarea
                    placeholder="Product Description"
                    name="productDescription"
                    className="form-control"
                    onChange={(e) => {
                      setProductDetail(e.target.value);
                    }}
                  />
                </div>
                <button className="btn btn-success" type="button" onClick={submitUpdate}>Save</button>
                <button className="btn btn-danger">Cancel</button>
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
