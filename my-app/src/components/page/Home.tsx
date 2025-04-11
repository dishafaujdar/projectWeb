import { ChevronDown } from "lucide-react";
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
      {/* Stars background */}
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a1a] z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <div className="bg-gradient-to-r from-[#0a0a1a] via-blue-950 to-[#0a0a1a] p-1 text-center text-white font-medium">
          {" "}
          New: Why B2B brands are switching from WordPress to Webflow 🔥{" "}
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
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
                <a href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </a>
                <a
                  href="/case-studies"
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
                        href="/services/member-management"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a4a]"
                      >
                        Member Management
                      </a>
                      <a
                        href="/services/event-planning"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a4a]"
                      >
                        Event Planning
                      </a>
                      <a
                        href="/services/giving"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a4a]"
                      >
                        Giving & Donations
                      </a>
                    </div>
                  </div>
                </div>
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
                  className=" text-white px-4 py-2 rounded-xl transition-colors duration-200 border-1 text-xl hover:bg-white hover:text-black"
                >
                  Book call →
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32 relative grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-16 gap-24 lg:gap-40 items-center ml-40 ">
          {/* Left Side - Visual Mockup Container */}
          <div className="relative flex justify-center">
            <div className=" w-full max-w-md h-[760px] rounded-3xl shadow-2xl border border-[#1f1f2e] p-4 flex items-center justify-center ">
              <img
                src={infrasity}
                alt="infrasity image"
                height={700}
                width={900}
                className="rounded-3xl"
              ></img>
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="mt-10 lg:mt-0 text-left">
            <h1 className="text-5xl font-bold text-white mb-4">Infrasity</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Branding", "Web Design", "Webflow Dev"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full py-2 px-4 border border-[#7e5eca] text-white text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Info Blocks */}
            <div className="space-y-6 text-white">
              <div>
                <span className="text-sm text-gray-400">Field</span>
                <p className="font-bold">SaaS</p>
              </div>
              <div>
                <span className="text-sm text-gray-400">Company Location</span>
                <p className="font-bold">Boston, Massachusetts</p>
              </div>
              <div>
                <span className="text-sm text-gray-400">About</span>
                <p className="font-bold leading-relaxed max-w-md">
                  Shepherdly’s Risk Score uses a predictive model that learns
                  from patterns and outcomes in your codebase history.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-10">
              <button className="rounded-2xl border border-[#525ce6] text-white py-4 px-8 font-semibold hover:bg-[#1b1b2f] transition-all duration-300">
                Visit Website ↗
              </button>
            </div>
          </div>
        </section>

        {/**The challenge */}
        <section className="py-20 bg-[#0a0a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 m-40 ">
            <div className="flex gap-50 ">
              <span className="text-5xl font-bold ">The challenge</span>
              <span className="text-xl">
                As an early-stage startup, Shepardly faced challenges with their
                current website, which failed to effectively convey their
                product story or establish legitimacy due to its inadequate
                design quality.
              </span>
            </div>

            <div className="mt-20 mb-20">
              <img
                src={photoes1}
                alt="image from amply"
                width={5000}
                height={700}
              ></img>
            </div>

            <div className="mt-30">
              <div className="flex gap-50">
                <span className="text-5xl font-bold ">The solution</span>
                <span className="text-xl">
                  Amply addressed these issues by redesigning Shepardly's
                  website to more accurately and compellingly tell their product
                  story. We focused on elevating the design quality to reflect a
                  professional and credible image that could build trust with
                  visitors. This involved enhancing visual elements, improving
                  content structure, and ensuring the website's overall
                  aesthetics aligned with Shepardly’s brand and vision. By doing
                  so, we helped Shepardly project the legitimacy and innovative
                  spirit needed to engage their target audience effectively.
                </span>
              </div>

              <div className="mt-20 mb-20">
                <div className=" bg-white border rounded-2xl w-[1460px] h-[200px] mb-10 text-black text-9xl">
                  <p className="ml-50 mt-10">''</p>
                </div>
                <img
                  src={photoes2}
                  alt="image2 from amply"
                  width={5000}
                  height={700}
                ></img>
              </div>
            </div>
          </div>
        </section>

        {/* Our latest work */}
        {/* FIXME: Add transition border and ask for pagination */}
        <section className="py-20 bg-[#0a0a1a] ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-5 flex ml-20 sm:px-6 lg:gap-99 md:px-2">
              <h1 className="text-4xl md:text-3xl font-bold ">
                Our latest work
              </h1>
              <button className="rounded-2xl border-1 p-2.5 text-2xl font-bold ml-96 border-[#7e5eca]">
                <Link to="/pagination" className="">
                  {" "}
                  View more of your work →{" "}
                </Link>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 ">
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
                  className="bg-[#1a1a3a] p-6 rounded-lg border border-gray-800 w-full h-full hover:shadow-lg hover:scale-[1.01] transition-all"
                >
                  <div className="flex flex-col justify-between h-full relative sparkle-border rounded-xl p-6">
                    <div>
                      <img
                        src={item.image}
                        alt={`Image for ${item.title}`}
                        className="h-120 w-full object-contain border-0 rounded-2xl shadow-2xl"
                      />
                      <div className="mt-5 text-xl">
                        <h2 className="text-xl font-semibold text-white">
                          {item.title}
                        </h2>
                        <div className="flex gap-2 flex-wrap mt-2">
                          {item.areas.map((tag) => (
                            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 text-purple-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-700 my-4"></div>

                      <div className="mt-5 flex justify-around items-center gap-24 ">
                        <p className="text-md text-gray-400 font-semibold">
                          {item.description}
                        </p>
                        <a
                          href={item.href}
                          className="text-xl text-blue-400 hover:underline"
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

        {/* Lets work together Section */}
        {/**FIXME: add blue gradient */}
        <div className="relative text-center py-20 px-6 overflow-hidden">
          {/* Background Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:30px_30px] opacity-40 z-0" />

          {/* Blue Gradient in the Center */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-indigo-900/10 to-transparent z-0" />

          {/* Center Content */}
          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-[#1f0b2e] p-4 rounded-xl shadow-xl">
                <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
              Let's <span className="text-white">work together!</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
              Schedule a call with us to start your brand's trip to the stars...
              or maybe just to talk shop.
            </p>

            {/* CTA Card */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 border-1 rounded-xl px-6 py-4 max-w-xl mx-auto shadow-lg">
              {/* Avatar Section */}
              <div className="flex items-center gap-3">
                <img
                  src="/avatars.png"
                  alt="Founders"
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <p className="text-sm text-white font-semibold">
                    Book a call with
                  </p>
                  <p className="text-sm text-gray-400">Amply founders</p>
                </div>
              </div>

              {/* Button */}
              <button className="bg-white text-black font-semibold px-5 py-2 rounded-lg border-2 border-[#aa39ff] hover:bg-gray-100 transition">
                Book a Call
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* FIXME: add link to each , add amply at the end */}
        <footer className="bg-gradient-to-tr from-[#0a0a1a] via-blue-950 to-[#0a0a1a] py-12 pb-80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <a href="/" className="flex items-center space-x-2 mb-6">
                  <span className="text-[#8a5cf6] font-bold text-xl ml-14">
                    SHEPHERDLY
                  </span>
                </a>
                <p className="text-gray-400 mb-6 ml-14">
                  Empowering churches with intuitive management tools for growth
                  and engagement.
                </p>
                <div className="flex space-x-4 ml-14">
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
              <div className="ml-14">
                <h3 className="font-semibold text-lg mb-4">Services</h3>
                <ul className="space-y-2">
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
                        className="text-gray-400 hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-14">
                <h3 className="font-semibold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
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
                        className="text-gray-400 hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-14">
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  {["About", "Blog", "Careers", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white"
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
