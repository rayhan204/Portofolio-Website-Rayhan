import { useState } from 'react'
import { Mail, MessageCircle, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    const [copied, setCopied] = useState(false)
    const email = 'rgozali48@gmail.com'

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="contact" className="py-20 md:py-24 border-b border-[#E5E5E5] bg-[#FFFFFF]">
            <div className="editorial-container">
                {/* Header Bagian */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-10 border-b border-[#E5E5E5]">
                    <div>
                        <span className="section-label">07 / KONTAK</span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                            Hubungi Saya
                        </h2>
                    </div>
                    <p className="text-sm font-mono text-[#737373]">
                        Komunikasi & Peluang Kolaborasi
                    </p>
                </div>

                {/* Kontainer Kontak Utama */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Narasi Kiri */}
                    <div className="lg:col-span-6 space-y-4">
                        <p className="text-base text-[#171717] leading-relaxed">
                            Saya terbuka untuk peluang kerja full-time, posisi magang rekayasa perangkat lunak, maupun kolaborasi proyek web dan aplikasi mobile.
                        </p>
                        <p className="text-sm text-[#737373] leading-relaxed">
                            Silakan hubungi saya melalui email, pesan WhatsApp, atau terhubung melalui LinkedIn. Saya merespons pertanyaan profesional dan peluang rekayasa perangkat lunak dengan cepat.
                        </p>

                        <div className="pt-4 flex items-center gap-2 text-xs font-mono text-[#737373]">
                            <MapPin size={14} className="text-[#A3A3A3]" />
                            <span>Kebumen, Jawa Tengah, Indonesia (Terbuka untuk Remote / Hybrid)</span>
                        </div>
                    </div>

                    {/* Kartu Aksi Kanan */}
                    <div className="lg:col-span-6 space-y-3">
                        {/* Kartu Email */}
                        <div className="border border-[#E5E5E5] bg-[#FAFAF9] rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <span className="text-[11px] font-mono uppercase text-[#A3A3A3] tracking-wider block">
                                    Alamat Email
                                </span>
                                <a
                                    href={`mailto:${email}`}
                                    className="text-base font-medium text-[#171717] hover:text-[#315E8C] transition-colors mt-0.5 inline-block"
                                >
                                    {email}
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleCopyEmail}
                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717] hover:bg-white border border-[#E5E5E5] px-3 py-1.5 rounded-md transition-colors"
                                >
                                    {copied ? (
                                        <>
                                            <Check size={13} className="text-emerald-600" />
                                            <span>Tersalin</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={13} className="text-[#737373]" />
                                            <span>Salin</span>
                                        </>
                                    )}
                                </button>

                                <a
                                    href={`mailto:${email}`}
                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-[#171717] hover:bg-[#315E8C] px-3 py-1.5 rounded-md transition-colors"
                                >
                                    <Mail size={13} />
                                    <span>Kirim Email</span>
                                </a>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="border border-[#E5E5E5] bg-[#FAFAF9] rounded-lg p-5 flex items-center justify-between">
                            <div>
                                <span className="text-[11px] font-mono uppercase text-[#A3A3A3] tracking-wider block">
                                    Pesan WhatsApp
                                </span>
                                <span className="text-base font-medium text-[#171717]">
                                    +62 821-3823-9907
                                </span>
                            </div>
                            <a
                                href="https://wa.me/6282138239907"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717] hover:text-[#315E8C] border border-[#E5E5E5] hover:border-[#315E8C] bg-white px-3 py-1.5 rounded-md transition-colors"
                            >
                                <MessageCircle size={13} />
                                <span>Kirim Pesan</span>
                                <ArrowUpRight size={13} className="text-[#A3A3A3]" />
                            </a>
                        </div>

                        {/* Tautan Media Sosial */}
                        <div className="pt-2 grid grid-cols-2 gap-3">
                            <a
                                href="https://github.com/rayhan204"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#E5E5E5] bg-white hover:border-[#171717] p-3.5 rounded-lg flex items-center justify-between transition-colors group"
                            >
                                <span className="inline-flex items-center gap-2 text-xs font-medium text-[#171717]">
                                    <SiGithub size={15} />
                                    <span>github.com/rayhan204</span>
                                </span>
                                <ArrowUpRight size={13} className="text-[#A3A3A3] group-hover:text-[#171717]" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/rayhan-ray-022933244/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#E5E5E5] bg-white hover:border-[#315E8C] p-3.5 rounded-lg flex items-center justify-between transition-colors group"
                            >
                                <span className="inline-flex items-center gap-2 text-xs font-medium text-[#171717]">
                                    <FaLinkedin size={15} className="text-[#315E8C]" />
                                    <span>Profil LinkedIn</span>
                                </span>
                                <ArrowUpRight size={13} className="text-[#A3A3A3] group-hover:text-[#315E8C]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
