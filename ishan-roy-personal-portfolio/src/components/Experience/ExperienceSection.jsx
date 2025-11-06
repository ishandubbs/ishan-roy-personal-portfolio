import { ExperienceItem } from "./ExperienceItem"

const experiences = [
    {
        company: 'Knack Tutoring',
        location: 'Hybrid',
        role: 'Academic Tutor',
        duration: 'January 2025 - Present',
        bullets: [
            'Spent 5+ hours a week tutoring GSU students in math and computer science courses such as Differential Calculus and Object Oriented Programming, retaining knowledge in concepts like data structures and inheritance.',
            'Maintained a 5.0/5.0 average rating across 10 student reviews, highlighting subject knowledge and teaching skills.'
        ]
    },

    {
        company: 'GSHacks',
        location: 'Atlanta, GA',
        role: 'Cofounder/Event Organizer',
        duration: 'October 2024 - Present',
        bullets: [
            'Spent 5+ hours a week tutoring GSU students in math and computer science courses such as Differential Calculus and Object Oriented Programming, retaining knowledge in concepts like data structures and inheritance.',
            'Maintained a 5.0/5.0 average rating across 10 student reviews, highlighting subject knowledge and teaching skills.'
        ]
    },

    {
        company: 'WhizLearning Kids',
        location: 'Lawrenceville, GA',
        role: 'Student Assistant Intern',
        duration: 'June 2024 - May 2025',
        bullets: [
            'Spent 5+ hours a week tutoring GSU students in math and computer science courses such as Differential Calculus and Object Oriented Programming, retaining knowledge in concepts like data structures and inheritance.',
            'Maintained a 5.0/5.0 average rating across 10 student reviews, highlighting subject knowledge and teaching skills.'
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