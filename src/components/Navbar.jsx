import React, { useEffect, useState } from "react";
import { BsSearch,BsFillCartFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../services/product/productSlice";
import Icon from '../images/asset.png'

const Navbar = () => {
	const [text, setText] = useState('');

	const dispatch = useDispatch();
	const carts = useSelector(state => state.carts.carts)


	const handleChange = async() => {
		const {data} = await api.get(`/products/search?q=${text}`)
		dispatch(GetProducts(data.products))
	}

	useEffect(() => { 
		handleChange();
	},[text])
    return (
        <div className=" w-full px-0 md:px-3 lg:px-24 pb-8 pt-8">
            <div className=" p-2 md:p-5  shadow-md flex justify-between items-center bg-white">
				<Link to='/'>
					<div className=" flex gap-2 items-center">
					<img src={Icon} alt="" className=" w-6 md:w-12" />
					<h1 className=" md:text-2xl font-bold">MyShop</h1>
					</div>
				</Link>
                <div className=" flex gap-3">
					<div className=" flex items-center  gap-2   md:px-3 md:py-1 rounded-sm shadow-md">
						<BsSearch onClick={handleChange} className=" hidden md:block" />
						<input
							value={text}
							onChange={e=>setText(e.target.value)}
							type="text"
							className=" outline-none bg-transparent hidden md:block"
							placeholder="search"
						/>
					</div>
					<Link to='/carts'>
						<div className=" flex gap-3 items-center bg-black shadow-md p-1 md:p-2">
							<BsFillCartFill className=" text-lg text-white" />
							<span className=" text-white">{carts.length}</span>
						</div>
					</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
