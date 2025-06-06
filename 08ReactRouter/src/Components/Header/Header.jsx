import React from 'react'
import {Link , NavLink} from  "react-router-dom"

 
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                    <h5 className='mr-10 text-2xl text-blue-600 bg-green-200  rounded-full font-extrabold hover:text-black  ' >
                        Vikrant 
                    </h5>

                        {/* <img
                            // src="https://cdn.3dnames.co/previews/ps26/1000x1000/v/ps26vikrant3dxx.webp"
                            className="mr-3 h-12"
                            // alt="vikrant"
                        /> */}

                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/contact"
                            className="text-gray-900 hover:bg-gray-400 focus:ring-5 focus:ring-gray-400 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            to="/about"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact 
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/Github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    GitHub 
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

