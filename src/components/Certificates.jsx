import { useState, useEffect } from 'react'
import { ExternalLink, FileText, X, CheckCircle2 } from 'lucide-react'

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
        year: '2026',
        thumbnail: bnspThumb,
        pdf: bnspPdf,
        credentialUrl: 'https://drive.google.com/file/d/10yqtpUIcGzT06ohRKuOK8PGuTJlZwMfO/view?usp=sharing',
    },
    {
        title: 'Studi Independen Bersertifikat Angkatan 7',
        issuer: 'Kampus Merdeka x Dicoding Indonesia',
        year: '2024',
        thumbnail: studiIndependenThumb,
        pdf: studiIndependenPdf,
        credentialUrl: 'https://drive.google.com/file/d/1qwW4woc5eUK39ANf5Kpjrr5OqSqXjw3d/view?usp=sharing',
    },
    {
        title: 'Belajar Pengembangan Web Intermediate',
        issuer: 'Dicoding Indonesia',
        year: '2025',
        thumbnail: webThumb,
        pdf: webPdf,
        credentialUrl: 'https://www.dicoding.com/certificates/EYX4G4OK6ZDL',
    },
    {
        title: 'Bangkit Academy 2024 - Mobile Development',
        issuer: 'Google, GoTo & Traveloka',
        year: '2024',
        thumbnail: bangkitThumb,
        pdf: bangkitPdf,
        credentialUrl: 'https://drive.google.com/file/d/1IaYF920iDc3i26uHhbFJ3rX3Gh5sapLL/view?usp=sharing',
    },
    {
        title: 'Menjadi Android Developer Expert',
        issuer: 'Dicoding Indonesia',
        year: '2025',
        thumbnail: androidThumb,
        pdf: androidPdf,
        credentialUrl: 'https://www.dicoding.com/certificates/JLX19K0L6P72',
    },
    {
        title: 'Belajar Visualisasi Data',
        issuer: 'Dicoding Indonesia',
        year: '2023',
        thumbnail: visualisasiDataThumb,
        pdf: visualisasiDataPdf,
        credentialUrl: 'https://www.dicoding.com/certificates/53XEYJ119PRN',
    },
]

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null)

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
        <section id="certificates" className="py-20 md:py-24 border-b border-[#E5E5E5] bg-[#FAFAF9]">
            <div className="editorial-container">
                {/* Header Bagian */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-10 border-b border-[#E5E5E5]">
                    <div>
                        <span className="section-label">06 / SERTIFIKASI</span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                            Sertifikasi & Kredensial
                        </h2>
                    </div>
                    <p className="text-sm font-mono text-[#737373]">
                        Kompetensi Terverifikasi
                    </p>
                </div>

                {/* Daftar Rapi & Terorganisir */}
                <div className="mt-12 bg-white border border-[#E5E5E5] rounded-lg divide-y divide-[#E5E5E5] overflow-hidden">
                    {certificateList.map((cert) => (
                        <div
                            key={cert.title}
                            className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAFAF9] transition-colors"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="text-sm sm:text-base font-semibold text-[#171717]">
                                        {cert.title}
                                    </h3>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-xs">
                                        <CheckCircle2 size={11} />
                                        Terverifikasi
                                    </span>
                                </div>
                                <div className="mt-1 flex items-center gap-3 text-xs text-[#737373] font-mono">
                                    <span>{cert.issuer}</span>
                                    <span>•</span>
                                    <span>{cert.year}</span>
                                </div>
                            </div>

                            {/* Tombol Aksi */}
                            <div className="flex items-center gap-2.5 shrink-0">
                                <button
                                    type="button"
                                    onClick={() => setSelectedCert(cert)}
                                    className="inline-flex items-center gap-1 text-xs font-medium text-[#171717] hover:text-[#315E8C] border border-[#E5E5E5] hover:border-[#315E8C] bg-white px-3 py-1.5 rounded-md transition-colors"
                                >
                                    <span>Pratinjau</span>
                                </button>

                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-medium text-[#171717] hover:text-[#315E8C] border border-[#E5E5E5] hover:border-[#315E8C] bg-white px-3 py-1.5 rounded-md transition-colors"
                                >
                                    <span>Kredensial</span>
                                    <ExternalLink size={12} className="text-[#A3A3A3]" />
                                </a>

                                <a
                                    href={cert.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-medium text-[#737373] hover:text-[#171717] border border-[#E5E5E5] hover:border-[#171717] bg-white px-3 py-1.5 rounded-md transition-colors"
                                >
                                    <FileText size={12} />
                                    <span>PDF</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Pratinjau Bersih */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl bg-white border border-[#E5E5E5] rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header Modal */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5] bg-[#FAFAF9]">
                            <div>
                                <h4 className="text-sm font-semibold text-[#171717]">
                                    {selectedCert.title}
                                </h4>
                                <p className="text-xs font-mono text-[#737373]">
                                    {selectedCert.issuer} ({selectedCert.year})
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedCert(null)}
                                className="p-1.5 text-[#737373] hover:text-[#171717] hover:bg-[#E5E5E5] rounded-md transition-colors"
                                aria-label="Tutup modal"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Konten Gambar Modal */}
                        <div className="p-4 bg-[#F5F5F5] overflow-auto flex items-center justify-center">
                            <img
                                src={selectedCert.thumbnail}
                                alt={selectedCert.title}
                                className="max-h-[60vh] w-auto object-contain rounded-sm border border-[#E5E5E5] bg-white shadow-xs"
                            />
                        </div>

                        {/* Aksi Modal */}
                        <div className="flex items-center justify-end gap-3 px-6 py-3.5 border-t border-[#E5E5E5] bg-white">
                            <a
                                href={selectedCert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-[#171717] hover:bg-[#315E8C] px-3.5 py-1.5 rounded-md transition-colors"
                            >
                                <span>Buka Kredensial</span>
                                <ExternalLink size={12} />
                            </a>
                            <a
                                href={selectedCert.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717] hover:bg-[#F5F5F5] border border-[#E5E5E5] px-3.5 py-1.5 rounded-md transition-colors"
                            >
                                <FileText size={12} />
                                <span>Buka File PDF</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Certificates
