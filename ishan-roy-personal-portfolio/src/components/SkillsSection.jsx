import { useState } from "react"
import {cn} from '@/lib/utils'
import pythonIcon from "../icons/python.png"
import javascriptIcon from "../icons/JavaScript-logo.png"
import htmlIcon from "../icons/html.png"
import cssIcon from "../icons/css.png"
import rIcon from "../icons/r.png"
import javaIcon from "../icons/java.png"
import cIcon from "../icons/c.png"
import cplusIcon from "../icons/cplus.png"
import sqlIcon from "../icons/sql.png"
import reactIcon from "../icons/react.png"
import figmaIcon from "../icons/figma.png"
import nodedotjsIcon from "../icons/nodedotjs.png"
import numpyIcon from "../icons/numpy.png"
import pandasIcon from "../icons/pandas.png"
import matplotlibIcon from "../icons/matplotlib.png"
import supabaseIcon from "../icons/supabase.png"
import gitIcon from "../icons/git.png"
import githubIcon from "../icons/github.png"
import autocadIcon from "../icons/autocad.png"
import vscodeIcon from "../icons/vscode.png"
import microsoftofficeIcon from "../icons/microsoftoffice.png"
import intellijIcon from "../icons/intellij.png"

const skills = [
    //Programming Languages
    {name: "Python", category: "languages", icon: pythonIcon},
    {name: "Javascript", category: "languages", icon: javascriptIcon},
    {name: "HTML", category: "languages", icon: htmlIcon},
    {name: "CSS", category: "languages", icon: cssIcon},
    {name: "R", category: "languages", icon: rIcon},
    {name: "Java", category: "languages", icon: javaIcon},
    {name: "C", category: "languages", icon: cIcon},
    {name: "C++", category: "languages", icon: cplusIcon},
    {name: "SQL", category: "languages", icon: sqlIcon},
    //Frameworks & Libraries
    {name: "React", category: "frameworks", icon: reactIcon},
    {name: "Figma", category: "frameworks", icon: figmaIcon},
    {name: "Node.js", category: "frameworks", icon: nodedotjsIcon},
    {name: "NumPy", category: "frameworks", icon: numpyIcon},
    {name: "Pandas", category: "frameworks", icon: pandasIcon},
    {name: "Matplotlib", category: "frameworks", icon: matplotlibIcon},
    {name: "Supabase", category: "frameworks", icon: supabaseIcon},
    //Developer Tools
    {name: "Git", category: "tools", icon: gitIcon},
    {name: "Github", category: "tools", icon: githubIcon},
    {name: "AutoCAD", category: "tools", icon: autocadIcon},
    {name: "VSCode", category: "tools", icon: vscodeIcon},
    {name: "Microsoft Office", category: "tools", icon: microsoftofficeIcon},
    {name: "IntelliJ", category: "tools", icon: intellijIcon},
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
                        <div key={key} className="bg-white p-6 rounded-lg shadow-xs card-hover">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-left font-semibold text-lg text-black">{skill.name}</h3>
                                <img src={skill.icon} className="w-8 h-8"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}