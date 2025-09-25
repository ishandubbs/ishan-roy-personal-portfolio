import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme Toggle*/}
        <ThemeToggle />
        {/*Background Effects*/}
        <StarBackground />
        {/*Navbar*/}
        <Navbar />
        {/*Main Content*/}
        <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        {/*Footer*/}
        <Footer />
    </div>
    );
};