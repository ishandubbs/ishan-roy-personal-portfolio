import { useState } from "react"
import {cn} from '@/lib/utils'
import pythonIcon from "../icons/python.svg"
import reactIcon from "../icons/react.svg"
import gitIcon from "../icons/git.svg"










const skills = [
    //Programming Languages
    {name: "Python", category: "languages", icon: pythonIcon},
    //Frameworks & Libraries
    {name: "React", category: "frameworks", icon: reactIcon},
    //Developer Tools
    {name: "Git", category: "tools", icon: gitIcon},
];

const categories = ["all", "languages", "frameworks", "tools"]

export const SkillsSection = () => {
    const [activateCategory, setActivateCategory] = useState("all")
    const filteredSkills = skills.filter(
    (skill) => activateCategory === "all" || skill.category === activateCategory)
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        onClick={() => setActivateCategory(category)} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activateCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-left font-semibold text-lg">{skill.name}</h3>
                                <img src={skill.icon} className="w-8 h-8"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}