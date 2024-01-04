import React from 'react'
import { Link } from 'react-router-dom';
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React JS Developer with a strong understanding of the basics of web technologies such as HTML, CSS, and Tailwind.
Experience with React JS and working with Vite architecture.
Experience working with 8+ basic projects using complex Object-Oriented concepts in improving the performance of websites.
Experience in using React JS components, Forms, Events, Router, and learning continously to know more and build more.
Good Experience in React.js for creating interactive UI's using One-way data flow, Virtual DOM, JSX, custom hooks concepts.
                        </p>
                        <p className='mt-6 text-gray-600'>Also successfully completed 400+ question on leetcode and have a good understang of data structure and algorithms concepts.</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}