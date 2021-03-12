import React from 'react'
import { projects, projectTailwindcss } from './DataForPages/Projects'

const projectsComponent = projects.map((project) => {
    return (
        <div className={projectTailwindcss.container} key={project.id}>
            <div>
                <h1 className={projectTailwindcss.h1}>{project.title}</h1>
                <p className={projectTailwindcss.p}>{project.description}</p>
            </div>
            <div>
                <a className={projectTailwindcss.a} href={project.link}>Try the code</a>
                <img className={projectTailwindcss.img} src={project.imgUrl} alt="reload" ></img>
            </div>
        </div>
    )
})
const Home = () => {
    return (
        <div className="containerComponent">
            {projectsComponent}
        </div>
    )
}

export default Home
