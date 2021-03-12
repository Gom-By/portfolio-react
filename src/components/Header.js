import React from 'react'
import NavBar from './NavBar'

const Header = () => {
    return (
        <div className="bg-gray-400 text-center overflow-hidden p-9 space-y-3">
            <b><h1 className="font-serif text-4xl">Guerby Naharro</h1></b>
            <h2 className="font-mono text-lg text-blue-700">This is my portfolio</h2>
            <br/>
            <a href="http://gby-first-page.byethost9.com" className="text-lg underline hover:text-red-500">Fin my CV</a>
            <NavBar />
        </div>
    )
}

export default Header
