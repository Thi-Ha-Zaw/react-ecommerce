import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts, setActiveButton } from "../services/product/productSlice";
import Card from "../components/Card";
import { ClimbingBoxLoader  } from "react-spinners";

const ProductPage = () => {

    const dispatch = useDispatch();

    const [Products, setProducts] = useState([]);

    const GetProductData = async () => {
        
        const { data } = await api.get("/products");
        

        dispatch(GetProducts(data?.products));
        setProducts(data?.products);
    };

    const products = useSelector(state => state.products.products);
    // console.log(products);
    
    const Categories = Products?.map(pd => pd.category);

    const resultCategories = Categories.reduce((acc, category) => {
        const existingCategory = acc.find(c => c.category === category);
        if (existingCategory) {
            return acc;
        }
        const newCategory = {
            id: acc.length + 1,
            category,
        };
        return [...acc, newCategory];
    }, []);

    // console.log(resultCategories)

    const [Category, setCategory] = useState(null);

    const handleClick = async category => {
        setCategory(category);
        const FilterProducts = await api.get(`/products/category/${category}`);
        dispatch(GetProducts(FilterProducts?.data?.products));
    };

    const handleAll = () => {
        setCategory(null);
        dispatch(GetProducts(Products));
    };

    useEffect(() => {
        GetProductData();
    }, []);



    return (
        <>
            {products.length > 0 ? (
                <div className=" w-full pb-24 px-3 lg:px-24">
                    <div className=" flex gap-5 flex-wrap justify-center pb-8">
                        <button
                            onClick={handleAll}
                            className={`${
                                Category === null ? "active" : ""
                            } px-5 py-1 border shadow-sm rounded-sm hover:bg-black hover:text-white transition duration-300`}
                        >
                            All
                        </button>
                        {resultCategories?.map((cat, index) => (
                            <button
                                onClick={() => handleClick(cat?.category)}
                                key={cat?.id}
                                className={` ${
                                    cat?.category === Category ? "active" : ""
                                } shadow-sm px-4 py-1 border rounded-sm hover:bg-black hover:text-white transition duration-300`}
                            >
                                {cat?.category}
                            </button>
                        ))}
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {products?.map(product => (
                            <Card key={product?.id} product={product} products={products} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className=" w-full h-screen flex justify-center items-center">
                        <ClimbingBoxLoader  color="#000" size={50} speedMultiplier={1} />
                </div>
            )}
        </>
    );
};

export default ProductPage;
