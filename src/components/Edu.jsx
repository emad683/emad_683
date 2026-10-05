import { useState } from 'react'
import {
  FaFolder,
  FaFolderOpen,
  FaAward,
  FaCalendarDays,
  FaBuildingColumns,
  FaChevronDown,
  FaXmark,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6'
import python from '../assets/Py.png'
import Cpp from '../assets/Cpp.jpg'

// مصفوفة الشهادات (Array of Certificate Objects)
// يمكنك استبدال روابط الصور بصور شهاداتك الحقيقية من مجلد assets
const certificatesData = [
  {
    id: 1,
    title: 'Python Programming Fundamentals',
    field: 'Programming & CS', // المجال
    issuer: 'itida / tiec / Creative / Dandara Alebdaa',
    date: '2025',
    image: python,
    description:
      'This certificate validates the completion of a comprehensive Python programming course, covering fundamental concepts, data structures, and practical applications in software development.',
  },
  {
    id: 2,
    title: 'C++ Programming Fundamentals',
    field: 'Programming & CS',
    issuer: 'almentor',
    date: '2025',
    image: Cpp,
    description:
      'This certificate validates the completion of a comprehensive C++ programming course, covering fundamental concepts, data structures, and practical applications in software development.',
  }
]

export default function Edu() {
  // تجميع الشهادات بحسب المجال تلقائياً (Group by field)
  const fields = Array.from(new Set(certificatesData.map((cert) => cert.field)))

  // الحالة للتحكم في القسم المفتوح (مقفل بالبداية افتراضياً = null)
  const [openField, setOpenField] = useState(null)

  // معاينة الشهادة بالحجم الكامل في نافذة منبثقة (Modal)
  const [selectedCert, setSelectedCert] = useState(null)

  const toggleField = (field) => {
    setOpenField((prev) => (prev === field ? null : field))
  }

  return (
    <section id="edu" className="w-full py-16 md:py-24 flex justify-center">
      {/* حاوية القسم بعرض 85% كباقي الأقسام */}
      <div className="w-[85%] select-none">
        
        {/* عنوان السكشن */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-stone-200/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-300/70 dark:border-stone-700/70">
            Education &amp; Certificates
          </span>
          <div className="h-[1px] flex-1 bg-stone-300/60 dark:bg-stone-700/60" />
        </div>

        {/* قائمة المجالات (Accordion) */}
        <div className="space-y-5 max-w-5xl mx-auto">
          {fields.map((field) => {
            const isOpen = openField === field
            const fieldCerts = certificatesData.filter((c) => c.field === field)

            return (
              <div
                key={field}
                className="bg-paper border border-stone-400/60 dark:border-stone-700/70 drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-all duration-300 relative overflow-hidden"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)'
                }}
              >
                {/* ثنية زاوية الورقة (Folded Ear) في أعلى يمين كل قسم */}
                <div
                  className="absolute top-0 right-0 w-[14px] h-[14px] bg-stone-300 dark:bg-stone-700 shadow-xs pointer-events-none z-20 transition-colors"
                  style={{
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
                  }}
                />

                {/* زر رأس المجال (قابل للضغط لفتح وإغلاق القسم) */}
                <button
                  onClick={() => toggleField(field)}
                  className={`w-full p-5 sm:p-6 flex items-center justify-between text-start cursor-pointer transition-colors duration-200 ${
                    isOpen
                      ? 'bg-stone-100/70 dark:bg-stone-900/70 border-b border-stone-300/60 dark:border-stone-800/60'
                      : 'bg-white/45 dark:bg-black/45 hover:bg-stone-50/60 dark:hover:bg-stone-900/50'
                  } backdrop-blur-[1px]`}
                >
                  {/* أيقونة المجلد واسم المجال */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {isOpen ? (
                        <FaFolderOpen className="w-5 h-5" />
                      ) : (
                        <FaFolder className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                        {field}
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-0.5">
                        {fieldCerts.length} {fieldCerts.length > 1 ? 'Certificates' : 'Certificate'}
                      </p>
                    </div>
                  </div>

                  {/* سهم التوسيع مع تدوير سلس */}
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-semibold text-stone-500 dark:text-stone-400">
                      {isOpen ? 'Collapse' : 'View Certificates'}
                    </span>
                    <div
                      className={`p-1.5 rounded-full text-stone-600 dark:text-stone-300 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-amber-600 dark:text-amber-400' : 'rotate-0'
                      }`}
                    >
                      <FaChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* محتوى الشهادات داخل المجال عند الفتح */}
                {isOpen && (
                  <div className="p-5 sm:p-8 bg-white/40 dark:bg-black/40 backdrop-blur-[2px] border-t border-stone-200/50 dark:border-stone-800/50 transition-all duration-300">
                    <div className={`grid gap-6 ${fieldCerts.length === 1 ? 'max-w-3xl mx-auto grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                      {fieldCerts.map((cert) => (
                        <div
                          key={cert.id}
                          className="bg-[#fdfbf7] dark:bg-[#201d1a] border border-stone-300/80 dark:border-stone-700/80 rounded-xs p-4 sm:p-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_6px_14px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
                        >
                          {/* صورة الشهادة بحجم كبير وظاهرة بالكامل بدون قص وبأبعاد A4 الحقيقية */}
                          <div
                            onClick={() => setSelectedCert(cert)}
                            className="relative w-full aspect-[1123/794] overflow-hidden rounded-xs border border-stone-300/80 dark:border-stone-700/80 mb-5 cursor-pointer group/img bg-white dark:bg-stone-900 shadow-xs flex items-center justify-center p-1 sm:p-1.5"
                          >
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-contain object-center group-hover/img:scale-102 transition-transform duration-300"
                            />
                            {/* طبقة تراكب عند التمرير بالماوس مع زر التكبير */}
                            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[1px]">
                              <FaArrowUpRightFromSquare className="w-4 h-4" />
                              <span>View Certificate</span>
                            </div>
                          </div>

                          {/* تفاصيل الشهادة */}
                          <div>
                            {/* شارة جهة الإصدار والتاريخ */}
                            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2">
                              <span className="flex items-center gap-1.5 font-semibold text-stone-700 dark:text-stone-300">
                                <FaBuildingColumns className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                                {cert.issuer}
                              </span>
                              <span className="flex items-center gap-1">
                                <FaCalendarDays className="w-3.5 h-3.5" />
                                {cert.date}
                              </span>
                            </div>

                            {/* اسم الشهادة */}
                            <h4 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                              {cert.title}
                            </h4>

                            {/* وصف مختصر لما تم تحصيله */}
                            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                              {cert.description}
                            </p>
                          </div>

                          {/* زر عرض الصورة بالحجم الكامل */}
                          <button
                            onClick={() => setSelectedCert(cert)}
                            className="mt-auto w-full py-2 px-3 text-xs font-semibold rounded-lg bg-stone-200/80 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <FaAward className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                            <span>Preview Fullsize</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>

      {/* نافذة منبثقة لمعاينة الشهادة بالحجم الكبير (Modal) */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#fdfbf7] dark:bg-[#201d1a] border border-stone-400 dark:border-stone-700 rounded-lg p-5 sm:p-7 shadow-2xl cursor-default"
          >
            {/* زر إغلاق النافذة */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700 cursor-pointer transition-colors"
            >
              <FaXmark className="w-4 h-4" />
            </button>

            {/* صورة الشهادة بالحجم الكبير */}
            <div className="w-full max-h-[70vh] overflow-hidden rounded-md border border-stone-300 dark:border-stone-700 mb-4 bg-stone-100 dark:bg-stone-900 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* تفاصيل الشهادة في الـ Modal */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-stone-300/60 dark:border-stone-800/60 pt-3">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                  {selectedCert.title}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 self-start sm:self-auto">
                {selectedCert.field}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
