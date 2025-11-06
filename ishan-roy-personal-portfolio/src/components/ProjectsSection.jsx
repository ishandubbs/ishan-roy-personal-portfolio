import { Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Sidemen Charity Match Simulator",
        description: "A CRUD based web app on the Sidemen Charity Match.",
        image: "/projects/project1.png",
        tags: ["React", "JavaScript", "HTML/CSS", "Supabase"],
        githubURL: "https://github.com/ishandubbs/sdmn-charity-match-players"
    },

    {
        id: 2,
        title: "SpotiSpace",
        description: "A Spotify Forum.",
        image: "/projects/project2.png",
        tags: ["React", "JavaScript", "HTML/CSS", "Supabase"],
        githubURL: "https://github.com/ishandubbs/spotify-forum"
    },

    {
        id: 3,
        title: "SideTube",
        description: "Youtube for Sidemen fans.",
        image: "/projects/project3.png",
        tags: ["React", "JavaScript", "HTML/CSS"],
        githubURL: "https://github.com/ishandubbs/sidetube"
    },

    {
        id: 4,
        title: "Flappy Bird AI",
        description: "AI Flappy Bird.",
        image: "/projects/project4.png",
        tags: ["Python", "NEAT", "Pygame"],
        githubURL: "https://github.com/ishandubbs/flappy_bird"
    }
]

export const ProjectsSection = () => {
    return (<section id="projects" className="py-16 px-4 relative">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My <span className="text-primary"> Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects. Each one relates to my different interests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>)
}