import React from 'react'

const Contact = () => {
    return (
        <div className="container" id="contact">
            <h2 className="h1-container text-4xl font-pacifico">If you want to contact me....</h2>
            <div id="box-contact" className="flex justify-center items-center bg-black rounded-lg mx-10 md:mx-0">
                <div className="link-reseaux w-1/2 md:w-auto border-r border-blue-500">
                    <ul id="list-reseaux" className="text-3xl text-lightblue text-center py-15%">
                        <li className="item-reseaux my-6"><a href="http://github.com/Gom-By" id="link-github">GitHub</a></li>
                        <li className="item-reseaux my-6"><a href="http://discord.com" id="link-discord">Discord</a></li>
                        <li className="item-reseaux my-6"><a href="#" id="link-insta">Instagram</a></li>
                        <li className="item-reseaux my-6"><a href="#" id="link-snap">Snapchat</a></li>
                    </ul>
                </div>
                <p id="form-contact" className="text-3xl text-white border-l border-red-500 pl-10 md:pl-0 py-10 md:py-0 w-1/2 md:w-auto">a future form container</p>
            </div>
        </div>
    )
}

export default Contact
