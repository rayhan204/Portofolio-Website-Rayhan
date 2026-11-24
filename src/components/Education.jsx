import { Calendar, Award } from 'lucide-react'

const educationHistory = [
    {
        institution: 'Universitas Muhammadiyah Purwokerto',
        degree: 'S1 - Teknik Informatika (Sarjana Komputer)',
        period: '2022 – 2026',
        gpa: '3.73 / 4.00',
        highlights:
            'Berfokus pada rekayasa perangkat lunak, pengembangan aplikasi web, dan arsitektur mobile. Mempelajari struktur data, algoritma, sistem basis data, serta implementasi sistem fullstack menggunakan React, Node.js, dan Android.',
        isPrimary: true,
    },
    {
        institution: 'SMA Negeri 1 Ayah',
        degree: 'MIPA (Matematika dan Ilmu Pengetahuan Alam)',
        period: '2019 – 2022',
        gpa: null,
        highlights:
            'Membangun fondasi yang kuat dalam pemikiran logis, analitis, dan pemecahan masalah, disertai eksplorasi mandiri awal di bidang pemrograman komputer.',
        isPrimary: false,
    },
]

const Education = () => {
    return (
        <section id="education" className="py-20 md:py-24 border-b border-[#E5E5E5] bg-[#FFFFFF]">
            <div className="editorial-container">
                {/* Header Bagian */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-10 border-b border-[#E5E5E5]">
                    <div>
                        <span className="section-label">05 / PENDIDIKAN</span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                            Riwayat Pendidikan
                        </h2>
                    </div>
                    <p className="text-sm font-mono text-[#737373]">
                        Kualifikasi Akademik Formal
                    </p>
                </div>

                {/* Tata Letak Bersih & Rapi */}
                <div className="mt-12 space-y-8">
                    {educationHistory.map((item) => (
                        <div
                            key={item.institution}
                            className={`border rounded-lg p-6 sm:p-8 transition-colors ${
                                item.isPrimary
                                    ? 'bg-[#FAFAF9] border-[#E5E5E5] hover:border-[#315E8C]'
                                    : 'bg-white border-[#E5E5E5] text-[#737373]'
                            }`}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-[#E5E5E5]">
                                <div>
                                    <div className="flex items-center gap-2.5 flex-wrap">
                                        <h3 className="text-lg sm:text-xl font-semibold text-[#171717]">
                                            {item.institution}
                                        </h3>
                                        {item.gpa && (
                                            <span className="inline-flex items-center gap-1 text-xs font-mono font-medium px-2 py-0.5 rounded-sm bg-white border border-[#E5E5E5] text-[#171717]">
                                                <Award size={13} className="text-[#315E8C]" />
                                                IPK: {item.gpa}
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-1 text-sm sm:text-base font-medium text-[#171717]">
                                        {item.degree}
                                    </p>
                                </div>

                                <div className="flex items-center gap-1.5 text-xs font-mono text-[#737373] shrink-0">
                                    <Calendar size={13} className="text-[#A3A3A3]" />
                                    <span>{item.period}</span>
                                </div>
                            </div>

                            <p className="mt-4 text-sm text-[#737373] leading-relaxed max-w-3xl">
                                {item.highlights}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
