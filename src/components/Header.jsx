import 'react'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showHeader, setShowHeader] = useState(true)
    const [scrolled, setScrolled] = useState(false)

    const menuItems = [
        { name: 'Pendidikan', href: '#education' },
        { name: 'Sertifikat', href: '#certificates' },
        { name: 'Tentang Saya', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Proyek', href: '#projects' },
    ]

    const scrollToSection = (href) => {
        setIsMenuOpen(false)

        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Background berubah saat scroll
            setScrolled(currentScrollY > 40)

            // Navbar selalu muncul di paling atas
            if (currentScrollY < 40) {
                setShowHeader(true)
            } else if (currentScrollY < lastScrollY) {
                // Scroll ke atas
                setShowHeader(true)
            } else {
                // Scroll ke bawah
                setShowHeader(false)
            }

            lastScrollY = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`
                fixed
                top-0
                left-0
                w-full
                z-50
                transition-all
                duration-300
                ${showHeader ? 'translate-y-0' : '-translate-y-full'}
                ${
                    scrolled
                        ? 'bg-dark/70 backdrop-blur-xl border-b border-white/10 shadow-lg'
                        : 'bg-transparent'
                }
            `}
        >
            <div className="px-6 md:px-10 py-5">
                <div className="flex items-center justify-between max-w-7xl mx-auto">

                    {/* Logo */}
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('#about')
                        }}
                        className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-white uppercase"
                    >
                        Portfolio<span className="text-primary">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(item.href)
                                }}
                                className="relative text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('#contact')
                            }}
                            className="bg-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/30 text-slate-900 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300"
                        >
                            Kontak Saya
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white p-2"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="lg:hidden mt-5 bg-dark-2/90 backdrop-blur-xl rounded-2xl border border-white/10 p-4 flex flex-col gap-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(item.href)
                                }}
                                className="text-gray-300 hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-all"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('#contact')
                            }}
                            className="bg-primary text-slate-900 rounded-full py-3 text-center font-semibold mt-2"
                        >
                            Kontak Saya
                        </a>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header