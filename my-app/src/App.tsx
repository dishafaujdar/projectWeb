import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] bg-gradient-to-br from-[#0a0a1a] to-[#1a1a3a] text-white overflow-hidden relative">
      <div>
        {/* Stars background */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 500 }).map((_, i) => (
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
          {/* Navigation ✅*/}
          <div className="bg-gradient-to-r from-[#0a0a1a] via-blue-900 to-[#0a0a1a] p-1 text-center text-white font-medium">
            New: Why B2B brands are switching from WordPress to Webflow 🔥{" "}
          </div>

          <header className="bg-[#0a0a1a]/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <a
                    href="https://www.infrasity.com/"
                    className="flex items-center space-x-2"
                  >
                    <span className="text-[#8a5cf6] font-bold text-xl">
                      INFRASITY
                    </span>
                  </a>
                </div>
                <nav className="hidden md:flex space-x-8 text-bold">
                  <a
                    href="https://www.infrasity.com/"
                    className="text-gray-300 hover:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="https://www.infrasity.com/blog"
                    className="text-gray-300 hover:text-white"
                  >
                    Blog
                  </a>
                  <a
                    href="https://www.infrasity.com/case-studies"
                    className="text-gray-300 hover:text-white"
                  >
                    Case Studies
                  </a>
                  <div className="relative group">
                    <button className="flex items-center text-gray-300 hover:text-white">
                      Services <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#1a1a3a] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        <a
                          href="https://www.infrasity.com/services/service-video-production"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a4a]"
                        >
                          Video Producation
                        </a>
                        <a
                          href="https://www.infrasity.com/services/service-video-production"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a4a]"
                        >
                          Technical Writing Skills
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://www.infrasity.com/faq"
                    className="text-gray-300 hover:text-white"
                  >
                    FAQ
                  </a>
                  <a
                    href="https://www.infrasity.com/about"
                    className="text-gray-300 hover:text-white"
                  >
                    About Us
                  </a>
                </nav>
                <div>
                  <a
                    href="https://www.infrasity.com/contact"
                    className="bg-[#8a5cf6] hover:bg-[#7c4dff] text-white px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    Book a Free Demo
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="py-20 md:py-32 text-center relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Church Management{" "}
                <span className="text-[#8a5cf6]">Solutions</span> for
                <br />
                <span className="text-[#f0f0f0]">Modern</span>{" "}
                <span className="text-[#8a5cf6]">Ministries</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                At Shepherdly, we empower churches with intuitive management
                tools, driving growth and engagement across your congregation
                and community.
              </p>
              <a
                href="/demo"
                className="bg-[#8a5cf6] hover:bg-[#7c4dff] text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200"
              >
                Book a Free Demo
              </a>
            </div>
          </section>

          {/* Clients Section
        <section className="bg-gray-200/10 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold mb-10">
              We are the church management solution for some of the fastest-growing ministries
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <img
                    src={`/placeholder.svg?height=40&width=120&text=Church${i}`}
                    alt={`Church Partner ${i}`}
                    width={120}
                    height={40}
                    className="h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}

          {/* How It Works Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Streamlined Member Management",
                    description:
                      "Easily track attendance, manage member profiles, and organize small groups with our intuitive interface.",
                    icon: "👥",
                  },
                  {
                    title: "Simplified Event Planning",
                    description:
                      "Create, schedule, and manage church events with automated reminders and registration tracking.",
                    icon: "📅",
                  },
                  {
                    title: "Secure Online Giving",
                    description:
                      "Process donations securely, generate tax statements, and track giving patterns with detailed analytics.",
                    icon: "💰",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1a3a] p-6 rounded-lg border border-gray-800 hover:border-[#8a5cf6] transition-colors duration-200"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          {/* <section className="py-20 bg-gradient-to-b from-[#1a1a3a]/50 to-[#0a0a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Powerful Features for <span className="text-[#8a5cf6]">Modern Churches</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  Our comprehensive church management platform provides everything you need to streamline operations and
                  focus on what matters most - your ministry and community.
                </p>
                <ul className="space-y-4">
                  {[
                    "Attendance tracking with detailed analytics",
                    "Customizable member profiles and directories",
                    "Secure online and mobile giving options",
                    "Event management with registration capabilities",
                    "Communication tools for email, SMS, and push notifications",
                    "Volunteer scheduling and management",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#8a5cf6]/20 flex items-center justify-center mt-0.5">
                        <svg className="h-4 w-4 text-[#8a5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#8a5cf6]/10 rounded-lg blur-xl"></div>
                <div className="relative bg-[#1a1a3a] border border-gray-800 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=800&text=Dashboard"
                    alt="Shepherdly Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

          {/* Testimonials */}
          {/* <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Church Leaders Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Shepherdly has transformed how we manage our church. The member management and communication tools have saved us countless hours.",
                  author: "Pastor Michael Johnson",
                  church: "Grace Community Church",
                },
                {
                  quote:
                    "The giving platform is seamless and has increased our online donations by 40%. Our congregation loves how easy it is to use.",
                  author: "Sarah Williams",
                  church: "Harvest Fellowship",
                },
                {
                  quote:
                    "As a multi-campus church, Shepherdly helps us stay organized and connected. The reporting features give us valuable insights into our growth.",
                  author: "Pastor David Chen",
                  church: "Cornerstone Church",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a3a] p-6 rounded-lg border border-gray-800 hover:border-[#8a5cf6] transition-colors duration-200"
                >
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="inline-block h-5 w-5 text-[#8a5cf6]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.church}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

          {/* Get started with Infrasity Section */}
          <div className="bg-gradient-to-b from-black/50 to-[#2e0069] rounded-xl px-9 py-16 text-center max-w-7xl mx-auto my-10 relative overflow-hidden cursor-pointer">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img src="/logo.svg" alt="Infrasity Logo" className="h-12 w-12" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get started with Infrasity
            </h2>

            {/* Subheading */}
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Infrasity is the only platform which provides you with developer
              focused content for your products or services
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button className="bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-100">
                <a href="https://content.infrasity.com/"> Outline Generator  </a>
              </button>
              <button className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800">
                <a href="https://www.infrasity.com/contact"> Talk to Us </a>
              </button>
            </div>

            {/* Optional subtle grid background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none rounded-xl" />
          </div>

          {/* Footer ✅ */}
          <footer className="bg-[#0a0a1a] border-t border-gray-800 py-12 ml-64">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 ">
                <div className="col-span-2 md:col-span-1">
                  <a
                    href="https://www.infrasity.com/"
                    className="flex items-center space-x-2 mb-6"
                  >
                    <span className="text-[#8a5cf6] font-bold text-xl">
                      INFRASITE
                    </span>
                  </a>
                  <p className="text-gray-400 mb-6">
                    Amplifying product visibility through technical content and
                    SEO that drives awareness and boosts search rankings.
                  </p>
                </div>
                <div className="ml-20">
                  <h3 className="font-semibold text-lg mb-4 ">Services</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-400 hover:text-white">
                      <a href=""> Technical Writing Service</a>
                    </li>
                    <li className="text-gray-400 hover:text-white">
                      <a href=""> Video Production</a>
                    </li>
                    <li className="text-gray-400 hover:text-white">
                      <a href=""> Updates </a>
                    </li>
                  </ul>
                </div>
                <div className="ml-14">
                  <h3 className="font-semibold text-lg mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-400 hover:text-white">
                      <a href=""> Home </a>
                    </li>
                    <li className="text-gray-400 hover:text-white">
                      <a href=""> Blog </a>
                    </li>
                    <li className="text-gray-400 hover:text-white">
                      <a href=""> Case </a> Studies
                    </li>
                    <li className="text-gray-400 hover:text-white">
                      <a href=""> FAQ </a>
                    </li>
                    <li className="text-gray-400 hover:text-white">
                      <a href=""> Contact </a> us
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Follow us</h3>
                  <ul className="space-y-2 ">
                    <li className="text-gray-400 hover:text-white">
                      <a href="">Youtube</a>
                    </li>
                    <li className="text-gray-400 hover:text-white">
                      <a href="">X</a>
                    </li>
                    <li className="text-gray-400 hover:text-white">
                      <a href="">Linkedln</a>
                    </li>
                    <li className="text-gray-400 hover:text-white">
                      <a href="">Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-gray-800 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-12 mt-10">
                <p className="text-sm mr-3">
                  © {new Date().getFullYear()} Infrasite. All rights reserved.
                </p>
                <p className="text-sm mr-30">
                  <a className="hover:underline">
                    Privacy Policy Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

/**
 * I’ll work on this this way: I will create a page with Infrasity’s website theme that shows the team's past and latest projects. I can use    Shepherdly for design. For this, I’ll use React.js and ts and some libraries like tailwind, mui, etc. 
okokokokoko
 * I’ve to deploy it separately.
 */
