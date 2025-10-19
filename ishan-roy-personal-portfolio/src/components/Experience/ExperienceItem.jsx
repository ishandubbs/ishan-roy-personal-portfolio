export const ExperienceItem = ({
    company,
    location,
    role,
    duration,
    bullets
}) => {
    return (
        <div className="relative pl-8">
            <span className="absolute left-0 top-1 h-full border-l-2 border-blue-500"></span>
            <span className="absolute left-[-0.35rem] top-0 w-3 h-3 bg-blue-500 rounded-full z-10"></span>
            <div>
                <h3 className="text-lg md:text-xl font-semibold text-primary">
                {company} <span className="text-gray-400">| {location}</span>
                </h3>

                <p className="text-md text-gray-400 italic">
                    {role} · {duration}
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300">
                    {bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}