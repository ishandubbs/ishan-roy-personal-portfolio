import { Briefcase, User, Code } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-muted-foreground">Hello, my name is Ishan Roy, and I am a sophomore majoring in computer engineering at Georgia Tech. I have interests in web development, robotics, and software design, and I've built many projects that help turn ideas into impact. When I'm not coding, I enjoy hanging out with my family and friends, swimming, basketball, football, and playing video games!</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                            Get in Touch
                            </a>

                            <a href="/Ishan_Roy___Resume.pdf" target="_blank" rel="nopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 justify-center">
                        <div className="gradient-border p-6 card-hover flex flex-col justify-center">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <h4 className="font-semibold text-lg">Distributed Systems & Software Design</h4>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover flex flex-col justify-center">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                    <h4 className="font-semibold text-lg">Robotics</h4>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover flex flex-col justify-center">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}