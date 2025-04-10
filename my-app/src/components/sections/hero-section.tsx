import { CheckItem } from "../ui/check-items"
// import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
            <span className="text-white">Docs That Don't Just Explain, they </span> <span className="text-[#6366f1]">drive</span>{" "}
            <span className="text-[#6366f1]">Sell, Support,</span> and <span className="text-[#6366f1]">Scale</span>
          </h1>

          <div className="space-y-6">
            <CheckItem>
              Built for DevTools companies to help users get started, not stuck — with real examples, SDK integration to
              speed up dev onboarding.
            </CheckItem>

            <CheckItem>Explains your product through real use cases — not fluffy feature lists</CheckItem>

            <CheckItem>
              Equips sales with demo-ready artifacts that double as self-serve onboarding for developers.
            </CheckItem>
          </div>

          <div>
            <a href="/book-demo">
              <button className="bg-[#6366f1] hover:bg-[#5258e4] text-white ">
                Book a Demo
              </button>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="bg-[#ffc554] rounded-lg p-4 relative z-10">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="bg-gray-100 flex items-center px-4 py-2 space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="bg-white rounded-md px-2 py-1 text-xs text-gray-700 flex-1 ml-2">www.infrasity.com</div>
              </div>
              <div className="bg-gray-900 p-4 h-64 overflow-hidden">
                <pre className="text-xs text-green-400 font-mono">
                  <code>
                    {`// Example code documentation
import { Infrasity } from '@infrasity/sdk';

const client = new Infrasity({
  apiKey: process.env.API_KEY,
});

// Initialize the connection
await client.connect();

// Fetch technical documentation
const docs = await client.docs.fetch({
  type: 'technical',
  format: 'markdown'
});

// Render documentation
function renderDocs(docs) {
  return docs.map(doc => {
    return <DocComponent key={doc.id} {...doc} />;
  });
}`}
                  </code>
                </pre>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white rounded-full p-4 shadow-lg">
              <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center">
                <div className="text-xs text-center">
                  <div>Technical content</div>
                  <div className="flex mt-1 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center mt-32 mb-16">
        <p className="text-xl md:text-2xl text-gray-300">
          We are the growth strategists for some of the fastest-growing B2B SaaS startups
        </p>
      </div>
    </div>
  )
}
