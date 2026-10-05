import { useState, useEffect, useRef } from 'react'

const navItems = ['home', 'about', 'skill', 'project', 'edu', 'content']

const rotations = {
  home: '-1.5deg',
  about: '1.2deg',
  skill: '-1.8deg',
  project: '1.5deg',
  edu: '-1deg',
  content: '1.2deg',
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })
  const [isCrumpling, setIsCrumpling] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, top: 0, width: 0, height: 0, ready: false })

  const navContainerRef = useRef(null)
  const itemRefs = useRef({})

  const updateIndicator = (id) => {
    const el = itemRefs.current[id]
    const container = navContainerRef.current
    if (el && container) {
      const elRect = el.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      setIndicatorStyle({
        left: elRect.left - containerRect.left,
        top: elRect.top - containerRect.top,
        width: elRect.width,
        height: elRect.height,
        ready: true,
      })
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => updateIndicator(activeSection), 30)
    const handleResize = () => updateIndicator(activeSection)
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [activeSection])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const handleToggle = () => {
    if (isCrumpling) return
    setIsCrumpling(true)

    // تبديل المود والورقة متكورة (منتصف الأنيميشن)
    setTimeout(() => {
      setDarkMode(prev => !prev)
    }, 450)

    // الورقة رجعت مفرودة
    setTimeout(() => {
      setIsCrumpling(false)
    }, 900)
  }

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-white/70 dark:bg-black/70 border-b border-gray-300/50 dark:border-gray-800/50 backdrop-blur-md text-gray-800 dark:text-gray-100 transition-colors duration-300 shadow-xs">
      {/* الاسم على الشمال وفي آخره طائرة ورقية مع مسارها */}
      <div className="flex items-center select-none">
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-stone-800 dark:text-stone-100">
          emad ahmed
        </span>

        {/* مسار الطائرة الورقية + الطائرة في نهاية الاسم */}
        <svg
          className="w-28 sm:w-32 h-11 -ml-0.5 overflow-visible text-stone-700 dark:text-stone-300"
          viewBox="0 0 120 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* مسار الطيران المتقطع الخارج من آخر الاسم */}
          <path
            d="M 2 30 C 18 32, 34 10, 23 6 C 12 2, 12 28, 38 27 C 58 26, 74 22, 90 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3.5 3.5"
            strokeLinecap="round"
            className="opacity-65"
          />

          {/* الطائرة الورقية في نهاية المسار */}
          <g transform="translate(86, 1)">
            {/* الجناح العلوي/الأيسر */}
            <path
              d="M 2 10 L 26 3 L 10 13 Z"
              className="fill-[#fdfbf7] dark:fill-stone-800"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            {/* طية المنتصف الداخلية (الظل) */}
            <path
              d="M 10 13 L 26 3 L 11 20 Z"
              className="fill-stone-300 dark:fill-stone-600"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            {/* مثلث الذيل السفلي */}
            <path
              d="M 10 13 L 11 20 L 15 16 Z"
              className="fill-stone-400 dark:fill-stone-700"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            {/* الجناح السفلي/الأيمن */}
            <path
              d="M 15 16 L 26 3 L 21 21 Z"
              className="fill-[#fdfbf7] dark:fill-stone-800"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* روابط التنقل في منتصف الـ Navbar مع مؤشر الورقة المكرمشة المتحرك */}
      <ul
        ref={navContainerRef}
        className="relative hidden md:flex items-center gap-6 lg:gap-10 text-base lg:text-lg font-semibold capitalize text-stone-700 dark:text-stone-300 py-1 px-1 select-none"
      >
        {/* الورقة المكرمشة التي تنزلق بسلاسة تحت السكشن المختار */}
        <div
          className="absolute top-0 left-0 pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.34,1.4,0.64,1)] z-0"
          style={{
            transform: `translate3d(${indicatorStyle.left}px, ${indicatorStyle.top}px, 0) rotate(${rotations[activeSection] || '0deg'})`,
            width: `${indicatorStyle.width}px`,
            height: `${indicatorStyle.height}px`,
            opacity: indicatorStyle.ready ? 1 : 0,
          }}
        >
          {/* جسم الورقة المكرمشة مع حواف غير مستوية */}
          <div
            className="w-full h-full bg-[#fcfaf5] dark:bg-[#25221e] border border-stone-300/90 dark:border-stone-700/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] transition-colors duration-300 relative overflow-hidden"
            style={{
              clipPath:
                'polygon(2% 5%, 18% 1%, 38% 4%, 62% 0%, 82% 3%, 98% 1%, 99% 32%, 97% 68%, 100% 94%, 82% 99%, 58% 96%, 32% 100%, 14% 97%, 1% 94%, 3% 62%, 0% 32%)'
            }}
          >
            {/* خطوط وتجاعيد الورقة المكرمشة */}
            <svg
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full text-stone-400/40 dark:text-stone-500/35 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinejoin="round"
            >
              <path d="M 4 8 L 26 19 L 46 14 L 74 27 L 96 17" />
              <path d="M 26 19 L 34 33 L 56 23" />
              <path d="M 70 7 L 54 17 L 66 34" />
              <path d="M 82 23 L 90 32" />
            </svg>

            {/* تدرج ظلال يعطي عمقاً ثلاثي الأبعاد للتكرمش */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 45% 40%, rgba(255,255,255,0.4) 0%, transparent 65%, rgba(0,0,0,0.12) 100%)'
              }}
            />
          </div>
        </div>

        {/* عناصر القائمة */}
        {navItems.map((item) => {
          const isActive = activeSection === item
          return (
            <li key={item}>
              <a
                ref={(el) => (itemRefs.current[item] = el)}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection(item)
                  const target = document.getElementById(item)
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className={`relative z-10 block px-3.5 py-1.5 transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-stone-950 dark:text-white font-bold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {item}
              </a>
            </li>
          )
        })}
      </ul>

      {/* زر التبديل على شكل ورقة بمظهر واقعي مع أنيميشن التكرمش */}
      <button
        onClick={handleToggle}
        disabled={isCrumpling}
        aria-label="Toggle theme"
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className={`group relative flex items-center justify-center w-10 h-12 cursor-pointer transition-transform duration-200 focus:outline-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)] ${
          isCrumpling ? 'animate-crumple' : 'hover:-rotate-3 hover:scale-105 active:scale-95'
        }`}
      >
        {/* الورقة نفسها - كل الطبقات جوه عشان تتكرمش مع بعض */}
        <div className="paper-sheet absolute inset-0 bg-[#fdfbf7] dark:bg-[#1f1d1a] transition-colors duration-300">
          {/* ثنية زاوية الورقة (Folded Ear) */}
          <div
            className="absolute top-0 right-0 w-[10px] h-[10px] bg-stone-300 dark:bg-stone-700 pointer-events-none"
            style={{
              clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
            }}
          />

          {/* خطوط خفيفة تحاكي أسطر الورقة */}
          <div className="absolute inset-x-2 top-3 h-[1px] bg-stone-300/50 dark:bg-stone-700/50 pointer-events-none" />
          <div className="absolute inset-x-2 bottom-3 h-[1px] bg-stone-300/50 dark:bg-stone-700/50 pointer-events-none" />

          {/* خطوط الكرمشة + ظل التكور (بتظهر بس وقت الأنيميشن) */}
          <div className="paper-creases absolute inset-0 pointer-events-none">
            <svg
              viewBox="0 0 40 48"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full text-stone-500 dark:text-stone-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeLinejoin="round"
            >
              <path d="M2 3 L12 15 L20 22 L19 30 L28 44" />
              <path d="M38 6 L27 16 L20 22 L13 27 L3 34" />
              <path d="M20 1 L18 12 L23 19 L20 22" />
              <path d="M39 30 L29 27 L22 25 L16 33 L10 46" />
              <path d="M1 18 L10 21 L14 26" />
              <path d="M31 47 L27 36 L30 28" />
              <path d="M12 15 L23 19 L29 27 L19 30 L13 27 Z" />
            </svg>
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 42% 38%, rgba(255,255,255,0.25) 0%, transparent 35%, rgba(0,0,0,0.35) 80%)'
              }}
            />
          </div>
        </div>

        {/* الأيقونة (الشمس / القمر) مع تفاعل الانكماش أثناء التكرمش */}
        <div
          className={`relative z-10 text-stone-700 dark:text-amber-400 transition-all duration-200 ${
            isCrumpling ? 'scale-0 rotate-180 opacity-0' : 'scale-100 rotate-0 opacity-100 group-hover:scale-110'
          }`}
        >
          {darkMode ? (
            /* أيقونة الشمس */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            /* أيقونة القمر */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </div>
      </button>
    </nav>
  )
}
