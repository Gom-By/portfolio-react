import React from 'react'

const Footer = () => {
    return (
        <div className="text-center font-lg bg-gray-800 text-white p-9 h-60 text-lg">
            <h1>Hello this is my footer</h1>
            <p>See my account on <a href="https://github.com/Gom-By" className="text-blue-400 underline">Github</a></p>
            <ul>
                <li>
                    <a className="text-center" href="https://reactjs.org">
                        <img className="h-9 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="none"></img>
                    </a>
                </li>
                <li><a href="https://tailwindcss.com">Tailwindcss</a></li>
            </ul>
        </div>
    )
}

export default Footer
