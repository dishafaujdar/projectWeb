import { Card } from "../ui/Card"
import { CardContent } from "../ui/CardContent"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Infrasity transformed our technical documentation from a liability into a strategic asset. Our developer adoption increased by 40% after implementing their documentation strategy.",
      author: "Sarah Johnson",
      title: "CTO, DevStack",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The team at Infrasity understands both the technical details and how to communicate them effectively. They've become an extension of our product team.",
      author: "Michael Chen",
      title: "VP of Product, CloudNative",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with Infrasity has significantly reduced our support tickets and improved our user onboarding. Their documentation is clear, comprehensive, and actually helps users succeed.",
      author: "Alex Rivera",
      title: "Head of Developer Relations, APIHub",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="py-16 bg-[#0a0b14]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've helped numerous B2B SaaS companies improve their documentation and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#0f1120] border-gray-800">
              <CardContent className="p-6">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-[#6366f1]" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
