import { useState } from 'react'
import { ExternalLink, ArrowUpRight, FolderGit2, Smartphone } from 'lucide-react'
import { SiGithub } from 'react-icons/si'

import WorkSphereImg from '../assets/certificate-thumbnails/WorkSphere.png'
import GoldVestImg from '../assets/certificate-thumbnails/GoldVest.png'
import VisualisasiKerawananKriminalitasImg from '../assets/certificate-thumbnails/Visualisasi_Kriminalitas.png'
import SkinologyImg from '../assets/certificate-thumbnails/Skinology.png'
import EngverseImg from '../assets/certificate-thumbnails/Engverse.png'

const primaryProjects = [
    {
        id: 'traxtion',
        title: 'Ekosistem TraXtion',
        category: 'Ekosistem Field-Sales Enterprise',
        role: 'Frontend Developer Intern (Mobile & Web)',
        period: 'September 2026 – Sekarang',
        description:
            'Ekosistem aplikasi field-sales skala produksi yang dikembangkan di Urbansolv. Mencakup aplikasi mobile React Native untuk agen lapangan serta aplikasi web Next.js untuk pemantauan aktivitas penjualan dan administrasi.',
        tags: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'REST API'],
        image: null,
        isEnterprise: true,
        links: [
            {
                label: 'Info Urbansolv',
                url: 'https://urbansolv.com',
                isExternal: true,
            },
        ],
    },
    {
        id: 'worksphere',
        title: 'WorkSphere HRIS',
        category: 'Human Resource Information System',
        role: 'Fullstack Developer',
        period: '2024',
        description:
            'Aplikasi sistem informasi SDM end-to-end dengan arsitektur berlapis. Dilengkapi autentikasi JWT, Role-Based Access Control (Admin, HR, Karyawan), manajemen departemen, pencatatan absensi, pengajuan cuti, serta dokumentasi REST API Swagger.',
        tags: ['React.js', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Zod', 'Swagger'],
        image: WorkSphereImg,
        githubUrl: 'https://github.com/rayhan204/WorkSphere-HRIS',
        liveUrl: 'https://work-sphere-hris.vercel.app',
    },
    {
        id: 'goldvest',
        title: 'GoldVest',
        category: 'Simulasi Investasi Emas Digital',
        role: 'Fullstack Developer',
        period: '2024',
        description:
            'Aplikasi simulasi investasi emas digital dengan kalkulasi portofolio real-time, transaksi beli dan jual emas, kontrol harga emas oleh admin, dan autentikasi aman dengan arsitektur berlapis.',
        tags: ['React.js', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Swagger', 'Tailwind CSS'],
        image: GoldVestImg,
        githubUrl: 'https://github.com/rayhan204/GoldVest',
        liveUrl: 'https://gold-vest.vercel.app',
    },
    {
        id: 'crime-hotspot',
        title: 'Crime Hotspot Mapping System',
        category: 'Aplikasi Web Analisis Spasial',
        role: 'Proyek Skripsi S1',
        period: '2024 – 2025',
        description:
            'Aplikasi web geospasial untuk memvisualisasikan tingkat kerawanan kriminalitas pencurian di Kabupaten Purbalingga menggunakan metode Kernel Density Estimation (KDE) dan analisis hotspot spasial interaktif.',
        tags: ['Python', 'Streamlit', 'Folium', 'GeoPandas', 'QGIS', 'Analisis Spasial KDE'],
        image: VisualisasiKerawananKriminalitasImg,
        githubUrl: 'https://github.com/rayhan204/Project_Skripsi_Visualisasi_Kerawanan_Kriminalitas_Pencurian_2025',
        liveUrl: 'https://projectskripsivisualisasikerawanankriminalitaspencurian2025-6q.streamlit.app/',
    },
]

const secondaryProjects = [
    {
        title: 'Skinology',
        category: 'Aplikasi Mobile Berbasis AI',
        role: 'Mobile Developer (Capstone Bangkit)',
        description:
            'Aplikasi Android untuk deteksi jenis kulit berbasis kecerdasan buatan, mengintegrasikan CameraX dan model TensorFlow melalui endpoint RESTful Retrofit.',
        tags: ['Kotlin', 'Android Studio', 'CameraX', 'Retrofit', 'TensorFlow', 'GCP'],
        image: SkinologyImg,
        githubUrl: 'https://github.com/rayhan204/Skinology',
        liveUrl: 'https://drive.google.com/file/d/13TwGuherweRgEFac7vW9T8dPmkTgZJqw/view',
    },
    {
        title: 'ENGVERSE',
        category: 'Platform Pembelajaran Interaktif',
        role: 'Fullstack Developer (Coding Camp DBS)',
        description:
            'Platform persiapan tes TOEFL ITP interaktif dengan latihan terstruktur, bank soal, dan pemantauan skor.',
        tags: ['React.js', 'Express.js', 'Node.js', 'MySQL', 'REST API'],
        image: EngverseImg,
        githubUrl: 'https://github.com/rayhan204/engverse-app',
        liveUrl: null,
    },
]

const Projects = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <section id="projects" className="py-20 md:py-24 border-b border-[#E5E5E5] bg-[#FFFFFF]">
            <div className="editorial-container">
                {/* Header Bagian */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-10 border-b border-[#E5E5E5]">
                    <div>
                        <span className="section-label">03 / PROYEK</span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                            Proyek Rekayasa Unggulan
                        </h2>
                    </div>
                    <p className="text-sm font-mono text-[#737373]">
                        Aplikasi Produksi & Portofolio Teknis
                    </p>
                </div>

                {/* Grid Proyek Utama */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {primaryProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col bg-[#FAFAF9] border border-[#E5E5E5] rounded-lg overflow-hidden transition-all duration-200 hover:border-[#315E8C] hover:bg-white"
                        >
                            {/* Visual Proyek */}
                            {project.image ? (
                                <div className="aspect-16/9 w-full overflow-hidden border-b border-[#E5E5E5] bg-[#F5F5F5]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-16/9 w-full border-b border-[#E5E5E5] bg-[#F5F5F5] p-6 flex flex-col justify-between">
                                    <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-white border border-[#E5E5E5]">
                                            <Smartphone size={13} className="text-[#315E8C]" />
                                            Platform Mobile & Web
                                        </span>
                                        <span>Produksi</span>
                                    </div>
                                    <div className="text-center py-4">
                                        <h4 className="text-xl font-semibold text-[#171717]">TraXtion</h4>
                                        <p className="text-xs text-[#737373] mt-1">Ekosistem Aplikasi Field-Sales</p>
                                    </div>
                                    <div className="text-xs font-mono text-[#A3A3A3] text-right">
                                        PT Multimedia Solusi Prima
                                    </div>
                                </div>
                            )}

                            {/* Konten Kartu */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-baseline justify-between gap-2">
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#315E8C] font-medium">
                                        {project.category}
                                    </span>
                                    <span className="text-xs font-mono text-[#A3A3A3]">
                                        {project.period}
                                    </span>
                                </div>

                                <h3 className="mt-2 text-lg sm:text-xl font-semibold text-[#171717]">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-sm text-[#737373] leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tag Teknologi */}
                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] font-mono text-[#737373] bg-white border border-[#E5E5E5] px-2 py-0.5 rounded-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Tautan */}
                                <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center gap-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717] hover:text-[#315E8C] transition-colors"
                                        >
                                            <SiGithub size={14} />
                                            <span>Kode Sumber</span>
                                            <ArrowUpRight size={13} className="text-[#A3A3A3]" />
                                        </a>
                                    )}

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717] hover:text-[#315E8C] transition-colors"
                                        >
                                            <ExternalLink size={14} />
                                            <span>Aplikasi Live</span>
                                            <ArrowUpRight size={13} className="text-[#A3A3A3]" />
                                        </a>
                                    )}

                                    {project.isEnterprise && (
                                        <span className="text-xs font-mono text-[#737373]">
                                            Produk Internal Enterprise (Proprietary)
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tombol Proyek Tambahan */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#171717] hover:text-[#315E8C] border border-[#E5E5E5] hover:border-[#315E8C] bg-[#FAFAF9] px-4 py-2 rounded-md transition-colors"
                    >
                        <FolderGit2 size={14} />
                        <span>{showMore ? 'Sembunyikan Proyek Tambahan' : 'Tampilkan Proyek Tambahan (Skinology, ENGVERSE)'}</span>
                    </button>
                </div>

                {/* Daftar Proyek Tambahan */}
                {showMore && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-[#E5E5E5] animate-in fade-in duration-200">
                        {secondaryProjects.map((project) => (
                            <div
                                key={project.title}
                                className="bg-[#FAFAF9] border border-[#E5E5E5] rounded-lg p-5 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
                                        <span className="text-[#315E8C]">{project.category}</span>
                                        <span>{project.role}</span>
                                    </div>
                                    <h4 className="mt-2 text-base font-semibold text-[#171717]">
                                        {project.title}
                                    </h4>
                                    <p className="mt-2 text-xs text-[#737373] leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-1">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-mono text-[#737373] bg-white border border-[#E5E5E5] px-1.5 py-0.5 rounded-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-[#E5E5E5] flex items-center gap-4 text-xs font-medium">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-[#171717] hover:text-[#315E8C]"
                                        >
                                            <SiGithub size={13} />
                                            <span>Repositori</span>
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-[#171717] hover:text-[#315E8C]"
                                        >
                                            <ExternalLink size={13} />
                                            <span>Pratinjau Proyek</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects
