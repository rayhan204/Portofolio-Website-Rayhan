import { Code2, Layers, Terminal } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="py-20 md:py-24 border-b border-[#E5E5E5] bg-[#FFFFFF]">
            <div className="editorial-container">
                {/* Header Bagian */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-10 border-b border-[#E5E5E5]">
                    <div>
                        <span className="section-label">01 / TENTANG SAYA</span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                            Latar Belakang & Pendekatan Rekayasa
                        </h2>
                    </div>
                    <p className="text-sm font-mono text-[#737373]">
                        Lulusan Teknik Informatika • Pengembang Perangkat Lunak
                    </p>
                </div>

                {/* Grid Konten Utama */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Kolom Narasi Kiri */}
                    <div className="lg:col-span-7 space-y-5 text-base text-[#171717] leading-relaxed">
                        <p>
                            Saya memegang gelar Sarjana Teknik Informatika dari Universitas Muhammadiyah Purwokerto dengan IPK 3.73 / 4.00. Sepanjang masa perkuliahan dan perjalanan karir, fokus utama saya terpusat pada rekayasa perangkat lunak, khususnya pengembangan web fullstack serta aplikasi mobile lintas platform dan native.
                        </p>
                        <p className="text-[#737373]">
                            Saat ini, saya bekerja sebagai Frontend Developer Intern di <strong className="text-[#171717] font-medium">Urbansolv (PT Multimedia Solusi Prima)</strong> terhitung sejak September 2026 hingga sekarang. Dalam peran ini, saya berkontribusi langsung pada pengembangan <strong className="text-[#171717] font-medium">TraXtion</strong>, sebuah ekosistem aplikasi field-sales skala enterprise yang mencakup aplikasi mobile berbasis React Native dan Expo, serta dashboard web manajemen menggunakan Next.js dan TypeScript.
                        </p>
                        <p className="text-[#737373]">
                            Pendekatan saya dalam membangun perangkat lunak didasarkan pada prinsip pragmatis dan ketelitian teknis: mengutamakan struktur kode yang bersih, mudah dikelola, dan antarmuka responsif yang memecahkan alur kerja operasional secara nyata. Saya terbiasa menerjemahkan spesifikasi desain Figma ke dalam kode produksi yang rapi, membangun integrasi REST API yang teruji, serta berkolaborasi erat dengan UI/UX designer dan sistem analis.
                        </p>
                    </div>

                    {/* Kolom Sorotan Kanan */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="p-5 rounded-lg border border-[#E5E5E5] bg-[#FAFAF9]">
                            <div className="flex items-center gap-3 mb-2">
                                <Code2 size={18} className="text-[#315E8C]" />
                                <h3 className="text-sm font-semibold text-[#171717]">Pengembangan Web</h3>
                            </div>
                            <p className="text-xs text-[#737373] leading-relaxed">
                                Membangun aplikasi web yang terstruktur dan scalable menggunakan React, Next.js, dan TypeScript, terintegrasi dengan REST API, PostgreSQL, dan Node.js.
                            </p>
                        </div>

                        <div className="p-5 rounded-lg border border-[#E5E5E5] bg-[#FAFAF9]">
                            <div className="flex items-center gap-3 mb-2">
                                <Layers size={18} className="text-[#315E8C]" />
                                <h3 className="text-sm font-semibold text-[#171717]">Aplikasi Mobile</h3>
                            </div>
                            <p className="text-xs text-[#737373] leading-relaxed">
                                Mengembangkan aplikasi mobile lintas platform menggunakan React Native dan Expo, serta memiliki dasar native Android yang mendalam dengan Kotlin.
                            </p>
                        </div>

                        <div className="p-5 rounded-lg border border-[#E5E5E5] bg-[#FAFAF9]">
                            <div className="flex items-center gap-3 mb-2">
                                <Terminal size={18} className="text-[#315E8C]" />
                                <h3 className="text-sm font-semibold text-[#171717]">Standar Rekayasa</h3>
                            </div>
                            <p className="text-xs text-[#737373] leading-relaxed">
                                Menitikberatkan pada arsitektur berlapis, validasi skema data dengan Zod, dokumentasi REST API dengan Swagger, dan penerapan version control yang disiplin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
