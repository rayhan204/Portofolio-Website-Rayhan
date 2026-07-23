import 'react'
import { Download } from 'lucide-react'
import heroImg from '../assets/Profile_Website.png'
import resumePdf from '../assets/Rayhan-resume.pdf'
import { FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section
            id="about"
            className="relative px-6 md:px-10 pt-10 md:pt-16 pb-24 overflow-hidden"
        >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-primary/10 blur-[120px] rounded-full" />

            <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Text column */}
                <div data-aos="fade-right">
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        Hi, saya <span className="text-primary">Rayhan</span>{' '}
                        <span className="animate-wave">👋</span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
                        Fresh Graduate Teknik Informatika dengan minat di bidang Fullstack Developer dan
                        Mobile Development. Berpengalaman membangun website modern menggunakan
                        React.js, dan Tailwind CSS, PostgreSQL, SwaggerUI serta mengembangkan aplikasi Android
                        menggunakan Kotlin dan Android Studio. Saya selalu antusias mempelajari
                        teknologi baru dan menciptakan aplikasi yang responsif, fungsional, dan
                        mudah digunakan.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/rayhan-ray-022933244/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primary text-slate-900 font-semibold px-7 py-3.5 rounded-full hover:scale-105 hover:bg-primary-dark transition-all duration-300"
                        >
                            <FaLinkedin className="text-xl" />
                            LinkedIn
                        </a>
                        <a
                            href={resumePdf}
                            download
                            className="flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-slate-900 font-semibold px-7 py-3.5 rounded-full transition-colors duration-300"
                        >
                            <Download size={18} />
                            Download resume
                        </a>
                    </div>
                </div>

                {/* Image column */}
                <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
                    <div className="relative w-95 overflow-hidden rounded-tr-[100px] rounded-bl-[100px]">
                        <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-3xl" />
                        <img
                            src={heroImg}
                            alt="Rayhan"
                            className="relative w-full h-full object-contain rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection