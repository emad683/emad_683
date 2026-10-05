import { useState } from 'react'
import { FaPaperPlane, FaCheck } from 'react-icons/fa6'

export default function Content() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="content" className="w-full py-16 md:py-24 flex justify-center">
      {/* Container 85% width */}
      <div className="w-[85%] select-none">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-stone-200/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-300/70 dark:border-stone-700/70">
            Contact
          </span>
          <div className="h-[1px] flex-1 bg-stone-300/60 dark:bg-stone-700/60" />
        </div>

        {/* Paper Form Card Centered */}
        <div
          className="relative bg-paper border border-stone-400/70 dark:border-stone-700/80 drop-shadow-[0_16px_32px_rgba(0,0,0,0.14)] dark:drop-shadow-[0_18px_36px_rgba(0,0,0,0.55)] transition-all duration-300 max-w-xl mx-auto overflow-hidden"
          style={{
            clipPath:
              'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)'
          }}
        >
          {/* Folded Ear at Top Right */}
          <div
            className="absolute top-0 right-0 w-[20px] h-[20px] bg-stone-300 dark:bg-stone-700 shadow-xs pointer-events-none z-20 transition-colors"
            style={{
              clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
            }}
          />

          {/* Paper Tint Overlay */}
          <div className="p-6 sm:p-10 bg-white/50 dark:bg-black/50 backdrop-blur-[2px]">
            
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 mb-6 text-center flex items-center justify-center gap-2">
              <span>Send a Message</span>
            </h3>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                  <FaCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                  Thank You!
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Your message has been sent successfully. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 dark:bg-stone-900/70 border border-stone-300/80 dark:border-stone-700/80 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 dark:bg-stone-900/70 border border-stone-300/80 dark:border-stone-700/80 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or questions..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 dark:bg-stone-900/70 border border-stone-300/80 dark:border-stone-700/80 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl font-bold text-sm bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <FaPaperPlane className="w-3.5 h-3.5 text-amber-500" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
