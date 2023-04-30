import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleProduct, setActiveButton } from "../services/product/productSlice";
import { BsCart } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import { GetCarts } from "../services/cart/cartSlice";

const ProductDetail = () => {

    const { id } = useParams();

    const [Image, setImage] = useState(true)
    const [Index,setIndex ] = useState(null)
    
    const dispatch = useDispatch();

    const FetchSingleProduct = async () => {
        const { data } = await api.get(`/products/${id}`);
        dispatch(GetSingleProduct(data));
    };

    const product = useSelector(state => state.products.product);


    useEffect(() => {
        FetchSingleProduct();
    }, []);

    const handleAddToCart = () => {
        dispatch(GetCarts(product))
        dispatch(setActiveButton({productId : product.id , active : true}))
    }

    const hanldeShowImage = (index) => {
        console.log(index);
        setIndex(index)
        setImage(false)
    }

    return (
        <>
            {product ? (
                <div className=" w-full min-h-screen px-3 lg:px-24 py-12">
                    <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-28 mb-10">
                        <Fade left>
                            <div>
                                <img
                                    src={Image ? product?.thumbnail : product?.images[Index]}
                                    alt=""
                                    className=" rounded-md object-cover w-full h-[400px] max-w-full"
                                />
                                <div className=" flex mt-10 flex-wrap gap-5 items-center">
                                    {product?.images?.length > 0 ? (
                                        product?.images?.map((image, index) => (
                                            <div key={index} className="">
                                                <img
                                                    onClick={()=>hanldeShowImage(index)}
                                                    src={image}
                                                    className=" cursor-pointer w-[100px]  h-[100px] shadow-md rounded-md object-cover"
                                                ></img>
                                            </div>
                                        ))
                                    ) : (
                                        <h1>loading...</h1>
                                    )}
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className=" flex flex-col gap-7 pt-10">
                                <p className=" uppercase font-bold dark:text-dark-title">
                                    {product?.brand}
                                </p>
                                <p className=" font-bold dark:text-dark-title text-5xl">
                                    {product?.title}
                                </p>
                                <p className=" text-sm leading-7 dark:text-dark-des tracking-wide text-gray-600">
                                    {product?.description}
                                </p>
                                <p className=" text-3xl font-bold dark:text-dark-title">
                                    ${product?.price}
                                </p>
                                <div>
                                    <button onClick={handleAddToCart} className=" uppercase px-20 shadow-md py-5 rounded-md bg-gray-900 text-white flex items-center gap-3">
                                        <BsCart className=" text-2xl" />
                                        <span className=" ">ADD to cart</span>
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            ) : (
                <h1 className=" dark:text-white">Loading....</h1>
            )}
        </>
    );
};

export default ProductDetail;
