import profileImage from '../assets/image.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 lg:gap-14"
    >
      {/* 1. فريم الصورة: دائري بأطراف ورق مقصوص بحجم أكبر وبمسافة إطار أصغر */}
      <div className="relative group shrink-0 select-none">
        {/* إطار الورقة المقصوصة الخارجي الدائري مع الظل */}
        <div
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 p-1 sm:p-1.5 bg-[#fdfbf7] dark:bg-[#25221e] border border-stone-300/80 dark:border-stone-700/80 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_14px_28px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:rotate-2 group-hover:scale-102"
          style={{
            clipPath:
              'polygon(97.5% 50.0%, 99.2% 56.5%, 94.5% 61.9%, 96.5% 69.3%, 90.5% 73.4%, 85.7% 77.4%, 84.9% 84.9%, 79.1% 88.0%, 72.7% 89.3%, 69.1% 96.2%, 61.5% 93.1%, 56.3% 98.2%, 50.0% 99.4%, 44.0% 95.3%, 37.0% 98.4%, 32.2% 93.0%, 27.5% 89.1%, 20.1% 88.9%, 16.8% 83.2%, 10.5% 80.3%, 10.6% 72.7%, 3.3% 69.3%, 6.7% 61.6%, 2.1% 56.3%, 0.8% 50.0%, 5.2% 44.1%, 1.8% 37.1%, 6.7% 32.1%, 11.3% 27.6%, 11.3% 20.3%, 17.5% 17.5%, 19.4% 10.1%, 26.8% 9.8%, 32.8% 8.4%, 37.2% 2.1%, 43.8% 2.7%, 50.0% 4.4%, 56.6% 0.1%, 61.5% 7.0%, 68.5% 5.2%, 74.7% 7.3%, 77.9% 13.6%, 85.4% 14.6%, 87.0% 21.6%, 89.2% 27.4%, 95.2% 31.3%, 95.5% 37.8%, 99.2% 43.5%)'
          }}
        >
          {/* الصورة داخل الإطار الدائري المقصوص بمسافة ضيقة ومحكمة */}
          <div
            className="w-full h-full overflow-hidden"
            style={{
              clipPath:
                'polygon(97.5% 50.0%, 99.2% 56.5%, 94.5% 61.9%, 96.5% 69.3%, 90.5% 73.4%, 85.7% 77.4%, 84.9% 84.9%, 79.1% 88.0%, 72.7% 89.3%, 69.1% 96.2%, 61.5% 93.1%, 56.3% 98.2%, 50.0% 99.4%, 44.0% 95.3%, 37.0% 98.4%, 32.2% 93.0%, 27.5% 89.1%, 20.1% 88.9%, 16.8% 83.2%, 10.5% 80.3%, 10.6% 72.7%, 3.3% 69.3%, 6.7% 61.6%, 2.1% 56.3%, 0.8% 50.0%, 5.2% 44.1%, 1.8% 37.1%, 6.7% 32.1%, 11.3% 27.6%, 11.3% 20.3%, 17.5% 17.5%, 19.4% 10.1%, 26.8% 9.8%, 32.8% 8.4%, 37.2% 2.1%, 43.8% 2.7%, 50.0% 4.4%, 56.6% 0.1%, 61.5% 7.0%, 68.5% 5.2%, 74.7% 7.3%, 77.9% 13.6%, 85.4% 14.6%, 87.0% 21.6%, 89.2% 27.4%, 95.2% 31.3%, 95.5% 37.8%, 99.2% 43.5%)'
            }}
          >
            <img
              src={profileImage}
              alt="Emad Ahmed"
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* 2. فريم الكلام: مستطيل بأطراف ورق مقصوص كبطاقة ورقية أنيقة */}
      <div className="relative flex-1 max-w-2xl select-none">
        {/* بطاقة الورقة المقصوصة المستطيلة */}
        <div
          className="p-6 sm:p-8 lg:p-10 bg-[#fdfbf7] dark:bg-[#25221e] border border-stone-300/80 dark:border-stone-700/80 drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)] dark:drop-shadow-[0_14px_28px_rgba(0,0,0,0.55)] transition-colors duration-300"
          style={{
            clipPath:
              'polygon(1% 1.5%, 5% 0.7%, 9% 2.7%, 13% 1.9%, 17% 1.1%, 21% 0.3%, 25% 2.3%, 29% 1.5%, 33% 0.7%, 37% 2.7%, 41% 1.9%, 45% 1.1%, 49% 0.3%, 53% 2.3%, 57% 1.5%, 61% 0.7%, 65% 2.7%, 69% 1.9%, 73% 1.1%, 77% 0.3%, 81% 2.3%, 85% 1.5%, 89% 0.7%, 93% 2.7%, 97% 1.9%, 99.3% 2%, 97.7% 6%, 98.9% 10%, 97.3% 14%, 98.5% 18%, 99.7% 22%, 98.1% 26%, 99.3% 30%, 97.7% 34%, 98.9% 38%, 97.3% 42%, 98.5% 46%, 99.7% 50%, 98.1% 54%, 99.3% 58%, 97.7% 62%, 98.9% 66%, 97.3% 70%, 98.5% 74%, 99.7% 78%, 98.1% 82%, 99.3% 86%, 97.7% 90%, 98.9% 94%, 97.3% 98%, 99% 99.3%, 95% 99.7%, 91% 97.3%, 87% 97.7%, 83% 98.1%, 79% 98.5%, 75% 98.9%, 71% 99.3%, 67% 99.7%, 63% 97.3%, 59% 97.7%, 55% 98.1%, 51% 98.5%, 47% 98.9%, 43% 99.3%, 39% 99.7%, 35% 97.3%, 31% 97.7%, 27% 98.1%, 23% 98.5%, 19% 98.9%, 15% 99.3%, 11% 99.7%, 7% 97.3%, 3% 97.7%, 0.3% 98%, 2.7% 94%, 2.3% 90%, 1.9% 86%, 1.5% 82%, 1.1% 78%, 0.7% 74%, 0.3% 70%, 2.7% 66%, 2.3% 62%, 1.9% 58%, 1.5% 54%, 1.1% 50%, 0.7% 46%, 0.3% 42%, 2.7% 38%, 2.3% 34%, 1.9% 30%, 1.5% 26%, 1.1% 22%, 0.7% 18%, 0.3% 14%, 2.7% 10%, 2.3% 6%, 1.9% 2%)'
          }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-stone-200/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-300/70 dark:border-stone-700/70 mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </div>

          {/* Name & Greeting */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-stone-100 mb-2">
            Welcome, I'm <span className="text-stone-800 dark:text-stone-200">Emad Ahmed</span>
          </h1>

          {/* Specialization */}
          <p className="text-lg sm:text-xl font-bold text-stone-600 dark:text-stone-300 mb-4">
            Frontend Developer &amp; UI Specialist
          </p>

          {/* Bio Description */}
          <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
            I design and build modern, interactive web experiences with high attention to detail, smooth animations, and clean scalable code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#content"
              className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Get in Touch
            </a>
            <a
              href="#project"
              className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-white/70 hover:bg-white dark:bg-stone-800/80 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-300/80 dark:border-stone-700/80 shadow-xs transition-all cursor-pointer"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
