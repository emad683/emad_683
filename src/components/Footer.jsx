import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa6'

export default function Footer() {
  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://whatsapp.com/send?phone=+201515698631',
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: 'hover:text-emerald-500 hover:border-emerald-500/50',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/emad-ahmed-hassan',
      icon: <FaLinkedin className="w-5 h-5" />,
      color: 'hover:text-blue-500 hover:border-blue-500/50',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/emad683',
      icon: <FaGithub className="w-5 h-5" />,
      color: 'hover:text-stone-950 dark:hover:text-white hover:border-stone-400',
    },
  ]

  return (
    <footer className="w-full border-t border-stone-300/60 dark:border-stone-800/60 bg-white/40 dark:bg-black/40 backdrop-blur-xs py-10 transition-colors duration-300">
      <div className="w-[85%] max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 select-none">
        
        {/* Brand Name & Copyright */}
        <div className="text-center sm:text-start">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
            <span className="text-base font-black tracking-tight text-stone-900 dark:text-stone-100">
              emad ahmed<span className="text-amber-600">.</span>
            </span>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
            Designed &amp; crafted with paper aesthetic.
          </p>
          <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">
            © {new Date().getFullYear()} Emad Ahmed. All rights reserved.
          </p>
        </div>

        {/* Social Icons (WhatsApp, LinkedIn, GitHub) as Paper Stamps */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              title={social.name}
              aria-label={social.name}
              className={`group relative flex items-center justify-center w-11 h-12 bg-[#fdfbf7] dark:bg-[#1f1d1a] border border-stone-300/80 dark:border-stone-700/80 text-stone-700 dark:text-stone-300 rounded-xs shadow-xs hover:shadow-md hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-pointer ${social.color}`}
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 0 100%)',
              }}
            >
              {/* Folded Ear Stamp Corner */}
              <div
                className="absolute top-0 right-0 w-[9px] h-[9px] bg-stone-300 dark:bg-stone-700 shadow-xs pointer-events-none transition-colors"
                style={{
                  clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                }}
              />
              
              <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
