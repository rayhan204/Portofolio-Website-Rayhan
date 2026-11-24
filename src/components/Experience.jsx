import { Calendar, MapPin } from 'lucide-react'

const experiences = [
    {
        role: 'Frontend Developer Intern',
        company: 'Urbansolv (PT Multimedia Solusi Prima)',
        location: 'Indonesia',
        period: 'September 2026 – Sekarang',
        isCurrent: true,
        summary:
            'Berkontribusi dalam ekosistem aplikasi TraXtion — solusi aplikasi field-sales untuk mendukung operasional bisnis pada platform mobile dan web.',
        points: [
            'Berkontribusi dalam pengembangan TraXtion, sebuah ekosistem aplikasi field-sales.',
            'Mengembangkan fitur-fitur aplikasi mobile menggunakan React Native dan Expo.',
            'Mengerjakan antarmuka aplikasi dan alur fitur berdasarkan desain dari Figma.',
            'Berkolaborasi dengan UI/UX designer dan sistem analis untuk menyempurnakan fungsionalitas dan alur kerja pengguna.',
            'Berpartisipasi dalam pengembangan TraXtion Web untuk monitoring aktivitas field-sales menggunakan Next.js dan TypeScript.',
        ],
        technologies: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'REST API'],
    },
    {
        role: 'Peserta Mobile Development Cohort',
        company: 'Bangkit Academy (Google, GoTo, Traveloka)',
        location: 'Indonesia',
        period: 'Februari 2024 – Juli 2024',
        isCurrent: false,
        summary:
            'Peserta terpilih dalam program Bangkit Academy alur pembelajaran Mobile Development yang diinisiasi oleh Google.',
        points: [
            'Memperdalam kompetensi pengembangan aplikasi Android native menggunakan Kotlin, Android Studio, dan Android Jetpack.',
            'Membangun proyek capstone Skinology dalam tim lintas divisi bersama tim Machine Learning dan Cloud Computing.',
            'Mengintegrasikan model klasifikasi AI ke dalam aplikasi Android menggunakan CameraX, Retrofit, dan endpoint RESTful.',
        ],
        technologies: ['Kotlin', 'Android Studio', 'CameraX', 'Retrofit', 'REST APIs', 'Git'],
    },
    {
        role: 'Peserta Fullstack Web Development Cohort',
        company: 'DBS Foundation Coding Camp x Dicoding',
        location: 'Indonesia',
        period: '2024',
        isCurrent: false,
        summary:
            'Program pelatihan intensif fullstack web development mencakup pengembangan frontend, backend, dan integrasi database.',
        points: [
            'Mempelajari dan menerapkan arsitektur web fullstack menggunakan Node.js, Express, React, dan MySQL.',
            'Berkolaborasi dalam pembangunan ENGVERSE, platform pembelajaran TOEFL ITP interaktif dengan fitur latihan soal dan manajemen pengguna.',
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST API'],
    },
]

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-24 border-b border-[#E5E5E5] bg-[#FAFAF9]">
            <div className="editorial-container">
                {/* Header Bagian */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-10 border-b border-[#E5E5E5]">
                    <div>
                        <span className="section-label">02 / PENGALAMAN</span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                            Pengalaman Kerja & Pelatihan
                        </h2>
                    </div>
                    <p className="text-sm font-mono text-[#737373]">
                        Linimasa Kronologis
                    </p>
                </div>

                {/* Daftar Pengalaman */}
                <div className="mt-12 space-y-12">
                    {experiences.map((exp) => (
                        <div
                            key={exp.role + exp.company}
                            className="bg-white border border-[#E5E5E5] rounded-lg p-6 sm:p-8 transition-colors hover:border-[#315E8C]"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-6 border-b border-[#E5E5E5]">
                                <div>
                                    <div className="flex items-center gap-2.5 flex-wrap">
                                        <h3 className="text-lg sm:text-xl font-semibold text-[#171717]">
                                            {exp.role}
                                        </h3>
                                        {exp.isCurrent && (
                                            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-sm bg-[#EBF2F8] text-[#315E8C] border border-[#D0E1F0]">
                                                Saat ini
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-1 text-base text-[#171717] font-medium flex items-center gap-1.5">
                                        <span>{exp.company}</span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-xs font-mono text-[#737373] shrink-0">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Calendar size={14} className="text-[#A3A3A3]" />
                                        {exp.period}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <MapPin size={14} className="text-[#A3A3A3]" />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>

                            {/* Poin Pekerjaan */}
                            <div className="mt-6">
                                <ul className="space-y-2.5">
                                    {exp.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-3 text-sm text-[#737373] leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-2 shrink-0" />
                                            <span className="text-[#171717]">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Teknologi */}
                            <div className="mt-6 pt-5 border-t border-[#F0F0EF] flex flex-wrap items-center gap-2">
                                <span className="text-xs font-mono text-[#A3A3A3] mr-1">Tech Stack:</span>
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono text-[#737373] bg-[#F5F5F5] border border-[#E5E5E5] px-2.5 py-0.5 rounded-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
