import React from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

const Success = () => {

	const nav = useNavigate();

    return (
        <div className=" w-full h-screen px-3 md:px-24 py-12">
            <Fade top>
                <div className=" flex justify-center items-center">
                    <div className=" text-center dark:bg-white dark:rounded-md shadow-md p-10 md:p-20 hover:scale-105 transition duration-500">
                        <p className=" text-4xl font-bold mb-10 bg-gradient-to-r text-transparent bg-clip-text  from-gray-900 to-blue-900 hover:from-pink-500 hover:to-yellow-500">
                           Your Shopping Is Success !
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
    );
};

export default Success;
