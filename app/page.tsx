"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FAQ } from "@/components/ui/faq";

export default function Home() {
  return (
    <main className="wave-bg min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-500">🙉</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">

                <span className="new-badge">
                  DDI Alumni 65
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="wave-effect"></div>
        <div className="wave-effect" style={{ transform: 'skewY(5deg)', opacity: 0.5 }}></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <span className="new-badge">
              We're now accepting new members 🎉
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Actually we 🙉
            <span className="gradient-text block mt-2">DDI Alumni 65</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect, collaborate, and create the future of digital innovation together with the most ambitious students of DDI65.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="secondary-button">
              Learn More →
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Why Choose DDI65?
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Our community is designed to provide you with the tools and connections you need to drive growth
              and innovation. Here's how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <span className="text-2xl relative z-10">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add FAQ section here */}
      <FAQ />

      {/* Trusted By Section */}
      <section className="py-20 px-4 text-center">
        <p className="text-gray-500 mb-8">Supported by Former COO of Starters ⚡️ </p>
        <div className="flex justify-center items-center space-x-12 opacity-50">
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "🤝",
    title: "Community Network",
    description: "Connect with like-minded peers, share insights, and build lasting relationships in our vibrant community.",
  },
  {
    icon: "💡",
    title: "Innovation Hub",
    description: "Access exclusive resources, workshops, and mentorship opportunities to fuel your growth.",
  },
  {
    icon: "🚀",
    title: "Career Growth",
    description: "Get personalized guidance from industry experts and unlock exciting new opportunities.",
  },
];