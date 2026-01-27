import { FiTarget, FiBarChart2, FiUsers, FiMic } from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";

export default function Services() {
  const services = [
    {
      category: "Project Management & Strategic Execution",
      icon: FiTarget,
      description: "Driving projects from vision to completion with precision and impact.",
      items: [
        "Lead end-to-end project delivery across industries",
        "Align teams, processes, and resources for maximum impact",
        "Agile & Scrum facilitation",
        "Risk management, budgeting, and performance tracking",
        "Stakeholder engagement and executive reporting",
      ],
    },
    {
      category: "Research & Insights",
      icon: FiBarChart2,
      description: "Data-driven strategies that inform smarter decisions.",
      items: [
        "Market, competitor, and industry research",
        "Data-driven recommendations for strategy and growth",
        "Academic and business research design & reporting",
        "Operational analytics and process optimization",
      ],
    },
    {
      category: "Customer Experience & Operations Strategy",
      icon: FiUsers,
      description: "Creating seamless experiences that drive loyalty and growth.",
      items: [
        "Customer journey mapping & experience optimization",
        "Service design & process improvement",
        "Client relationship strategy & loyalty programs",
        "Digital transformation advisory",
      ],
    },
    {
      category: "Speaking & Leadership Workshops",
      icon: FiMic,
      description: "Inspiring teams and leaders to achieve excellence.",
      items: [
        "Project leadership and team collaboration",
        "Strategic decision-making & problem-solving",
        "Building high-performance teams",
        "Change management & organizational development",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">How I Help Organizations Succeed</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Strategic solutions tailored to drive growth, efficiency, and lasting impact for your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <service.icon className="text-yellow-400 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{service.category}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>

              {/* Service Items */}
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1 flex-shrink-0">
                      <GrStatusGood size={18} />
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
