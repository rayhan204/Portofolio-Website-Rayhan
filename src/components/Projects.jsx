import 'react'
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import SkinologyImg from '../assets/certificate-thumbnails/Skinology.png'
import EngverseImg from '../assets/certificate-thumbnails/Engverse.png'
import VisualisasiKerawananKriminalitasImg from '../assets/certificate-thumbnails/Visualisasi_Kriminalitas.png'
import PortfolioImg from '../assets/certificate-thumbnails/portofolio-preview.png'
import GoldVestImg from '../assets/certificate-thumbnails/GoldVest.png'

const projectList = [
    {
        title: 'GoldVest',
        description:
            'GoldVest adalah aplikasi simulasi investasi emas digital yang saya kembangkan sebagai proyek Fullstack Developer untuk mempelajari pembangunan aplikasi fintech end-to-end. Saya membangun backend menggunakan Express.js, PostgreSQL, dan Prisma ORM dengan arsitektur berlapis (Layered Architecture), serta mengembangkan frontend menggunakan React.js, Vite, dan Tailwind CSS. Aplikasi ini dilengkapi fitur autentikasi JWT, dashboard, wallet, portfolio emas, transaksi beli dan jual emas, manajemen harga emas oleh admin, serta dokumentasi REST API menggunakan Swagger.',
        tags: [
            'React.js',
            'Vite',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'Prisma ORM',
            'JWT',
            'Swagger',
        ],
        image: GoldVestImg,
        githubUrl: 'https://github.com/rayhan204/GoldVest',
        liveUrl: 'https://gold-vest.vercel.app/login',
    },
    {
        title: 'Skinology',
        description:
            'Skinology adalah proyek Capstone Bangkit Academy yang dikembangkan melalui kolaborasi lintas fungsi antara tim Mobile Development, Machine Learning, dan Cloud Computing. Saya berperan sebagai Mobile Developer dengan membangun aplikasi Android menggunakan Kotlin, mengintegrasikan CameraX, Retrofit, dan REST API untuk menghadirkan fitur deteksi jenis kulit berbasis AI secara real-time.',
        tags: [
            'Kotlin',
            'Android Studio',
            'TensorFlow',
            'Retrofit',
            'CameraX',
            'Google Cloud',
        ],
        image: SkinologyImg,
        githubUrl: 'https://github.com/rayhan204/Skinology',
        liveUrl: 'https://drive.google.com/file/d/13TwGuherweRgEFac7vW9T8dPmkTgZJqw/view',
    },
    {
        title: 'Website Portofolio',
        description:
            'Website portofolio pribadi yang dikembangkan menggunakan React.js, Vite, dan Tailwind CSS untuk menampilkan profil, pengalaman, keterampilan, sertifikat, serta proyek yang pernah saya kerjakan. Dilengkapi desain responsif, animasi menggunakan AOS, integrasi LinkedIn dan GitHub, serta fitur unduh resume untuk memberikan pengalaman pengguna yang modern dan profesional.',
        tags: [
            'React',
            'Vite',
            'Tailwind CSS',
            'JavaScript',
            'AOS',
            'React Icons',
        ],
        image: PortfolioImg,
        githubUrl: 'https://github.com/rayhan204/Portofolio-Website-Rayhan',
        liveUrl: 'https://portofolio-website-rayhan.vercel.app/',
    },
    {
        title: 'ENGVERSE',
        description:
            'ENGVERSE merupakan proyek Capstone Coding Camp DBS Foundation yang dikembangkan oleh tim lintas peran menggunakan workflow kolaboratif berbasis Git dan GitHub. Saya berperan sebagai Fullstack Developer dengan mengembangkan antarmuka pengguna (frontend), membangun layanan backend dan REST API, mengintegrasikan database, serta memastikan integrasi antar fitur berjalan dengan baik untuk menghadirkan platform pembelajaran TOEFL ITP yang interaktif dan adaptif.',
        tags: [
            'React',
            'Express.js',
            'Node.js',
            'MySQL',
            'JavaScript',
            'Fullstack',
        ],
        image: EngverseImg,
        githubUrl: 'https://github.com/rayhan204/engverse-app',
        liveUrl: '#',
    },
    {
        title: 'Visualisasi Kerawanan Kriminalitas Pencurian',
        description:
            'Aplikasi web untuk memvisualisasikan tingkat kerawanan kriminalitas pencurian di Kabupaten Purbalingga menggunakan metode Kernel Density Estimation (KDE). Dibangun dengan Python, Streamlit, Folium, dan GeoPandas untuk menghasilkan peta interaktif serta analisis hotspot kriminalitas.',
        tags: [
            'Python',
            'Streamlit',
            'Folium',
            'GeoPandas',
            'QGIS',
            'KDE',
        ],
        image: VisualisasiKerawananKriminalitasImg,
        githubUrl:
            'https://github.com/rayhan204/Project_Skripsi_Visualisasi_Kerawanan_Kriminalitas_Pencurian_2025',
        liveUrl: 'https://projectskripsivisualisasikerawanankriminalitaspencurian2025-6q.streamlit.app/',
    },
]

const Projects = () => {
    return (
        <section id="projects" className="relative px-6 md:px-10 py-24 overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-1/4 w-125 h-100 bg-primary/10 blur-[120px] rounded-full" />

            <div className="relative max-w-6xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                        My Work
                    </span>
                    <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                        Projek Saya
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectList.map((project, index) => (
                        <div
                            key={project.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className="group bg-card border border-white/5 hover:border-primary/60 rounded-2xl overflow-hidden flex flex-col transition-colors duration-300"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-52 overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-linear-to-br from-primary/20 via-dark-2 to-dark-2 flex items-center justify-center">
                                        <span className="font-display text-3xl font-extrabold text-white/10">
                                            {project.title
                                                .split(" ")
                                                .map((w) => w[0])
                                                .join("")
                                                .slice(0, 3)}
                                        </span>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-white hover:text-primary"
                                    >
                                        <SiGithub size={18} />
                                    </a>

                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-white hover:text-primary"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="font-display text-lg font-bold text-white">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 mt-2 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects