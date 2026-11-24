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
    SiFigma,
    SiPostman,
    SiNextdotjs,
    SiPython,
} from 'react-icons/si'

const skillCategories = [
    {
        category: 'Pengembangan Frontend',
        description: 'Arsitektur komponen, manajemen state, dan antarmuka responsif.',
        skills: [
            { name: 'React', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'JavaScript (ES6+)', icon: SiJavascript },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'Vite', icon: SiVite },
            { name: 'Axios', icon: SiAxios },
        ],
    },
    {
        category: 'Pengembangan Backend',
        description: 'Rekayasa RESTful API, autentikasi, dan arsitektur server.',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express.js', icon: SiExpress },
            { name: 'RESTful API', icon: null },
            { name: 'JWT Auth', icon: null },
            { name: 'Swagger / OpenAPI', icon: null },
            { name: 'PHP', icon: SiPhp },
        ],
    },
    {
        category: 'Pengembangan Mobile',
        description: 'Pengembangan aplikasi mobile lintas platform dan native.',
        skills: [
            { name: 'React Native', icon: SiReact },
            { name: 'Expo', icon: null },
            { name: 'Kotlin', icon: SiKotlin },
            { name: 'Android Studio', icon: SiAndroid },
            { name: 'CameraX', icon: null },
            { name: 'Retrofit', icon: null },
        ],
    },
    {
        category: 'Basis Data & ORM',
        description: 'Pemodelan data relasional, migrasi skema, dan optimasi query.',
        skills: [
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'MySQL', icon: SiMysql },
            { name: 'Prisma ORM', icon: SiPrisma },
            { name: 'Perancangan Database', icon: null },
        ],
    },
    {
        category: 'Alat & Platform',
        description: 'Version control, pengujian API, kolaborasi desain, dan deployment.',
        skills: [
            { name: 'Git & GitHub', icon: SiGit },
            { name: 'Figma', icon: SiFigma },
            { name: 'Postman', icon: SiPostman },
            { name: 'Python (GIS / Analisis)', icon: SiPython },
            { name: 'Vercel', icon: null },
            { name: 'Railway / Neon DB', icon: null },
        ],
    },
]

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-24 border-b border-[#E5E5E5] bg-[#FAFAF9]">
            <div className="editorial-container">
                {/* Header Bagian */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-10 border-b border-[#E5E5E5]">
                    <div>
                        <span className="section-label">04 / KEAHLIAN</span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                            Kompetensi & Teknologi
                        </h2>
                    </div>
                    <p className="text-sm font-mono text-[#737373]">
                        Teknologi Terstruktur Berdasarkan Ranah Pengembangan
                    </p>
                </div>

                {/* Kolom Terstruktur */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((group) => (
                        <div
                            key={group.category}
                            className="bg-white border border-[#E5E5E5] rounded-lg p-6 flex flex-col justify-between transition-colors hover:border-[#315E8C]"
                        >
                            <div>
                                <h3 className="text-base font-semibold text-[#171717] pb-2 border-b border-[#E5E5E5]">
                                    {group.category}
                                </h3>
                                <p className="mt-2.5 text-xs text-[#737373] leading-relaxed">
                                    {group.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => {
                                        const Icon = skill.icon
                                        return (
                                            <div
                                                key={skill.name}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-[#FAFAF9] border border-[#E5E5E5] text-xs font-medium text-[#171717]"
                                            >
                                                {Icon && (
                                                    <Icon size={14} className="text-[#315E8C] shrink-0" />
                                                )}
                                                <span>{skill.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
