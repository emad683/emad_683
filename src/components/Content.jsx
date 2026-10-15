import { useState } from 'react'
import { FaPaperPlane, FaCheck } from 'react-icons/fa6'

export default function Content() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/emadyt0@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _captcha: 'false',
        }),
      })

      const data = await response.json()
      if (response.ok && data.success !== 'false') {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch {
      setErrorMessage(
        'Unable to send message automatically right now. You can email me directly at emadyt0@gmail.com'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="content" className="w-full py-16 md:py-24 flex justify-center scroll-mt-20">
      <div id="contact" className="sr-only" />
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
                <p className="text-sm text-stone-600 dark:text-stone-400 max-w-sm mb-6">
                  Your message has been sent successfully to <span className="font-semibold text-stone-800 dark:text-stone-200">emadyt0@gmail.com</span>. I will get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-lg text-xs font-bold bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg text-xs font-semibold bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-800/60 text-red-700 dark:text-red-300">
                    {errorMessage}
                    <div className="mt-1">
                      <a
                        href={`mailto:emadyt0@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(formData.name || 'Visitor')}&body=${encodeURIComponent(formData.message)}`}
                        className="underline text-red-800 dark:text-red-200 hover:opacity-80"
                      >
                        Click here to open email client directly
                      </a>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 dark:bg-stone-900/70 border border-stone-300/80 dark:border-stone-700/80 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 dark:bg-stone-900/70 border border-stone-300/80 dark:border-stone-700/80 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or questions..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 dark:bg-stone-900/70 border border-stone-300/80 dark:border-stone-700/80 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl font-bold text-sm bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-3.5 h-3.5 text-amber-500" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
