const projects = [
    {
        id: 0,
        title: "Basic todolist",
        description: "this project is a basci todolist in vanilla javascript who set all todos in  the local storage. It's not finish....",
        imgUrl: "https://th.bing.com/th/id/Rb2baae741f0c69720c1dfd8d91952741?rik=wqzf15uoHfpAGw&riu=http%3a%2f%2firepo.primecp.com%2f2015%2f03%2f210883%2fFree-Printable-To-Do-List_ExtraLarge700_ID-901482.jpg%3fv%3d901482&ehk=F%2fPIpx%2fP9jaENj3cDrGR6JBVDqiFu060%2bd9%2fcYMeEEs%3d&risl=&pid=ImgRaw",
        link: "https://gom-by.github.io/todo"
    },
    {
        id: 1,
        title: "Todolist in Vue.js",
        description: "A very basic todolist in vue.js which no register to do task",
        imgUrl: "https://th.bing.com/th/id/Rb2baae741f0c69720c1dfd8d91952741?rik=wqzf15uoHfpAGw&riu=http%3a%2f%2firepo.primecp.com%2f2015%2f03%2f210883%2fFree-Printable-To-Do-List_ExtraLarge700_ID-901482.jpg%3fv%3d901482&ehk=F%2fPIpx%2fP9jaENj3cDrGR6JBVDqiFu060%2bd9%2fcYMeEEs%3d&risl=&pid=ImgRaw",
        link: "https://gom-by.github.io/simple-vue-todolist"
    },
    {
        id: 2,
        title: "Basic website Scss",
        description: "this is a basic website made in Scss Html and with a bit of javascript",
        imgUrl: "https://webypress.fr/wp-content/uploads/2019/02/1549790018_876_28-meilleurs-mod%C3%A8les-de-site-Web-d39actualit%C3%A9s-gratuites-2019.jpg",
        link: "https://gom-by.github.io/basic-website"
    }
]

const projectTailwindcss = {
    container: "projectComponent grid grid-cols-2 h-80 border-2 border-red-800 mx-36 my-20 overflow-hidden rounded-xl",
    h1: "bg-red-900 text-white text-3xl font-serif p-5 h-20",
    p: "text-xl text-center p-5",
    img: "h-auto w-auto",
    a: "underline text-center text-red-500 font-bold text-2xl m-10"
}

function Projects() {
    return (
        <div className="container" id="project">
            <h2 className="h1-container text-4xl font-pacifico">All of my projects</h2>
            <p className="p-short text-2xl font-bold">there are more project on github</p>
        
            <div className="grid-project grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    projects.map((project) => {
                        return (
                            <div className="item-project bg-gradient-to-b from-black to-opacity-25 border border-cyan-500 rounded-lg text-white min-h-300px md:h-300px max-h-300px" key={project.id}>
                                <p className="p-item-project text-xl">{project.title}</p>
                                <img src={project.imgUrl} alt="nothing for now" className="img-project" />
                                <p className="p-describe-project text-xl">{project.description}</p>
                                <a href={project.link} className="link-project">link to my project</a>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Projects
