import React, { useState } from "react";
import OutsideLogo from "@/../assets/images/topbar/outside_logo.png";
import Image from "next/image";


const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <a
                className="p-2 text-white"
                onClick={toggleDrawer}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 "
                >
                    <path
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </a>

            <div
                className={`fixed top-0 right-0 h-full w-80 bg-black opacity-70 text-white transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >

                <div className="flex justify-between">
                    <div className="mt-2 ml-1 p-2">

                        <Image
                            src={OutsideLogo}
                            className="w-full h-16 object-cover "
                            priority
                            alt="logo"
                        />
                    </div>

                    <a
                        className="mt-2 mr-1 p-2"
                        onClick={toggleDrawer}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white size-6">
                            <path stroke-linecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </a>

                </div>
                <div className="px-4 py-1 flex flex-col gap-6 opacity-100">
                    <a href="#" className="w-full">
                        <span className="text-lg w-full text-white text-start py-2 border-b-2 border-white">Home</span>
                    </a>
                    <a href="#" className="w-full">
                        <span className="text-lg w-full text-white text-start py-2">Our Services</span>
                    </a>
                    <a href="#" className="w-full">
                        <span className="text-lg w-full text-white text-start py-2">Projects</span>
                    </a>
                    <a href="#" className="w-full">
                        <span className="text-lg w-full text-white text-start py-2">Blog</span>
                    </a>
                    <a href="#" className="w-full">
                        <span className="text-lg w-full text-white text-start py-2">Career</span>
                    </a>
                    <a href="#" className="w-full">
                        <span className="text-lg w-full text-white text-start py-2">Our Team</span>
                    </a>
                    <a href="#" className="w-full">
                        <span className="text-lg w-full text-white text-start py-2">Contact Us</span>
                    </a>

                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-0"
                    onClick={toggleDrawer}
                ></div>
            )}
        </div>
    );
};

export default Drawer;
