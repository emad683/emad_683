import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaUnity,
  FaVideo,
  FaPenNib,
  FaCube,
} from 'react-icons/fa6'
import { SiTailwindcss, SiUnrealengine, SiCplusplus } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'

export default function Skill() {
  const skills = [
    {
      name: 'JavaScript',
      tilt: '-rotate-2',
      color: 'text-[#f7df1e]',
      icon: <FaJs className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'Python',
      tilt: 'rotate-1',
      color: 'text-[#3776ab]',
      icon: <FaPython className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'Java',
      tilt: '-rotate-1',
      color: 'text-[#e76f00]',
      icon: <FaJava className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'C++',
      tilt: 'rotate-2',
      color: 'text-[#00599c]',
      icon: <SiCplusplus className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'C#',
      tilt: '-rotate-2',
      color: 'text-[#9b4993]',
      icon: <TbBrandCSharp className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'HTML5',
      tilt: 'rotate-1',
      color: 'text-[#e34f26]',
      icon: <FaHtml5 className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'CSS3',
      tilt: '-rotate-1',
      color: 'text-[#1572b6]',
      icon: <FaCss3Alt className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'Tailwind CSS',
      tilt: 'rotate-2',
      color: 'text-[#06b6d4]',
      icon: <SiTailwindcss className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'Unity',
      tilt: '-rotate-2',
      color: 'text-stone-800 dark:text-stone-100',
      icon: <FaUnity className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'Unreal Engine',
      tilt: 'rotate-1',
      color: 'text-stone-900 dark:text-stone-100',
      icon: <SiUnrealengine className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: '3D Modeling',
      tilt: '-rotate-1',
      color: 'text-[#ea7600]',
      icon: <FaCube className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'Video Editing',
      tilt: 'rotate-2',
      color: 'text-[#e11d48]',
      icon: <FaVideo className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
    {
      name: 'Graphic Design',
      tilt: '-rotate-2',
      color: 'text-[#6366f1]',
      icon: <FaPenNib className="w-6 h-6 sm:w-7 sm:h-7" />,
    },
  ]

  return (
    <section id="skill" className="w-full py-16 md:py-24 flex justify-center">
      {/* حاوية القسم بعرض 85% */}
      <div className="w-[85%] select-none">
        
        {/* عنوان السكشن */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-stone-200/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-300/70 dark:border-stone-700/70">
            Skills &amp; Toolkit
          </span>
          <div className="h-[1px] flex-1 bg-stone-300/60 dark:bg-stone-700/60" />
        </div>

        {/* كروت المهارات الورقية بحجم أصغر ومسافات متقاربة ومحاذاة طبيعية */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              title={skill.name}
              className={`group relative flex items-center justify-center w-14 h-16 sm:w-16 sm:h-20 cursor-pointer transition-all duration-300 hover:scale-115 hover:z-20 hover:rotate-0 drop-shadow-[0_2px_5px_rgba(0,0,0,0.12)] hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)] dark:hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] ${skill.tilt}`}
            >
              {/* خلفية الورقة المقصوصة الزاوية */}
              <div
                className="absolute inset-0 bg-[#fdfbf7] dark:bg-[#1f1d1a] border border-stone-300/80 dark:border-stone-700/80 transition-colors duration-300"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)'
                }}
              />

              {/* ثنية زاوية الورقة (Folded Ear) متناسبة مع الحجم الأصغر */}
              <div
                className="absolute top-0 right-0 w-[8px] h-[8px] bg-stone-300 dark:bg-stone-700 shadow-xs pointer-events-none transition-colors"
                style={{
                  clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
                }}
              />

              {/* أسطر ورقية خفيفة */}
              <div className="absolute inset-x-1.5 top-2 h-[1px] bg-stone-300/40 dark:bg-stone-700/40 pointer-events-none" />
              <div className="absolute inset-x-1.5 bottom-2 h-[1px] bg-stone-300/40 dark:bg-stone-700/40 pointer-events-none" />

              {/* الأيقونة في المنتصف */}
              <div className={`relative z-10 transition-transform duration-300 group-hover:scale-115 ${skill.color}`}>
                {skill.icon}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
