
export function Footer() {
  return (
    <footer className="bg-[#0a0b14] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Infrasity</h3>
            <p className="text-gray-400 mb-4">
              We are the growth strategists for some of the fastest-growing B2B SaaS startups.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#6366f1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6366f1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/technical-writing-services" className="text-gray-400 hover:text-[#6366f1]">
                  Technical Writing
                </a>
              </li>
              <li>
                <a href="/services/api-documentation" className="text-gray-400 hover:text-[#6366f1]">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="/services/developer-education" className="text-gray-400 hover:text-[#6366f1]">
                  Developer Education
                </a>
              </li>
              <li>
                <a href="/services/content-strategy" className="text-gray-400 hover:text-[#6366f1]">
                  Content Strategy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="text-gray-400 hover:text-[#6366f1]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-400 hover:text-[#6366f1]">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-[#6366f1]">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-[#6366f1]">
                  Careers
                </a >
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:info@infrasity.com" className="hover:text-[#6366f1]">
                  info@infrasity.com
                </a>
              </li>
              <li className="text-gray-400">
                <a href="tel:+11234567890" className="hover:text-[#6366f1]">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="text-gray-400">San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Infrasity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
