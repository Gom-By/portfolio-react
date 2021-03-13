import React from 'react'
import TailwindLogo from './TailwindLogo'

const Footer = () => {
    return (
        <div className="select-none grid justify-around text-center bg-gray-800 text-white p-9 h-full md:h-52">
            <p className="font-serif text-2xl mb-8 md:my-3">There are languages that I use in this project</p>
            <div className="flex flex-col md:flex-row  justify-around px-16">
                <a href="https://github.com/Gom-By" className="text-blue-400 underline"><img className="h-9 w-11" src="https://th.bing.com/th/id/R724794164fb289dd2f7d69dde7ac3bc0?rik=0Ubh3aP6JzCPcw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fgithub_PNG40.png&ehk=vDH1g6b2G5qphfQR7RsUJ7HmqSSwIMycien%2fvBj03ZU%3d&risl=&pid=ImgRaw" alt="none"></img></a>
                <a href="https://tailwindcss.com"><TailwindLogo /></a>
                <a href="https://reactjs.org"><img className="h-9 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="none"></img></a>
                <a href="https://typescriptlang.org"><img className="h-9 w-12" src="https://th.bing.com/th/id/R7f7aa78e1d5e3e0fbc6d8239cc5a3f18?rik=WrXKuQ4pSfq%2bRg&riu=http%3a%2f%2fwww.yanelyramirez.com%2fimages%2ficons%2ftypescript.png&ehk=3nqIs6BiHhjL1fbqeQxI2uMnsxjjEYfxDe3jMFN6Az4%3d&risl=&pid=ImgRaw" alt="none"></img></a>
            </div>
        </div>
    )
}

export default Footer
