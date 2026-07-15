import 'react'
import { GraduationCap, CalendarDays } from 'lucide-react'

const educationList = [
    {
        degree: 'S1 - Teknik Informatika',
        institution: 'Universitas Muhammadiyah Purwokerto, GPA: 3.73/4.00',
        period: 'Agustus 2022 - Mei 2026',
        description:
            'Mempelajari pengembangan perangkat lunak, algoritma, struktur data, basis data, dan rekayasa perangkat lunak. Berfokus pada pengembangan aplikasi Full Stack menggunakan React.js, Node.js, dan MySQL, serta pengembangan aplikasi Android menggunakan Kotlin dan Android Studio. Selama perkuliahan juga mengerjakan berbagai proyek pengembangan aplikasi web dan mobile sebagai bagian dari pembelajaran maupun pengembangan portofolio.',
    },
    {
        degree: 'Sekolah Menengah Atas',
        institution: 'SMA Negeri 1 Ayah',
        period: '2019 - 2022',
        description:
            'Menempuh pendidikan pada jurusan MIPA yang membangun dasar kemampuan berpikir logis, analitis, dan pemecahan masalah. Mulai mengenal dunia teknologi dan tertarik mempelajari pemrograman sebagai bekal untuk melanjutkan pendidikan di bidang Informatika.',
    },
    {
        degree: 'Sekolah Menengah Pertama',
        institution: 'SMP Negeri 1 Buayan',
        period: '2016 - 2019',
        description:
            'Menyelesaikan pendidikan dasar dengan mengembangkan kemampuan akademik serta mulai mengenal penggunaan komputer dan teknologi sebagai sarana belajar.',
    },
]

const Education = () => {
    return (
        <section id="education" className="relative px-6 md:px-10 py-24 overflow-hidden">
            <div className="pointer-events-none absolute -top-20 right-0 w-125 h-100 bg-primary/10 blur-[120px] rounded-full" />

            <div className="relative max-w-5xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                        Learning Path
                    </span>
                    <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                        Pendidikan
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6.75 md:left-1/2 top-2 bottom-2 w-px bg-white/10 md:-translate-x-1/2" />

                    <div className="flex flex-col gap-10 md:gap-14">
                        {educationList.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={item.degree}
                                    data-aos={isLeft ? 'fade-right' : 'fade-left'}
                                    className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                                        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    {/* Marker */}
                                    <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-dark-2 border-2 border-primary flex items-center justify-center">
                                        <GraduationCap className="text-primary" size={22} />
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`bg-card border border-white/5 rounded-2xl p-6 flex-1 md:w-[calc(50%-3.5rem)] ${
                                            isLeft ? 'md:mr-auto' : 'md:ml-auto'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 text-primary text-xs font-semibold mb-2">
                                            <CalendarDays size={14} />
                                            {item.period}
                                        </div>
                                        <h3 className="font-display text-lg font-bold text-white">
                                            {item.degree}
                                        </h3>
                                        <p className="text-sm text-gray-400 font-semibold mt-1">
                                            {item.institution}
                                        </p>
                                        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education