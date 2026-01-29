import { Link } from '@remix-run/react';
import 'animate.css';
import { FiTarget, FiUsers, FiTrendingUp, FiMic } from 'react-icons/fi';

export default function About() {
  const offerings = [
    { icon: FiMic, label: "Speaking Engagements" },
    { icon: FiTarget, label: "Strategic Consulting" },
    { icon: FiTrendingUp, label: "Research Services" },
  ];

  return (
    <section id='about' className="text-white px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Get to Know Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="animate__animated animate__fadeInLeft">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50">
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                I am a <span className="text-yellow-400 font-semibold">Senior Project Manager, Mentor, and Executive Director</span> with a track record of driving high-impact projects across industries. I specialize in strategic project delivery, research-driven decision-making, customer experience optimization, and building high-performing teams.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                My work connects people, processes, and technology to ensure organizations execute efficiently, innovate continuously, and achieve measurable results.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                I partner with leaders and organizations to transform ideas into outcomes, guiding them to navigate complexity and unlock growth.
              </p>
            </div>
          </div>

          {/* Right Column - Offerings & CTA */}
          <div className="animate__animated animate__fadeInRight">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-200">Beyond project delivery, I provide:</h3>

              <div className="grid grid-cols-1 gap-4">
                {offerings.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                      <item.icon className="text-yellow-400 text-xl" />
                    </div>
                    <span className="text-gray-200 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/ifebuchesolution/meeting-with-ifebuche" target="_blank" rel="noopener noreferrer" className="flex-1">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Book a Consultation
                </button>
              </a>
              <Link href="#footer" className="flex-1">
                <button className="w-full border-2 border-gray-600 hover:border-yellow-400 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
