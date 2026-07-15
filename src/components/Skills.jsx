import 'react'
import {
    SiReact,
    SiJavascript,
    SiTailwindcss,
    SiGit,
    SiKotlin,
    SiPhp,
    SiFigma,
    SiNodedotjs,
    SiMysql,
    SiTypescript,
    SiVite,
    SiGithub,
} from 'react-icons/si'

const SkillsList = [
    { name: 'Kotlin', icon: SiKotlin, level: 90 },
    { name: 'PHP', icon: SiPhp, level: 80 },
    { name: 'JavaScript', icon: SiJavascript, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 75 },
    { name: 'React', icon: SiReact, level: 90 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
    { name: 'Node.js', icon: SiNodedotjs, level: 70 },
    { name: 'MySQL', icon: SiMysql, level: 72 },
    { name: 'Vite', icon: SiVite, level: 85 },
    { name: 'Git', icon: SiGit, level: 90 },
    { name: 'GitHub', icon: SiGithub, level: 95 },
    { name: 'Figma', icon: SiFigma, level: 65 },
]

const Skills = () => {
    return (
        <section id="skills" className="relative px-6 md:px-10 py-24 overflow-hidden">
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-125 bg-primary/10 blur-[130px] rounded-full" />

            <div className="relative max-w-6xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                        What I Know
                    </span>
                    <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                        Skills
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {SkillsList.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                data-aos="zoom-in"
                                data-aos-delay={index * 60}
                                className="group bg-card border border-white/5 hover:border-primary/60 rounded-2xl p-6 flex flex-col items-center text-center transition-colors duration-300"
                            >
                                <Icon
                                    className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                                    size={38}
                                />
                                <h3 className="font-display text-sm font-bold text-white mt-4">
                                    {skill.name}
                                </h3>

                                <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills