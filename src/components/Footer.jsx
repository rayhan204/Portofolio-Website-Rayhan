import { ArrowUp } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className="py-12 bg-[#FAFAF9] text-[#737373]">
            <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold text-[#171717]">
                        Rayhan
                    </p>
                    <p className="text-xs font-mono text-[#737373] mt-0.5">
                        Software Developer • Teknik Informatika
                    </p>
                </div>

                <div className="flex items-center gap-6 text-xs font-mono">
                    <span>© {currentYear} Rayhan. Seluruh hak cipta dilindungi.</span>
                    <button
                        onClick={scrollToTop}
                        aria-label="Kembali ke atas"
                        className="inline-flex items-center gap-1 text-[#171717] hover:text-[#315E8C] transition-colors"
                    >
                        <span>Atas</span>
                        <ArrowUp size={13} />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
