import { ExperienceItem } from "./ExperienceItem"

const experiences = [
    {
        company: 'Knack Tutoring',
        location: 'Hybrid',
        role: 'Academic Tutor',
        duration: 'January 2025 - Present',
        bullets: [
            'Provided one-on-one tutoring services in various subjects, including CS, Math, and Physics courses, focusing on key concepts and problem-solving strategies.',
            "Assessed students' proficiency levels and help create tailored lesson plans and resources to strengthen their understanding and application on the topic.",
            'Maintained a 4.9/5.0 average rating across 9 verified student reviews, highlighting patience and subject knowledge.'
        ]
    },

    {
        company: 'WhizLearning Kids',
        location: 'Lawrenceville, GA',
        role: 'Coding and Robotics Instructor',
        duration: 'June 2024 - May 2025',
        bullets: [
            'Collaborated with fellow instructors to develop a structured 10-week robotics curriculum, increasing student engagement by integrating real-world problem-solving challenges and teamwork activities.',
            'Taught and mentored 20+ elementary and middle school students in coding and robotics, improving programming proficiency by creating weekly hands-on projects in Scratch, Arduino, and VexCode VR.',
            'Designed 13 interactive Scratch games (including Geometry Dash, OnlyUp, and 3D Raycaster) to enhance understanding of programming logic and game design through project-based learning.'
        ]
    },


]

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary"> Experience </span>
                </h2>
            
                <div className="space-y-12 text-left">
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} {...experience} />
                ))}
                </div>
            </div>
        </section>
    )
}