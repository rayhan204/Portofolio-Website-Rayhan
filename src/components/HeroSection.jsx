import { Download, ArrowUpRight } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import heroImg from '../assets/Profile_Website.png'
import resumePdf from '../assets/Rayhan-resume.pdf'

const HeroSection = () => {
    return (
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#E5E5E5]">
            <div className="editorial-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Kolom teks kiri: 7 kolom pada desktop */}
                    <div className="lg:col-span-7">
                        {/* Label status */}
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#F5F5F5] border border-[#E5E5E5] mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                            <span className="text-xs font-mono font-medium tracking-wider text-[#737373] uppercase">
                                Software Developer
                            </span>
                        </div>

                        {/* Judul utama */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#171717] leading-[1.15]">
                            Halo, saya Rayhan.
                        </h1>

                        {/* Pengantar utama */}
                        <p className="mt-4 text-lg sm:text-xl font-normal text-[#171717] leading-relaxed">
                            Lulusan Teknik Informatika yang berfokus pada pengembangan aplikasi web dan pengalaman mobile.
                        </p>

                        {/* Deskripsi pendukung */}
                        <p className="mt-3 text-base text-[#737373] leading-relaxed max-w-xl">
                            Saya bekerja dengan React, Next.js, Node.js, dan React Native untuk membangun aplikasi yang fungsional, responsif, dan berorientasi pada kebutuhan pengguna. Saat ini sedang memperdalam pengalaman industri dalam pengembangan aplikasi mobile dan web di Urbansolv.
                        </p>

                        {/* Aksi tombol */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href={resumePdf}
                                download="Rayhan-Resume.pdf"
                                className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#315E8C] text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors duration-150"
                            >
                                <Download size={15} />
                                <span>Unduh Resume</span>
                            </a>

                            <a
                                href="https://github.com/rayhan204"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-[#E5E5E5] hover:border-[#171717] hover:bg-[#F5F5F5] text-[#171717] text-sm font-medium px-4 py-2.5 rounded-md transition-colors duration-150"
                            >
                                <SiGithub size={15} />
                                <span>GitHub</span>
                                <ArrowUpRight size={13} className="text-[#737373]" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/rayhan-ray-022933244/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-[#E5E5E5] hover:border-[#315E8C] hover:text-[#315E8C] text-[#171717] text-sm font-medium px-4 py-2.5 rounded-md transition-colors duration-150"
                            >
                                <FaLinkedin size={15} />
                                <span>LinkedIn</span>
                                <ArrowUpRight size={13} className="text-[#737373]" />
                            </a>
                        </div>

                        {/* Metadata ringkas */}
                        <div className="mt-10 pt-6 border-t border-[#E5E5E5] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#737373]">
                            <div>
                                <span className="block text-[#A3A3A3] uppercase text-[10px] tracking-wider mb-0.5">Lokasi</span>
                                <span className="text-[#171717]">Indonesia</span>
                            </div>
                            <div>
                                <span className="block text-[#A3A3A3] uppercase text-[10px] tracking-wider mb-0.5">Peran Saat Ini</span>
                                <span className="text-[#171717]">Frontend Intern</span>
                            </div>
                            <div>
                                <span className="block text-[#A3A3A3] uppercase text-[10px] tracking-wider mb-0.5">Spesialisasi</span>
                                <span className="text-[#171717]">Web & Mobile</span>
                            </div>
                        </div>
                    </div>

                    {/* Kolom kanan: Foto profil */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-sm">
                            <div className="bg-white border border-[#E5E5E5] rounded-lg p-2.5 shadow-xs">
                                <div className="aspect-4/5 w-full overflow-hidden rounded-md bg-[#F5F5F5]">
                                    <img
                                        src={heroImg}
                                        alt="Rayhan"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="mt-2.5 px-1 pb-1 flex items-center justify-between text-xs text-[#737373]">
                                    <span className="font-mono text-[11px]">Rayhan</span>
                                    <span className="font-mono text-[11px] text-[#A3A3A3]">Software Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
