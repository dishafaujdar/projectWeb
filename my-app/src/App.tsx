import { ChevronDown } from "lucide-react";
import photoes1 from "./assets/photoes/image.png";
import photoes2 from "./assets/photoes/image2.png";

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
                    SHEPHERDLY
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
              tools, driving growth and engagement across your congregation and
              community.
            </p>
            <a
              href="/demo"
              className="bg-[#8a5cf6] hover:bg-[#7c4dff] text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200"
            >
              Book a Free Demo
            </a>
          </div>
        </section>

        {/* Features Section */}
        {/* <section className="py-20 bg-gradient-to-b from-[#1a1a3a]/50 to-[#0a0a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Powerful Features for{" "}
                  <span className="text-[#8a5cf6]">Modern Churches</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  Our comprehensive church management platform provides
                  everything you need to streamline operations and focus on what
                  matters most - your ministry and community.
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
                        <svg
                          className="h-4 w-4 text-[#8a5cf6]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
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

        {/**The challenge */}
        <section className="py-20 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 m-40">
            <div className="flex gap-50 ">
              <span className="text-5xl font-bold ">The challenge</span>
              <span className="text-xl">
                As an early-stage startup, Shepardly faced challenges with their current website, which failed to effectively convey their product story or establish legitimacy due to its inadequate design quality.
              </span>
              </div>

              <div className="mt-20 mb-20">
              <img 
              src={photoes1}
              alt="image from amply"
              width={5000}
              height={700} >
              </img>
              </div>

              <div className="mt-30">
              <div className="flex gap-50">
              <span className="text-5xl font-bold ">The solution</span>
              <span className="text-xl">
              Amply addressed these issues by redesigning Shepardly's website to more accurately and compellingly tell their product story. We focused on elevating the design quality to reflect a professional and credible image that could build trust with visitors. This involved enhancing visual elements, improving content structure, and ensuring the website's overall aesthetics aligned with Shepardly’s brand and vision. By doing so, we helped Shepardly project the legitimacy and innovative spirit needed to engage their target audience effectively.
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
              height={700} >
              </img>
              
            </div>
              </div>
          </div>
        </section>


        {/**The solution */}

        {/* Our latest work */}
        {/* FIXME: Add transition border and ask for pagination */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <span className="mb-12 flex justify-around">
              <h1 className="text-4xl md:text-4xl font-bold "> Our Latest work</h1>
              <button className="rounded-2xl border-1 p-2.5 text-xl font-bold ml-96"> View more of your work → </button>
            </span>
            <div className="grid md:grid-cols-3 gap-6">
  {[
    {
      title: "Diversifi",
      description: "Artificial Intelligence.",
      area: "Branding",
      href: "https://www.joinamply.com/work",
      image: ""
    },
    {
      title: "Dell",
      description: "Venture Capital",
      area: "Webflow Dev",
      href: "https://www.joinamply.com/work",
      image: ""

    },
    {
      title: "WhisperRoom",
      description: "Sound Isolation Enclosures.",
      area: "Web Design",
      href: "https://www.joinamply.com/work",      
      image: ""
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-[#1a1a3a] p-6 rounded-lg border border-gray-800 w-full h-full hover:shadow-lg hover:scale-[1.01] transition-all"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <img    
          alt={`Church Partner`}
          width={120}
          height={40}
          className="h-100 w-100 object-contain border-0 rounded-2xl shadow-2xl"
          ></img>
          <div className="mt-5 text-3xl">
          <h2 className="text-xl font-semibold text-white">{item.title}</h2>
          <button className="text-xs rounded-lg border-1 border-[#aa39ff] transition p-1 text-purple-400">{item.area}</button>
          </div>

          <div className="mt-5 flex justify-around items-center gap-24">
          <p className="text-md text-gray-400">{item.description}</p>
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
        <div className="relative text-center py-20 px-6 overflow-hidden ">
          {/* Background Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:30px_30px] opacity-40 pointer-events-none z-0" />

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
              Let’s <span className="text-white">work together!</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
              Schedule a call with us to start your brand’s trip to the stars...
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
