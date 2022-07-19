import React from 'react';
import "./css/bannerStyle.css"

function Footer(props) {
    return(
    <footer className="section-p1">
        <div className='row container mx-auto pt-5 mt-3'>
            <div className='footer-one col-lg-3 col-md-6 col-12 mb-3'>
                <h5 className='pd-2 mb-3'>MyShopping</h5>
                <p>The best shop jdafafjfjfa
                    jgndsndjfndsjfndsjnfjfnjn
                </p>
            </div>            
            <div className="footer-one col-lg-3 col-md-6 col-12 mb-3" >
                <h5 className='pd-2 mb-3'> Featured</h5>
                <ul className='text-uppercase list unstyled'>
                    <li><a href='/'>men</a></li>
                    <li><a href='/'>women</a></li>
                    <li><a href='/'>new arrivals</a></li>
                </ul>
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12 mb-3" >
                <h5 className='pd-2 mb-3'>Contact Us</h5>
                <div>
                    <h6 className='text-uppercase'>Address</h6>
                    <p>121, Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG</p>
                </div>
                <div>
                    <h6 className='text-uppercase'>Phone</h6>
                    <p>09333333</p>
                </div>
                <div>
                    <h6 className='text-uppercase'>Email</h6>
                    <p>hung@fpt.edu.vn</p>
                </div>
            </div>

            <div className='footer-one col-lg-3 col-md-6 col-12 mb-3'>
                <h5 className='pd-2 mb-3'>About</h5>    
                <ul className='text-uppercase list unstyled'>
                    <li><a href='/'>About Shop</a></li>
                    <li><a href='/'>Delivery Information</a></li>
                    <li><a href='/'>Privacy Policy</a></li>
                    <li><a href='/'>Term & Conditions </a></li>
                </ul>                 
            </div>
        </div>

        <div className="copyright mt-5">             
            <div className=" row container mx-auto">   
                <div className='col-lg-3 col-md-6 col-12 mb-3'>
                    <img src={require('./css/img/pay/pay.png')} alt=""></img>
                </div>

                <div className='col-lg-4 col-md-6 col-12 text-nowrap mb-2'>
                    <p>© Copyright 2022 Nguyen Lam Hung</p>
                </div>

                <div className='col-lg-4 col-md-6 col-12'>
                    <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                    <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>         
                </div>
            
            </div>
        </div>
    </footer>
    )
}

export default Footer;
