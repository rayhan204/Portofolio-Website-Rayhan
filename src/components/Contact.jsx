import 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const KONTAK = [
    {
        icon: Mail,
        label: 'Email',
        nilai: 'rgozali48@gmail.com',
        href: 'mailto:rgozali48@gmail.com',
    },
    {
        icon: Phone,
        label: 'WhatsApp',
        nilai: '+62 821-3823-9907',
        href: 'https://wa.me/6282138239907',
    },
    {
        icon: MapPin,
        label: 'Lokasi',
        nilai: 'Kebumen, Jawa Tengah, Indonesia',
    },
]

// Data sosial media
const SOSMED = [
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com/rayhan204' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/rayhan-ray-022933244' },
    { icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com/rayhan_.z' },
]

const kelas = {
    kartuKontak:
        'flex items-center gap-4 p-4 rounded-2xl bg-dark-2 border border-white/10 hover:border-primary transition',
    ikonSosial:
        'w-12 h-12 rounded-full bg-dark-2 border border-white/10 hover:border-primary hover:text-primary text-gray-400 flex items-center justify-center transition',
    tombolUtama:
        'flex items-center justify-center gap-2 bg-primary text-slate-900 font-semibold rounded-full py-4 hover:scale-[1.02] transition',
    tombolOutline:
        'flex items-center justify-center gap-2 border border-primary text-primary font-semibold rounded-full py-4 hover:bg-primary hover:text-slate-900 transition',
}

const KartuKontak = ({ icon: Icon, label, nilai, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={kelas.kartuKontak}>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="text-primary" size={20} />
        </div>
        <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-white font-semibold">{nilai}</p>
        </div>
    </a>
)

const IkonSosial = ({ icon: Icon, label, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className={kelas.ikonSosial}>
        <Icon size={20} />
    </a>
)

const Contact = () => {
    return (
        <section id="contact" className="relative px-6 md:px-10 py-24 overflow-hidden">
            <div className="pointer-events-none absolute bottom-0 left-1/3 w-125 h-100 bg-primary/10 blur-[120px] rounded-full" />

            <div className="relative max-w-6xl mx-auto">
                {/* Judul */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                        Hubungi Saya
                    </span>

                    <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                        Kontak
                    </h2>

                    <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-relaxed">
                        Terima kasih telah mengunjungi portfolio saya. Jika Anda memiliki
                        peluang kerja, proyek, atau ingin berdiskusi lebih lanjut, silakan
                        hubungi saya melalui Email atau WhatsApp.
                    </p>
                </div>

                <div className="bg-card border border-white/10 rounded-3xl p-8 lg:p-12" data-aos="zoom-in">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Info Kontak */}
                        <div>
                            <h3 className="text-2xl font-bold text-white">Mari Terhubung 👋</h3>

                            <p className="text-gray-400 mt-3">
                                Saya selalu terbuka untuk peluang baru, kolaborasi, maupun
                                diskusi mengenai Web Development dan Android Development.
                            </p>

                            <div className="mt-8 space-y-5">
                                {KONTAK.map((item) => (
                                    <KartuKontak key={item.label} {...item} />
                                ))}
                            </div>

                            <div className="flex gap-4 mt-8">
                                {SOSMED.map((item) => (
                                    <IkonSosial key={item.label} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Ajakan Bertindak */}
                        <div className="flex flex-col justify-center rounded-2xl bg-dark-2 border border-white/10 p-8">
                            <h3 className="text-2xl font-bold text-white">
                                Tertarik untuk bekerja sama?
                            </h3>

                            <p className="mt-4 text-gray-400 leading-relaxed">
                                Klik salah satu tombol di bawah ini untuk langsung
                                menghubungi saya.
                            </p>

                            <div className="mt-8 flex flex-col gap-4">
                                <a href={KONTAK[0].href} className={kelas.tombolUtama}>
                                    <Send size={18} />
                                    Kirim Email
                                </a>

                                <a href={KONTAK[1].href} target="_blank" rel="noopener noreferrer" className={kelas.tombolOutline}>
                                    <MessageCircle size={18} />
                                    Chat WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact