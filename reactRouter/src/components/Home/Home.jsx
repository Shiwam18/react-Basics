import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Hi there!
                            <span className="hidden sm:block text-4xl">Welcome to Shiwam's Webpage</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="https://www.linkedin.com/in/shiwam-yadav-532a04225/overlay/1703610842221/single-media-viewer/?profileId=ACoAADiRZfYB_66jGFAknAFB5ZsPg5_vvKArp-0"
                        >
                            &nbsp; View resume
                        </Link>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 ml-2"
                            to="https://www.leetcode.com/Shiwam10"
                        >
                            &nbsp; Leetcode
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://www.iss.nus.edu.sg/images/default-source/default-album/software-dev.jpg?Status=Master&sfvrsn=aa8aa05f_0" alt="image1" />
                </div>
            </aside>

            <div className=" grid place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://png.pngtree.com/png-vector/20200131/ourmid/pngtree-bowing-achievement-award-vector-sport-png-image_2136866.jpg" alt="image2" />
                <p className=" text-left text-sm font-light sm:text-xl py-10">I am final year student and i am passoinate about development. I have secured 3771 rank in leetcode weekly contest 352.</p>
            </div>

            
        </div>
    );
}
