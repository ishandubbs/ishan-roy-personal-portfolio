import { Github, Linkedin, Mail } from "lucide-react"

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-primary">Contact</span> Me
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to exploring new opportunities! Feel free to reach out!
                </p>

                
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                    <div className="pt-8">
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/ishan-roy-0b8703323/" target="_blank">
                                <Linkedin />
                            </a>

                            <a href="https://github.com/ishandubbs" target="_blank">
                                <Github />
                            </a>

                            <a href="mailto:ishandubbs@gmail.com" target="_blank">
                                <Mail />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}