import React, { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { RemoveCart } from "../services/cart/cartSlice";
import { setActiveButton } from "../services/product/productSlice";

const Cart = ({ cart, total, setTotal }) => {
	
	const dispatch = useDispatch();

	const [qty, setQty] = useState(1);

	const handleAdd = () => {
		setQty(pre => pre + 1)
		setTotal(total + cart.price)
    };

    const handleSubtract = () => {
		if (qty > 1) {
			setQty(pre => pre - 1)
			setTotal(total - cart.price)
		}
	}
	
	const handleDelete = () => {
        dispatch(RemoveCart(cart.id))
        setTotal(total - (cart.price * qty))
        dispatch(setActiveButton({productId:cart.id , active : false}))
	}
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className=" md:w-32 md:p-4">
                    <img src={cart?.thumbnail} alt="Apple Watch" className=" h-20" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {cart?.title}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={handleSubtract}
                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                        >
                            <span className="sr-only">Quantity button</span>
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <div>
                            <p className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {qty}
                            </p>
                        </div>
                        <button
                            onClick={handleAdd}
                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                        >
                            <span className="sr-only">Quantity button</span>
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${cart?.price * qty}
                </td>
                <td className="px-6 py-4">
                    <button onClick={handleDelete} className="font-medium text-red-600 dark:text-red-500 hover:underline">
                        <BsTrashFill className=" text-xl" />
                    </button>
                </td>
            </tr>
        </>
    );
};

export default Cart;
