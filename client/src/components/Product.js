import React , {useState, useEffect} from "react";
import { Button ,Table} from "react-bootstrap";
import { Card } from "react-bootstrap";
import myproducts from "./data";
import axios, * as others from 'axios';
import { Link ,useNavigate} from "react-router-dom";
import "./css/productStyle.css";
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import "./styles.css";

function Product() {
    let history = useNavigate();

    const [productName,setProductName] = useState("");
    const [productCategory,setProductCategory] = useState("");
    const [productPrice,setProductPrice] = useState("");
    const [productQuantity,setQuantity] = useState("");
    const [productDate,setProductDate] = useState("");
    const [productStatus,setProductStatus] = useState("");
    const [productList,setProductList] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:3001/api/get").then((response) => {
            setProductList(response.data);
            console.log(response.data);
        })
    })

    function deleteItem(id) {
        var index = 
        myproducts.map(function(e) {
            return e.id;
        }).indexOf(id);

        myproducts.splice(index,1);
        
        history('/');
    }

    function setDataToStorage(pid) {
        localStorage.setItem("id", pid);
        // localStorage.setItem("title", pitems.title);
        // localStorage.setItem("price", pitems.price);
    }
    return (
        <div className="container">
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>CategoryID</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>View Detail</th>
                        <th>Update action</th>
                        <th>Delete action</th>
                    </tr>
                </thead>
                <tbody>
                {!productList || productList.length <= 0 ?
                        <tr>
                          <td colSpan="6" align="center"><b>No Product yet</b></td>
                        </tr>
                   : productList.map((item) => {
                        return(
                            <tr>
                                <td>{item.productName}</td>
                                <td>{item.idCategory}</td>
                                <td>${item.productPrice}</td>
                                <td>{item.Quantity}</td>
                                <td>{moment(item.productDate).format('DD/MM/YYYY')}</td>
                                <td>{item.productStatus===1? "Published" : "Unpublish"}</td>
                                <td>
                                    <Link to={"/detail"}>
                                        <Button
                                        // onClick={() => setDataToStorage(item.id)}
                                        >View
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/update"}>
                                        <Button 
                                        // onClick={() => setDataToStorage(item.id,item.title, item.price,item.quantity,item.date,item.status)} 
                                        variant ="warning">Update
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button
                                    //  onClick={() => deleteItem(item.id)}
                                      variant ="danger"
                                     >Delete
                                    </Button>
                                </td>
                            </tr>
                        )})}
                </tbody>
            </Table>
            <Link to="/create">
                <Button className="createButton" variant ="success" size="lg">Create</Button>
            </Link>
        </div>
        // <div className="container">
        //     <div className={"row"}>           
        //         {myproducts.map(product => {
        //         return (
        //             <div className="col-lg-3 col-md-4 col-sm-6 col-12" >
        //              <Card key={product.id} >
                        
        //              <Card.Img variant="top" src={require("./css/img/products/" + product.image + ".jpg")} />
        //                 <Card.Body>
        //                     <Card.Title className="title">
        //                         { product.title }
        //                     </Card.Title >
        //                     <Card.Text >
        //                     <ReactStars
        //                         count={5}
        //                         value={3.5}
        //                         size={24}
        //                         isHalf={true}
        //                         edit={false}
        //                         activeColor="#ffd700"
        //                     />
        //                     </Card.Text>
        //                     <Card.Text className="price">
        //                         ${product.price }
        //                     </Card.Text>
        //                     <Button className="addCart"><i class="fa fa-shopping-cart"></i></Button>
        //                     {/* <button className="addCart"><i class="fa fa-shopping-cart"></i></button> */}
        //                 </Card.Body>
        //                 <i class="bi bi-cart"></i>
        //             </Card>
        //         </div>
        //         );
        //     })}
        //     </div>
        // </div>
    )
}

export default Product;
