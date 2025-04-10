
export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] bg-gradient-to-br from-[#0a0a1a] to-[#1a1a3a] text-white overflow-hidden relative">
      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1a] z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <header className="border-b border-gray-800 bg-[#0a0a1a]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-2">
                  <span className="text-[#8a5cf6] font-bold text-xl">INFRASITY</span>
                </a>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
                <a href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </a>
                <a href="/case-studies" className="text-gray-300 hover:text-white">
                  Case Studies
                </a>
                <a href="/services" className="text-gray-300 hover:text-white">
                  Services
                </a>
                <a href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </a>
                <a href="/about-us" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </nav>
              <div>
                <a
                  href="/demo"
                  className="bg-[#8a5cf6] hover:bg-[#7c4dff] text-white px-4 py-2 rounded-md transition-colors duration-200"
                >
                  Book a Free Demo
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Demo Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Demo</h1>
                <p className="text-gray-300">
                  See how Shepherdly can transform your church management. Fill out the form below and our team will
                  contact you to schedule a personalized demo.
                </p>
              </div>

              <div className="bg-[#1a1a3a] p-8 rounded-lg border border-gray-800">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 bg-[#2a2a4a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a5cf6] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 bg-[#2a2a4a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a5cf6] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 bg-[#2a2a4a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a5cf6] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 bg-[#2a2a4a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a5cf6] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="churchName" className="block text-sm font-medium text-gray-300 mb-1">
                      Church Name*
                    </label>
                    <input
                      type="text"
                      id="churchName"
                      name="churchName"
                      className="w-full px-4 py-2 bg-[#2a2a4a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a5cf6] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="churchSize" className="block text-sm font-medium text-gray-300 mb-1">
                      Church Size
                    </label>
                    <select
                      id="churchSize"
                      name="churchSize"
                      className="w-full px-4 py-2 bg-[#2a2a4a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a5cf6] focus:border-transparent"
                    >
                      <option value="">Select church size</option>
                      <option value="1-100">1-100 members</option>
                      <option value="101-250">101-250 members</option>
                      <option value="251-500">251-500 members</option>
                      <option value="501-1000">501-1000 members</option>
                      <option value="1000+">1000+ members</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-[#2a2a4a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a5cf6] focus:border-transparent"
                      placeholder="Tell us about your specific needs or questions..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 mt-1 bg-[#2a2a4a] border border-gray-700 rounded focus:ring-[#8a5cf6]"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-300">
                      I agree to the{" "}
                      <a href="/privacy-policy" className="text-[#8a5cf6] hover:underline">
                        privacy policy
                      </a>{" "}
                      and consent to being contacted about Shepherdly services.
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#8a5cf6] hover:bg-[#7c4dff] text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200"
                    >
                      Request Demo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0a1a] border-t border-gray-800 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <a href="/" className="flex items-center space-x-2 mb-6">
                  <span className="text-[#8a5cf6] font-bold text-xl">SHEPHERDLY</span>
                </a>
                <p className="text-gray-400 mb-6">
                  Empowering churches with intuitive management tools for growth and engagement.
                </p>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "aedin"].map((social) => (
                    <a key={social} href={`#${social}`} className="text-gray-400 hover:text-[#8a5cf6]">
                      <span className="sr-only">{social}</span>
                      <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Product</h3>
                <ul className="space-y-2">
                  {["Features", "Pricing", "Integrations", "Updates"].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  {["Documentation", "Guides", "Support", "API"].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  {["About", "Blog", "Careers", "Contact"].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Shepherdly. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
