import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            {/* navigation section #nav */}
            <nav id="nav" className="fixed top-0 w-full max-h-50px bg-gray-800 px-4 border-b border-black">
                <ul id="list-links" className="flex justify-around m-0 p-0">
                    <Link className="item-links text-white" to="/portfolio-react/about" id="about-link">ABOUT</Link>
                    <Link className="item-links text-white" to="/portfolio-react/project" id="project-link">PROJECT</Link>
                    <Link className="item-links text-white" to="/portfolio-react/contact" id="contact-link">CONTACT</Link>
                </ul>
            </nav>

            {/* nav mobile mode */}
            <div className="fa fa-list" id="icon-link"></div>
            <div id="nav-mobile" className="bg-red-500 text-white hidden h-screen overflow-y-hidden">
                <ul id="mobile-list-links" className="flex flex-col justify-between m-0 p-4">
                    <Link className="item-links text-white" to="/portfolio-react/about" id="about-link">ABOUT</Link>
                    <Link className="item-links text-white" to="/portfolio-react/project" id="project-link">PROJECT</Link>
                    <Link className="item-links text-white" to="/portfolio-react/contact" id="contact-link">CONTACT</Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
