// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const { Router } = require("express");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "clothesmanagement",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  db.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }
    res.send("Connected to the MySQL server");
  });
});

// app.get("/api", (req, res) => {
//     const sqlInsert =
//       "INSERT INTO product (productName, productImage,productPrice, Quantity, productDate, idCategory, productStatus) VALUES ('Floral Summer Shirt','f1',100, 10,'2022/01/03', 1,1);";
//     db.query(sqlInsert, (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.json({ message: "Hello from server!" });
//       }
//     });
// });

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM product ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/create", (req, res) => {
  const productName = req.body.pName;
  const productImage = req.body.pImage;
  const productPrice = req.body.pPrice;
  const productQuantity = req.body.pQuantity;
  const productDate = req.body.pDate;
  const idCategory = req.body.pCategory;
  const productStatus = req.body.pStatus;

  const sqlInsert =
    "INSERT INTO product (productName, productImage,productPrice, Quantity, productDate, idCategory, productStatus) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      productName,
      productImage,
      productPrice,
      productQuantity,
      productDate,
      idCategory,
      productStatus,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// const sqlInsert =
// "INSERT INTO category (idCategory, CategoryName, CategoryStatus) VALUES (1,'Shirt',1);";
// db.query(sqlInsert, (err, result) => {
// if (err) {
//   console.log(err);
// } else {
//   res.json({ message: "Hello from server!" });
// }
// });

// const sqlInsert =
// "INSERT INTO product (idproduct, productName, productPrice, Quantity, productDate, idCategory, productStatus) VALUES (1,'Floral Summer Shirt',Lo);";
// db.query(sqlInsert, (err, result) => {
// if (err) {
//   console.log(err);
// } else {
//   res.json({ message: "Hello from server!" });
// }
// });
