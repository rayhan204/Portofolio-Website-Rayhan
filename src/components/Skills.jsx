import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiVite,
    SiAxios,
    SiNodedotjs,
    SiExpress,
    SiPhp,
    SiPostgresql,
    SiMysql,
    SiPrisma,
    SiKotlin,
    SiAndroid,
    SiGit,
    SiGithub,
    SiFigma,
    SiPostman,
} from "react-icons/si";

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Vite", icon: SiVite },
            { name: "Axios", icon: SiAxios },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "PHP", icon: SiPhp },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "Prisma ORM", icon: SiPrisma },
        ],
    },
    {
        title: "Mobile",
        skills: [
            { name: "Kotlin", icon: SiKotlin },
            { name: "Android", icon: SiAndroid },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Postman", icon: SiPostman },
            { name: "Figma", icon: SiFigma },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative overflow-hidden px-6 py-24 md:px-10"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}

                <div className="mb-16 text-center" data-aos="fade-up">
                    <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
                        Technologies
                    </span>

                    <h2 className="font-display mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                        Skills & Technologies
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Technologies, frameworks, databases and tools that I use
                        to build modern web and mobile applications.
                    </p>
                </div>

                {/* Skill Categories */}

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

                    {skillGroups.map((group, groupIndex) => (

                        <div
                            key={group.title}
                            data-aos="fade-up"
                            data-aos-delay={groupIndex * 80}
                            className="rounded-2xl border border-white/5 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_35px_rgba(59,130,246,.15)]"
                        >

                            <h3 className="mb-6 text-center font-display text-xl font-bold text-primary">
                                {group.title}
                            </h3>

                            <div className="space-y-3">

                                {group.skills.map((skill) => {

                                    const Icon = skill.icon;

                                    return (

                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-primary hover:bg-primary/10"
                                        >

                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">

                                                <Icon
                                                    size={22}
                                                    className="text-primary"
                                                />

                                            </div>

                                            <span className="text-sm font-medium text-white">
                                                {skill.name}
                                            </span>

                                        </div>

                                    );

                                })}

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;