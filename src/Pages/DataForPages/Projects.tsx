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
    container: "projectComponent grid grid-cols-2 h-80 w-4/5 m-20 border-2 border-red-800 overflow-hidden rounded-xl",
    h1: "bg-red-900 text-white text-3xl font-serif p-5 h-20",
    p: "text-xl text-center p-5",
    img: "h-auto w-auto",
    a: "underline text-center text-red-500 font-bold text-2xl m-10"
}

function Projects() {
    return (
        <div>
            {
                projects.map((project) => {
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
            }
        </div >
    )
}

export default Projects
