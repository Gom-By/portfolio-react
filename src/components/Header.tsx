import React from 'react'
import NavBar from './NavBar'

const Header = () => {
    return (
        <div>
            <NavBar />
            {/* hero section #hero-body */}
            <header id="hero-body" className="bg-cover bg-center border-b text-center py-18vh md:pt-18vh md:h-450px">
                    <h1 id="title" className="text-6xl text-red-500 font-pacifico">Gom-By Portfolio</h1>
                    <p id="p-hero" className="text-3xl font-caveat">This is my portfolio</p>
                    <a href="http://gby-first-page.byethost9.com" className="text-3xl">Here is my cv</a>
            </header>
        </div>
    )
}

export default Header
