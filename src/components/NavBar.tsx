import { Link } from 'react-router-dom'

const NavBar = () => {
    const linkStyleTailwind: string = "linkNavBar text-2xl font-serif font-bold text-center"
    return (
        <div className="linkContainer flex justify-around bg-gray-100 h-12 p-2.5">
            <Link className={linkStyleTailwind} to="/portfolio-react/">Home</Link>
            <Link className={linkStyleTailwind} to="/portfolio-react/about">About</Link>
            <Link className={linkStyleTailwind} to="/portfolio-react/contact">Contact</Link>
        </div>
    )
}

export default NavBar
