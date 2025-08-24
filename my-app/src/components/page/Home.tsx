import { ChevronDown, User, UserPlus, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import photoes1 from "../../assets/photoes/image.png";
import photoes2 from "../../assets/photoes/image2.png";
import infrasity from "../../assets/photoes/gradii-1080x1920.png";
import diversifyImg from "../../assets/photoes/diversify.png";
import dell from "../../assets/photoes/dell.png";
import wr from "../../assets/photoes/room.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] bg-gradient-to-br from-[#0a0a1a] to-[#1a1a3a] text-white overflow-hidden relative">
      
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 800 }).map((_, i) => (
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

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1a] z-0"></div>

      <div className="relative z-10">
        <div className="bg-gradient-to-r from-[#0a0a1a] via-blue-950 to-[#0a0a1a] p-1 text-center text-white font-medium">
          New: Why B2B brands are switching from WordPress to Webflow 🔥
        </div>
        <header className="border-b border-gray-800 bg-[#0a0a1a]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-2">
                  <span className="text-[#8a5cf6] font-bold text-xl">
                    Infrasity
                  </span>
                </a>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
                <a
                  href="/case-studies"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Case Studies
                </a>
                <div className="relative group">
                  <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#1a1a3a] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      <a
                        href="/services/member-management"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a4a] transition-colors"
                      >
                        Member Management
                      </a>
                      <a
                        href="/services/event-planning"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a4a] transition-colors"
                      >
                        Event Planning
                      </a>
                      <a
                        href="/services/giving"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a4a] transition-colors"
                      >
                        Giving & Donations
                      </a>
                    </div>
                  </div>
                </div>
                <a href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
                <a href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </nav>
              
              {/* Authentication Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors hover:bg-[#1a1a3a]"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#8a5cf6] to-[#525ce6] text-white px-4 py-2 rounded-lg font-medium hover:from-[#7c52f4] hover:to-[#4a52d9] transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Link>
                <Link
                  to="/guest-dashboard"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-lg border border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-200 hover:bg-cyan-400/10"
                >
                  <Eye className="h-4 w-4" />
                  <span>Try as Guest</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden flex items-center">
                <button className="text-gray-300 hover:text-white focus:outline-none">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Authentication Menu */}
            <div className="lg:hidden border-t border-gray-800 py-4">
              <div className="flex flex-col space-y-3">
                <Link
                  to="/signin"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors hover:bg-[#1a1a3a]"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#8a5cf6] to-[#525ce6] text-white px-4 py-2 rounded-lg font-medium hover:from-[#7c52f4] hover:to-[#4a52d9] transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Link>
                <Link
                  to="/guest-dashboard"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-lg border border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-200 hover:bg-cyan-400/10"
                >
                  <Eye className="h-4 w-4" />
                  <span>Try as Guest</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section with Enhanced CTA */}
        <section className="py-12 md:py-20 lg:py-32 relative grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-8 gap-8 lg:gap-16 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto sm:h-[500px] md:h-[600px] lg:h-[760px] rounded-3xl shadow-2xl border border-[#1f1f2e] p-2 sm:p-4 flex items-center justify-center">
              <img
                src={infrasity}
                alt="infrasity image"
                className="rounded-3xl object-cover h-full w-full"
              />
            </div>
          </div>

          <div className="mt-6 lg:mt-0 text-left order-1 lg:order-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Infrasity</h1>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {["Branding", "Web Design", "Webflow Dev"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full py-1 sm:py-2 px-3 sm:px-4 border border-[#7e5eca] text-white text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6 text-white">
              <div>
                <span className="text-xs sm:text-sm text-gray-400">Field</span>
                <p className="font-bold">SaaS</p>
              </div>
              <div>
                <span className="text-xs sm:text-sm text-gray-400">Company Location</span>
                <p className="font-bold">Boston, Massachusetts</p>
              </div>
              <div>
                <span className="text-xs sm:text-sm text-gray-400">About</span>
                <p className="font-bold leading-relaxed max-w-md">
                  Shepherdly's Risk Score uses a predictive model that learns
                  from patterns and outcomes in your codebase history.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="mt-8 sm:mt-10 space-y-4">
              <div className="flex flex-wrap gap-3">
                <button className="rounded-2xl border border-[#525ce6] text-white py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 font-semibold hover:bg-[#1b1b2f] transition-all duration-300">
                  Visit Website ↗
                </button>
                <Link
                  to="/signup"
                  className="rounded-2xl bg-gradient-to-r from-[#8a5cf6] to-[#525ce6] text-white py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 font-semibold hover:from-[#7c52f4] hover:to-[#4a52d9] transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  Get Started Free
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <Link
                  to="/guest-dashboard"
                  className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                >
                  <Eye className="h-4 w-4" />
                  <span>Preview Dashboard</span>
                </Link>
                <span>•</span>
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of your existing content... */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#0a0a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold md:w-1/3">The challenge</span>
              <span className="text-lg md:text-xl md:w-2/3">
                As an early-stage startup, Shepardly faced challenges with their
                current website, which failed to effectively convey their
                product story or establish legitimacy due to its inadequate
                design quality.
              </span>
            </div>

            <div className="mt-10 sm:mt-16 lg:mt-20 mb-10 sm:mb-16 lg:mb-20">
              <img
                src={photoes1}
                alt="image from amply"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="mt-16 sm:mt-24 lg:mt-30">
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold md:w-1/3">The solution</span>
                <span className="text-lg md:text-xl md:w-2/3">
                  Amply addressed these issues by redesigning Shepardly's
                  website to more accurately and compellingly tell their product
                  story. We focused on elevating the design quality to reflect a
                  professional and credible image that could build trust with
                  visitors. This involved enhancing visual elements, improving
                  content structure, and ensuring the website's overall
                  aesthetics aligned with Shepardly's brand and vision. By doing
                  so, we helped Shepardly project the legitimacy and innovative
                  spirit needed to engage their target audience effectively.
                </span>
              </div>

              <div className="mt-10 sm:mt-16 lg:mt-20 mb-10 sm:mb-16 lg:mb-20">
                <div className="bg-white border rounded-2xl w-full h-auto sm:h-[150px] lg:h-[200px] mb-6 sm:mb-10 text-black">
                  <p className="text-5xl sm:text-7xl lg:text-9xl px-6 sm:px-10 pt-4 sm:pt-6">''</p>
                </div>
                <img
                  src={photoes2}
                  alt="image2 from amply"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-[#0a0a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Our latest work
              </h1>
              <button className="rounded-2xl border border-[#7e5eca] p-2 text-base sm:text-lg lg:text-2xl font-bold">
                <Link to="/pagination">
                  View more of your work →
                </Link>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Diversifi",
                  description: "Artificial Intelligence",
                  areas: ["Branding", "Web Design", "Webflow Dev"],
                  href: "https://www.joinamply.com/work",
                  image: diversifyImg,
                },
                {
                  title: "Dell",
                  description: "Venture Capital",
                  areas: ["Migration", "Webflow Dev"],
                  href: "https://www.joinamply.com/work",
                  image: dell,
                },
                {
                  title: "WhisperRoom",
                  description: "Sound Isolation Enclosures",
                  areas: ["Branding", "Web Design", "Webflow Dev"],
                  href: "https://www.joinamply.com/work",
                  image: wr,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a3a] p-4 sm:p-6 rounded-lg border border-gray-800 w-full h-full hover:shadow-lg hover:scale-[1.01] transition-all"
                >
                  <div className="flex flex-col justify-between h-full relative sparkle-border rounded-xl p-3 sm:p-6">
                    <div>
                      <img
                        src={item.image}
                        alt={`Image for ${item.title}`}
                        className="h-auto w-full object-contain border-0 rounded-2xl shadow-2xl"
                      />
                      <div className="mt-4 text-base sm:text-xl">
                        <h2 className="text-lg sm:text-xl font-semibold text-white">
                          {item.title}
                        </h2>
                        <div className="flex gap-2 flex-wrap mt-2">
                          {item.areas.map((tag) => (
                            <span className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 text-purple-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-700 my-3 sm:my-4"></div>

                      <div className="mt-3 sm:mt-5 flex justify-between items-center">
                        <p className="text-sm sm:text-md text-gray-400 font-semibold">
                          {item.description}
                        </p>
                        <a
                          href={item.href}
                          className="text-base sm:text-xl text-blue-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <div className="relative text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:30px_30px] opacity-40 z-0" />
          <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-indigo-900/10 to-transparent z-0" />

          <div className="relative z-10">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="bg-[#1f0b2e] p-3 sm:p-4 rounded-xl shadow-xl">
                <img src="/logo.svg" alt="Logo" className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
              Ready to <span className="text-white">get started?</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto">
              Join thousands of users who trust our platform. Start your journey today
              or explore our features as a guest.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-[#8a5cf6] to-[#525ce6] text-white font-semibold px-8 py-4 rounded-xl hover:from-[#7c52f4] hover:to-[#4a52d9] transition-all duration-200 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
              >
                Start Free Trial
              </Link>
              <Link
                to="/signin"
                className="border border-gray-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 w-full sm:w-auto"
              >
                Sign In
              </Link>
              <Link
                to="/guest-dashboard"
                className="text-cyan-400 hover:text-cyan-300 font-semibold px-8 py-4 rounded-xl border border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-200 hover:bg-cyan-400/10 w-full sm:w-auto flex items-center justify-center space-x-2"
              >
                <Eye className="h-5 w-5" />
                <span>Try as Guest</span>
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              No credit card required • Free 14-day trial • Cancel anytime
            </div>
          </div>
        </div>

        {/* Footer remains the same... */}
        <footer className="bg-gradient-to-tr from-[#0a0a1a] via-blue-950 to-[#0a0a1a] py-12 pb-20 sm:pb-40 lg:pb-80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <a href="/" className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <span className="text-[#8a5cf6] font-bold text-xl">
                    SHEPHERDLY
                  </span>
                </a>
                <p className="text-gray-400 mb-4 sm:mb-6">
                  Empowering churches with intuitive management tools for growth
                  and engagement.
                </p>
                <div className="flex space-x-4">
                  {["facebook", "instagram", "linkedin"].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="text-gray-400 hover:text-[#8a5cf6]"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 sm:mb-4">Services</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {[
                    "Webflow Agency",
                    "Webflow Development",
                    "Web Design",
                    "Branding",
                    "CRO",
                    "Maintenace",
                    "Technical SEO",
                    "Integrations",
                    "Migrations",
                    "Work",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 sm:mb-4">Resources</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {[
                    "Blog",
                    "About",
                    "Partenrs",
                    "Why Amply",
                    "Comparisons",
                    "Book a Call",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 sm:mb-4">Company</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {["About", "Blog", "Careers", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}