import React from 'react'
import NavBar from './NavBar'

const Header = () => {
    return (
        <div>
            <div className="bg-gray-500 text-center overflow-hidden p-9 space-y-3">
                <b><h1 className="font-serif text-5xl">Gom-By Portfolio</h1></b>
                <h2 className="headerSuubtitle font-mono text-xl text-white md:none">This is my portfolio</h2>
                <br />
                <a href="" className="text-2xl underline hover:text-red-500">Here is my CV</a>
            </div>
            <NavBar />
        </div>
    )
}

export default Header
