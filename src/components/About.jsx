export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 flex justify-center">
      {/* فريم مستطيل ورقي مقصوص يأخذ 85% من عرض الصفحة */}
      <div className="relative w-[85%] select-none">
        
        {/* شريط لاصق ورقي في أعلى الفريم (Tape Effect) */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-100/70 dark:bg-stone-700/60 backdrop-blur-xs border border-amber-300/40 dark:border-stone-600/40 rotate-[1deg] shadow-xs z-20 pointer-events-none" />

        {/* جسم الفريم المستطيل بأطراف ورق مقصوص */}
        <div
          className="w-full p-6 sm:p-10 md:p-14 bg-[#fdfbf7] dark:bg-[#25221e] border border-stone-300/80 dark:border-stone-700/80 drop-shadow-[0_16px_32px_rgba(0,0,0,0.14)] dark:drop-shadow-[0_18px_36px_rgba(0,0,0,0.55)] transition-colors duration-300"
          style={{
            clipPath:
              'polygon(1% 1.5%, 5% 0.7%, 9% 2.7%, 13% 1.9%, 17% 1.1%, 21% 0.3%, 25% 2.3%, 29% 1.5%, 33% 0.7%, 37% 2.7%, 41% 1.9%, 45% 1.1%, 49% 0.3%, 53% 2.3%, 57% 1.5%, 61% 0.7%, 65% 2.7%, 69% 1.9%, 73% 1.1%, 77% 0.3%, 81% 2.3%, 85% 1.5%, 89% 0.7%, 93% 2.7%, 97% 1.9%, 99.3% 2%, 97.7% 6%, 98.9% 10%, 97.3% 14%, 98.5% 18%, 99.7% 22%, 98.1% 26%, 99.3% 30%, 97.7% 34%, 98.9% 38%, 97.3% 42%, 98.5% 46%, 99.7% 50%, 98.1% 54%, 99.3% 58%, 97.7% 62%, 98.9% 66%, 97.3% 70%, 98.5% 74%, 99.7% 78%, 98.1% 82%, 99.3% 86%, 97.7% 90%, 98.9% 94%, 97.3% 98%, 99% 99.3%, 95% 99.7%, 91% 97.3%, 87% 97.7%, 83% 98.1%, 79% 98.5%, 75% 98.9%, 71% 99.3%, 67% 99.7%, 63% 97.3%, 59% 97.7%, 55% 98.1%, 51% 98.5%, 47% 98.9%, 43% 99.3%, 39% 99.7%, 35% 97.3%, 31% 97.7%, 27% 98.1%, 23% 98.5%, 19% 98.9%, 15% 99.3%, 11% 99.7%, 7% 97.3%, 3% 97.7%, 0.3% 98%, 2.7% 94%, 2.3% 90%, 1.9% 86%, 1.5% 82%, 1.1% 78%, 0.7% 74%, 0.3% 70%, 2.7% 66%, 2.3% 62%, 1.9% 58%, 1.5% 54%, 1.1% 50%, 0.7% 46%, 0.3% 42%, 2.7% 38%, 2.3% 34%, 1.9% 30%, 1.5% 26%, 1.1% 22%, 0.7% 18%, 0.3% 14%, 2.7% 10%, 2.3% 6%, 1.9% 2%)'
          }}
        >
          {/* عنوان القسم */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-stone-200/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-300/70 dark:border-stone-700/70">
              About Me
            </span>
            <div className="h-[1px] flex-1 bg-stone-300/60 dark:bg-stone-700/60" />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            Passionate about crafting interactive web experiences that blend creative design with solid performance
          </h2>

          {/* Bio Paragraphs */}
          <div className="space-y-4 text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed max-w-4xl mb-8">
            <p>
              I am <strong className="text-stone-900 dark:text-white font-bold">Emad Ahmed</strong>, a Frontend Developer dedicated to creating fast, responsive, and engaging web applications that leave a lasting impression.
            </p>
            <p>
              I focus on writing clean, scalable code with meticulous attention to UI/UX details, smooth micro-interactions, and turning creative concepts into seamless digital realities using the latest web technologies and best practices.
            </p>
          </div>

          {/* Feature Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-300/50 dark:border-stone-700/50">
            {/* Card 1 */}
            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-stone-300/60 dark:border-stone-700/60">
              <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-1 text-sm sm:text-base">
                Modern UI/UX Design
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                Pixel-perfect, fully responsive layouts across all devices and screen sizes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-stone-300/60 dark:border-stone-700/60">
              <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-1 text-sm sm:text-base">
                High Performance
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                Optimized loading speeds, accessibility, and clean, efficient code.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-stone-300/60 dark:border-stone-700/60">
              <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-1 text-sm sm:text-base">
                Creative Interactions
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                Fluid animations and micro-interactions that make browsing delightful.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
