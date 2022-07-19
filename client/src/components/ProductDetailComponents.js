import React from "react";
import { Button, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import myproducts from "./data";
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./css/productStyle.css";
import ReactStars from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";

function ProductDetail() {
  let a = localStorage.getItem("id");
  // let b = localStorage.getItem("title");
  // let c = localStorage.getItem("price");
  // let history = useNavigate();

  var index = myproducts
    .map(function (e) {
      return e.id;
    })
    .indexOf(a);

  var detail = myproducts[index];

  function deleteItem(id) {
    var index = myproducts
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    myproducts.splice(index, 1);
    // history('/');
  }
  return (
    <div id="productDetail" className="section-p1">
      <div className="row">
        <div id="proImage" className="col-lg-5 col-md-12 col-12">
          <img
            id="mainImg"
            src={require("./css/img/products/" + detail.image + ".jpg")}
            width="100%"
            alt=""
          ></img>
        </div>

        <div className="col-lg-7">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 mt-3" id="proDetail">
              <h4>Product Name:</h4>
              <h6>{detail.title} </h6>
              <h4>Product Price:</h4>
              <h6>${detail.price}</h6>
              <h4>Product Status:</h4>
              <h6>{detail.status}</h6>
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt-3" id="proDetail">
              <h4>Product Description:</h4>
              <h6>{detail.description}</h6>
              <h4>Product Date:</h4>
              <p>{detail.date}</p>
            </div>
          </div>
          <div className="col text-center">
            <Button>Edit Product</Button>
          </div>
        </div>
      </div>
    </div>
  );

  // return(
  //     <div>
  //         <div >
  //             <label>
  //                 Id : {a}
  //             </label>
  //         </div>
  //         <div>
  //             <label>
  //                 Title : {b}
  //             </label>
  //         </div>
  //         <div>
  //             <label>
  //                 Page : {c}
  //             </label>
  //         </div>
  //     <Link to="/">
  //         <Button variant ="warning" size="lg">Back</Button>
  //     </Link>
  //     </div>
  // )
}

export default ProductDetail;
