import { Check } from "lucide-react"

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Up to 40% Lower Pricing",
      description: "Our low-overhead model allows us to offer significant savings on major jobs like gas and sewer line services."
    },
    {
      title: "Certified Experts",
      description: "We are factory-certified to work with high-quality Bradford White water heaters."
    },
    {
      title: "Local & Trusted",
      description: "We're a proud part of the local community, with relationships built on trust, reliability, and integrity."
    },
    {
      title: "No Shortcuts, Just Quality Work",
      description: "Every project is handled with professionalism and attention to detail. No shortcuts—just honest, high-quality results."
    },
    {
      title: "Customer-Focused",
      description: "Your satisfaction is our priority. We stand behind our work and are always here to serve you."
    }
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold mb-12 text-center">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                  <Check className="h-5 w-5 text-navy" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-cream/90">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs