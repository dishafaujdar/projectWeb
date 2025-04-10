import { Card } from "../ui/Card"
import { CardContent } from "../ui/CardContent"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your product, audience, and goals to create a tailored documentation strategy.",
    },
    {
      number: "02",
      title: "Content Planning",
      description: "We outline the structure and scope of your documentation to ensure comprehensive coverage.",
    },
    {
      number: "03",
      title: "Creation",
      description: "Our technical writers create clear, accurate, and engaging content that helps users succeed.",
    },
    {
      number: "04",
      title: "Review & Refinement",
      description: "We collaborate with your team to ensure technical accuracy and alignment with your brand voice.",
    },
    {
      number: "05",
      title: "Publication",
      description:
        "We help implement the content in your documentation platform with proper formatting and organization.",
    },
    {
      number: "06",
      title: "Maintenance",
      description: "We keep your documentation up-to-date as your product evolves, ensuring it remains valuable.",
    },
  ]

  return (
    <div className="py-16 bg-[#0f1120]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We follow a structured approach to create documentation that drives user success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-[#0a0b14] border-gray-800">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#6366f1] mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
