import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "../components/Cart";
import {  useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {  RemoveAllCart } from "../services/cart/cartSlice";
import { RemoveActiveButtons } from "../services/product/productSlice";

const CartPage = () => {
    const nav = useNavigate();
    const carts = useSelector(state => state.carts.carts);
    const dispatch = useDispatch();

    const cartTotal = carts?.reduce((pv, cv) => pv + cv.price, 0);


    const [total, setTotal] = useState(cartTotal);

    const handleSuccess = () => {
        dispatch(RemoveAllCart())
        dispatch(RemoveActiveButtons());
        nav('/success')
    }

    return (
        <>
            {carts?.length > 0 ? (
                <div className=" w-full px-3 lg:px-24 py-12">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Qty
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts?.map(cart => (
                                    <Cart
                                        key={cart.id}
                                        cart={cart}
                                        setTotal={setTotal}
                                        total={total}
                                    />
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className=" border-t">
                                    <td
                                        colSpan={"4"}
                                        className=" text-center px-6 py-4 font-semibold text-gray-900 dark:text-white text-xl"
                                    >
                                        Total
                                    </td>
                                    <td className=" px-6 py-4 font-semibold text-gray-900 dark:text-white text-lg">
                                        ${total}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className=" flex justify-end pt-5">
                        <button onClick={handleSuccess} className=" px-20 py-2 bg-gray-800 shadow-md hover:bg-gray-900 text-gray-50 rounded-md">
                            Buy Now
                        </button>
                    </div>
                </div>
            ) : (
                <div className=" w-full px-3 md:px-24 py-12">
                    <Fade top>
                        <div className=" flex justify-center items-center">
                            <div className=" text-center shadow-md p-10 md:p-20 hover:scale-105 transition duration-500">
                                <p className=" text-4xl font-bold mb-10 bg-gradient-to-r text-transparent bg-clip-text  from-gray-900 to-blue-900 hover:from-pink-500 hover:to-yellow-500">
                                    No Cart Items Here
                                </p>
                                <button
                                    onClick={() => nav("/")}
                                    type="button"
                                    className=" px-20 py-2 bg-gray-900 text-white hover:bg-gray-950 rounded-lg shadow-md"
                                >
                                    GO SHOP
                                </button>
                            </div>
                        </div>
                    </Fade>
                </div>
            )}
        </>
    );
};

export default CartPage;
