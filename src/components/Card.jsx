import React, { useEffect, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./card.css";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { GetCarts } from "../services/cart/cartSlice";
import { setActiveButton } from "../services/product/productSlice";
import Fade from "react-reveal/Fade";

const Card = ({ product, products }) => {
    const dispatch = useDispatch();

    const isActive = useSelector(
        state => state.products.activeButtons[product.id]
    );

    const StarArr = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(product?.rating)) {
            StarArr.push(<BsFillStarFill className=" text-gray-900 dark:text-dark-star" key={i} />);
        } else {
            StarArr.push(<BsStar className=" dark:text-dark-star" key={i} />);
        }
    }

    const handleAddToCart = () => {
        dispatch(GetCarts(product));
        dispatch(setActiveButton({ productId: product.id, active: true }));
    };

    return (
        <>
            <Fade left>
                <div className=" p-3 bg-white dark:bg-dark-over dark:border-0 shadow rounded-lg border border-gray-200 flex flex-col gap-3 h-[400px] hover:shadow-2xl hover:scale-105 transition duration-500">
                    <div>
                        <img
                            src={product?.thumbnail}
                            alt=""
                            className=" w-full max-w-full h-[200px] object-cover "
                        />
                    </div>
                    <p className=" font-bold text-xl truncate dark:text-dark-title">
                        {product?.title}
                    </p>
                    <div className=" flex ">{StarArr}</div>
                    <div className=" mb-2 flex justify-between items-center">
                        <p className=" text-xl dark:text-dark-title">${product?.price}</p>
                        <button
                            onClick={handleAddToCart}
                            className={`${
                                isActive ? "active" : ""
                            } cart-btn px-5 flex items-center gap-1 py-2 border shadow-sm  rounded-sm  hover:bg-gray-900   transition duration-300 hover:text-gray-300 uppercase`}
                        >
                            <BsCartFill
                                className={`${
                                    isActive ? "icon-active" : ""
                                } text-xl cart-icon`}
                            />
                            cart
                        </button>
                    </div>
                    <Link to={`pdDetail/${product?.id}`}>
                        <button className=" w-full dark:bg-gray-900 bg-gray-800 px-4 text-gray-300 py-1 rounded-md ">
                            more info
                        </button>
                    </Link>
                </div>
            </Fade>
        </>
    );
};

export default Card;
