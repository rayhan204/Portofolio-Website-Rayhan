import 'react'
import { useState, useEffect } from 'react'
import {
    ExternalLink,
    Calendar,
    Building2,
    CheckCircle2,
    FileText,
    X,
    Eye,
} from 'lucide-react'

import webPdf from '../assets/certificates/web-intermediate.pdf'
import bangkitPdf from '../assets/certificates/Bangkit-Certificate.pdf'
import androidPdf from '../assets/certificates/Android-Expert.pdf'
import studiIndependenPdf from '../assets/certificates/Studi-Independen.pdf'
import bnspPdf from '../assets/certificates/BNSP-sertifikat.pdf'
import visualisasiDataPdf from '../assets/certificates/Visualisasi-Data.pdf'

import webThumb from '../assets/certificate-thumbnails/Web-Intermediate.png'
import bangkitThumb from '../assets/certificate-thumbnails/Bangkit-Certificate.png'
import androidThumb from '../assets/certificate-thumbnails/Android-Expert.png'
import studiIndependenThumb from '../assets/certificate-thumbnails/Studi-Independen.png'
import bnspThumb from '../assets/certificate-thumbnails/BNSP-sertifikat.png'
import visualisasiDataThumb from '../assets/certificate-thumbnails/Visualisasi-Data.png'

const certificateList = [
    {
        title: 'Sertifikat Kompetensi Programmer',
        issuer: 'BNSP (Badan Nasional Sertifikasi Profesi)',
        date: '2026',
        thumbnail: bnspThumb,
        pdf: bnspPdf,
        credentialUrl: 'https://drive.google.com/file/d/10yqtpUIcGzT06ohRKuOK8PGuTJlZwMfO/view?usp=sharing',
    },
    {
        title: 'Studi Independen Bersertifikat Angkatan 7',
        issuer: 'Kampus Merdeka x Dicoding Indonesia',
        date: '2024',
        thumbnail: studiIndependenThumb,
        pdf: studiIndependenPdf,
        credentialUrl: 'https://drive.google.com/file/d/1qwW4woc5eUK39ANf5Kpjrr5OqSqXjw3d/view?usp=sharing',
    },
    {
        title: 'Belajar Pengembangan Web Intermediate',
        issuer: 'Dicoding Indonesia',
        date: '2025',
        thumbnail: webThumb,
        pdf: webPdf,
        credentialUrl: 'https://www.dicoding.com/certificates/EYX4G4OK6ZDL',
    },
    {
        title: 'Bangkit Academy 2024 - Mobile Development',
        issuer: 'Google, GoTo & Traveloka',
        date: '2024',
        thumbnail: bangkitThumb,
        pdf: bangkitPdf,
        credentialUrl: 'https://drive.google.com/file/d/1IaYF920iDc3i26uHhbFJ3rX3Gh5sapLL/view?usp=sharing',
    },
    {
        title: 'Menjadi Android Developer Expert',
        issuer: 'Dicoding Indonesia',
        date: '2025',
        thumbnail: androidThumb,
        pdf: androidPdf,
        credentialUrl: 'https://www.dicoding.com/certificates/JLX19K0L6P72',
    },
    {
        title: 'Belajar Visualisasi Data',
        issuer: 'Dicoding Indonesia',
        date: '2023',
        thumbnail: visualisasiDataThumb,
        pdf: visualisasiDataPdf,
        credentialUrl: 'https://www.dicoding.com/certificates/53XEYJ119PRN',
    },
]

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null)

    // Lock body scroll while modal is open + allow closing with Escape
    useEffect(() => {
        if (!selectedCert) return

        document.body.style.overflow = 'hidden'

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedCert(null)
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [selectedCert])

    return (
        <section id="certificates" className="relative px-6 md:px-10 py-24 overflow-hidden">
            <div className="pointer-events-none absolute -bottom-24 left-0 w-120 h-120 bg-primary/10 blur-[140px] rounded-full" />

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                        Achievements
                    </span>

                    <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                        Sertifikat
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Beberapa sertifikat yang saya peroleh sebagai bentuk pengembangan
                        kemampuan di bidang Web Development, Android Development, dan
                        Software Engineering.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {certificateList.map((cert, index) => (
                        <div
                            key={cert.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-card hover:border-primary hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                        >
                            {/* Thumbnail -> opens modal */}
                            <button
                                type="button"
                                onClick={() => setSelectedCert(cert)}
                                className="relative overflow-hidden w-full block text-left"
                            >
                                <img
                                    src={cert.thumbnail}
                                    alt={cert.title}
                                    className="w-full h-60 object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2">
                                    <span className="bg-white text-slate-900 px-5 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
                                        <Eye size={18} />
                                        Lihat Sertifikat
                                    </span>
                                </div>
                            </button>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-white font-bold text-lg leading-snug">
                                    {cert.title}
                                </h3>

                                {/* LinkedIn-style info badge */}
                                <div className="mt-4 rounded-xl border border-white/10 bg-dark-2 divide-y divide-white/5 overflow-hidden">
                                    <div className="flex items-center gap-2 text-gray-300 text-sm px-4 py-2.5">
                                        <FileText size={15} className="text-primary" />
                                        PDF
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300 text-sm px-4 py-2.5">
                                        <Building2 size={15} className="text-primary" />
                                        {cert.issuer}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300 text-sm px-4 py-2.5">
                                        <Calendar size={15} className="text-primary" />
                                        {cert.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold px-4 py-2.5">
                                        <CheckCircle2 size={15} />
                                        Credential Verified
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-3">
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary text-slate-900 py-3 font-semibold hover:scale-[1.02] transition"
                                    >
                                        Credential
                                        <ExternalLink size={16} />
                                    </a>

                                    <a
                                        href={cert.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xl border border-white/10 px-4 flex items-center justify-center text-white hover:border-primary hover:text-primary transition"
                                    >
                                        PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center px-4 py-10 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-3xl max-h-full bg-card border border-white/10 rounded-2xl overflow-hidden flex flex-col"
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setSelectedCert(null)}
                            aria-label="Tutup"
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark/80 hover:bg-primary hover:text-slate-900 text-white flex items-center justify-center transition-colors duration-300"
                        >
                            <X size={20} />
                        </button>

                        {/* Large image */}
                        <div className="bg-dark-2 flex items-center justify-center max-h-[65vh] overflow-auto">
                            <img
                                src={selectedCert.thumbnail}
                                alt={selectedCert.title}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Info + actions */}
                        <div className="p-6">
                            <h3 className="text-white font-bold text-xl leading-snug">
                                {selectedCert.title}
                            </h3>
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-400 text-sm">
                                <span className="flex items-center gap-1.5">
                                    <Building2 size={15} />
                                    {selectedCert.issuer}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={15} />
                                    {selectedCert.date}
                                </span>
                                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                                    <CheckCircle2 size={15} />
                                    Credential Verified
                                </span>
                            </div>

                            <div className="mt-6 flex gap-3">
                                <a
                                    href={selectedCert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary text-slate-900 py-3 font-semibold hover:scale-[1.02] transition"
                                >
                                    View Credential
                                    <ExternalLink size={16} />
                                </a>

                                <a
                                    href={selectedCert.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 text-white hover:border-primary hover:text-primary py-3 font-semibold transition"
                                >
                                    Open PDF
                                    <FileText size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Certificates