import { FaArrowUpRightFromSquare, FaGithub, FaFolderOpen } from 'react-icons/fa6'

export default function Project() {
    const projects = [
        {
            title: 'Teacher Dashboard',
            category: 'Web Application',
            description:
                'A responsive teacher dashboard built with HTML, CSS, and JavaScript, featuring dynamic data visualization, interactive components, and user-friendly navigation. (demo-> User: Test Password: test)',
            tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
            demoUrl: 'https://teacher-dashboard-green.vercel.app/',
            githubUrl: 'https://github.com/emad683/teacher-dashboard',
            accent: 'from-amber-500/20 to-orange-500/10',
        },
        {
            title: 'Yobookia',
            category: 'Web Application',
            description: 'Yobookia – Your Online Bookstore in Egypt Yobookia is a modern Egyptian e-commerce platform offering academic textbooks, study guides, and bestselling novels. It delivers an effortless shopping experience with fast, affordable shipping across all 27 governorates—with dedicated support and special rates for Upper Egypt and Qena.',
            tags: ['React', ' Tailwind CSS', 'React Router', 'Supabase'],
            demoUrl: 'https://yobookia.vercel.app/',
            githubUrl: 'https://github.com/emad683/Yobookia',
            accent: 'from-emerald-900/20 to-emerald-700/10',
        }
    ]

    return (
        <section id="project" className="w-full py-16 md:py-24 flex justify-center">
            {/* حاوية القسم بعرض 85% كباقي الأقسام */}
            <div className="w-[85%] select-none">

                {/* عنوان السكشن */}
                <div className="flex items-center gap-3 mb-10">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-stone-200/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-300/70 dark:border-stone-700/70">
                        Featured Projects
                    </span>
                    <div className="h-[1px] flex-1 bg-stone-300/60 dark:bg-stone-700/60" />
                </div>

                {/* شبكة كروت المشاريع الورقية بنفس خلفية الموقع */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className="group relative bg-paper border border-stone-400/60 dark:border-stone-700/70 drop-shadow-[0_8px_18px_rgba(0,0,0,0.12)] hover:drop-shadow-[0_16px_30px_rgba(0,0,0,0.22)] dark:drop-shadow-[0_8px_18px_rgba(0,0,0,0.5)] dark:hover:drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
                            style={{
                                clipPath:
                                    'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)'
                            }}
                        >
                            {/* ثنية زاوية الورقة (Folded Ear) مطابقة للشكل الورقي */}
                            <div
                                className="absolute top-0 right-0 w-[18px] h-[18px] bg-stone-300 dark:bg-stone-700 shadow-xs pointer-events-none z-20 transition-colors"
                                style={{
                                    clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
                                }}
                            />

                            {/* طبقة شبه شفافة فوق خلفية الورقة لضمان وضوح المحتوى والنصوص */}
                            <div className="p-6 sm:p-7 flex flex-col h-full bg-white/45 dark:bg-black/45 backdrop-blur-[1px] transition-colors duration-300">

                                {/* رأس الكارت: أيقونة المجلد مع التصنيف ورقم المشروع */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2.5 text-stone-700 dark:text-stone-300">
                                        <FaFolderOpen className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                        <span className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                                            {project.category}
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-stone-600 dark:text-stone-300">
                                        0{idx + 1}
                                    </span>
                                </div>

                                {/* عنوان المشروع */}
                                <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 mb-3 tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* وصف المشروع */}
                                <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                {/* التقنيات المستخدمة كـ Tags ورقية */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-semibold rounded-md bg-stone-200/80 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-300/70 dark:border-stone-700/70 shadow-2xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* أزرار الروابط (معاينة والكود) */}
                                <div className="flex items-center justify-between pt-4 border-t border-stone-300/60 dark:border-stone-700/60 mt-auto">
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.demoUrl}
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                                            title="Live Demo"
                                        >
                                            <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                                            <span>Live Demo</span>
                                        </a>

                                        <a
                                            href={project.githubUrl}
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                                            title="GitHub Repository"
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            <span>Code</span>
                                        </a>
                                    </div>

                                    {/* خط ورقي تزييني */}
                                    <span className="w-8 h-[2px] bg-stone-300 dark:bg-stone-700 rounded-full" />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
