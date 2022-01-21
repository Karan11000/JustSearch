import React from 'react'
import { Link } from "react-router-dom"
import Search from "./Search"

function Navbar({ darkMode, setDarkMode }) {
    const clickEvent = ()=>{
        setDarkMode(!darkMode);
    }
    return (
        <>
        <div className="p-5 h-auto flex flex-wrap sm:justify-between justify-center items-center dark:border-gray-700 border-b border-gray-200">
            <div className="flex flex-wrap justify-between content-around items-center w-screen h-auto space-x-5">
                <a href="/">
                    <p className="text-1xl bg-blue-500 font-bold text-black p-2 rounded dark:bg-gray-50">
                        Just Seach 🔎
                    </p>
                </a>
                <button type="button" onClick = {clickEvent} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full p-2 hover:shadow-lg">
                {darkMode?'💡 Light':'🌙 Dark'}
                </button>
            </div>
            <Search setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
        </>

    )
}

export default Navbar;
