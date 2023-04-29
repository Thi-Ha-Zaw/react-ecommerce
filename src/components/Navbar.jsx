import React, { useEffect, useState } from "react";
import {
    BsSearch,
    BsFillCartFill,
    BsFillMoonFill,
    BsSunFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../services/product/productSlice";
import Icon from "../images/asset.png";
import IconTwo from "../images/IconTwo.png";

const Navbar = ({ theme, setTheme }) => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts.carts);

    const handleChange = async () => {
        const { data } = await api.get(`/products/search?q=${text}`);
        dispatch(GetProducts(data.products));
    };

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        handleChange();
    }, [text]);

    return (
        <div className=" w-full px-0 md:px-3 lg:px-24 pb-8 pt-8">
            <div className=" p-2 md:p-5  shadow-md flex justify-between items-center bg-white dark:bg-dark-over">
                <Link to="/">
                    <div className=" flex gap-2 items-center">
                        <img
                            src={theme === "dark" ? IconTwo : Icon}
                            alt=""
                            className=" w-6 md:w-12 dark:text-white"
                        />
                        <h1 className=" md:text-2xl font-bold dark:text-white">
                            MyShop
                        </h1>
                    </div>
                </Link>
                <div className=" flex gap-3 items-center">
                    <div className=" flex items-center  gap-2   md:px-3 md:py-1 rounded-sm shadow-md dark:bg-slate-300">
                        <BsSearch
                            onClick={handleChange}
                            className=" hidden md:block"
                        />
                        <input
                            value={text}
                            onChange={e => setText(e.target.value)}
                            type="text"
                            className=" outline-none bg-transparent  hidden md:block"
                            placeholder="search"
                        />
                    </div>
                    <Link to="/carts">
                        <div className=" flex gap-3 items-center bg-black dark:bg-slate-300 shadow-md p-1 md:p-2">
                            <BsFillCartFill className=" text-lg text-white dark:text-slate-900" />
                            <span className=" text-white dark:text-slate-900">
                                {carts.length}
                            </span>
                        </div>
                    </Link>
                    <div>
                        {theme === "dark" ? (
                            <BsSunFill
                                onClick={handleThemeSwitch}
                                className=" text-2xl text-gray-300 cursor-pointer"
                            />
                        ) : (
                            <BsFillMoonFill
                                onClick={handleThemeSwitch}
                                className=" text-xl cursor-pointer"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
