import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import resumePdf from '../assets/Rayhan-resume.pdf'

const menuItems = [
    { name: 'Tentang', href: '#about' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Sertifikat', href: '#certificates' },
    { name: 'Kontak', href: '#contact' },
]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('about')

    const scrollToSection = (href) => {
        setIsMenuOpen(false)
        const element = document.querySelector(href)
        if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // Detect active section
            const sections = menuItems.map(item => item.href.substring(1))
            const scrollPosition = window.scrollY + 120

            for (const sectionId of sections) {
                const el = document.getElementById(sectionId)
                if (el) {
                    const top = el.offsetTop
                    const height = el.offsetHeight
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
                scrolled
                    ? 'bg-[#FAFAF9]/90 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 shadow-xs'
                    : 'bg-[#FAFAF9]/80 backdrop-blur-xs border-b border-transparent py-5'
            }`}
        >
            <div className="editorial-container flex items-center justify-between">
                {/* Brand / Nama */}
                <a
                    href="#top"
                    onClick={(e) => {
                        e.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="group flex items-baseline gap-2 text-[#171717] hover:text-[#315E8C] transition-colors"
                >
                    <span className="font-semibold text-base sm:text-lg tracking-tight">Rayhan</span>
                    <span className="hidden sm:inline-block text-xs font-mono text-[#737373]">
                        / Software Developer
                    </span>
                </a>

                {/* Navigasi Desktop */}
                <nav className="hidden md:flex items-center gap-7">
                    {menuItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1)
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(item.href)
                                }}
                                className={`text-sm transition-colors relative py-1 ${
                                    isActive
                                        ? 'text-[#171717] font-medium'
                                        : 'text-[#737373] hover:text-[#171717]'
                                }`}
                            >
                                {item.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#315E8C]" />
                                )}
                            </a>
                        )
                    })}
                </nav>

                {/* Tombol Resume */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717] hover:text-[#315E8C] border border-[#E5E5E5] hover:border-[#315E8C] bg-white px-3 py-1.5 rounded-md transition-all duration-150"
                    >
                        <span>Resume</span>
                        <ArrowUpRight size={13} className="text-[#737373]" />
                    </a>
                </div>

                {/* Tombol Menu Mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Buka navigasi menu"
                    className="md:hidden p-2 text-[#171717] hover:bg-[#F5F5F5] rounded-md transition-colors"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Menu Dropdown Mobile */}
            {isMenuOpen && (
                <div className="md:hidden border-b border-[#E5E5E5] bg-[#FAFAF9] px-6 py-4 shadow-sm animate-in fade-in duration-150">
                    <nav className="flex flex-col gap-1">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(item.href)
                                }}
                                className="text-sm font-medium text-[#171717] hover:text-[#315E8C] hover:bg-[#F5F5F5] rounded-md px-3 py-2.5 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-2 mt-1 border-t border-[#E5E5E5]">
                            <a
                                href={resumePdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-between w-full text-xs font-medium text-[#171717] bg-[#F5F5F5] px-3 py-2.5 rounded-md hover:bg-[#E5E5E5] transition-colors"
                            >
                                <span>Unduh Resume (PDF)</span>
                                <ArrowUpRight size={14} className="text-[#737373]" />
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header
