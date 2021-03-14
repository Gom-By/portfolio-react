import React, { useState, useEffect } from 'react'
import { projectsComponent } from './DataForPages/Projects'
import axios from 'axios'

const Home = () => {
    const [elements, setElement] = useState<any[]>([])
    useEffect(() => {
        axios
            .get("https://api.github.com/users/Gom-By/repos")
            .then(res => {
                setElement(res.data)
            })
    }, [])

    return (
        <div className="containerComponent">
            {elements.map(element => {
                return (
                    <div key={element.id}>
                        <h1>{element.name}</h1>
                        <p>buil with the {element.language}</p>
                        <a href={element.html_url}>link to the repo</a>
                    </div>
                )
            })}
            {projectsComponent}
        </div>
    )
}

export default Home
