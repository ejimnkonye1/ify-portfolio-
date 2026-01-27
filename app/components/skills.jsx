import { FiCheck } from "react-icons/fi";

export default function Skills() {
  const skills = [
    "Strategic Thinking & Execution",
    "Project & Program Management",
    "Agile & Scrum Leadership",
    "Customer Experience Strategy",
    "Research & Data-Driven Insights",
    "Stakeholder Engagement",
    "Workflow & Process Optimization",
    "Team Leadership & Mentorship",
    "Problem Solving & Decision Making",
    "Digital Transformation",
  ];

  const tools = [
    {
      category: "Project & Workflow Management",
      items: ["Asana", "Trello", "Notion"],
    },
    {
      category: "CRM & Customer Experience",
      items: ["HubSpot", "Zoho"],
    },
    {
      category: "Automation & Productivity",
      items: ["AI-driven solutions", "Google AppScript"],
    },
    {
      category: "Communication & Collaboration",
      items: ["Slack", "Zoom", "Microsoft Teams"],
    },
    {
      category: "Data Analysis & Visualization",
      items: ["Excel", "Google Sheets", "Tableau"],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Skills & Tools</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            A comprehensive skill set backed by industry-leading tools for maximum impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-yellow-400 rounded-full"></span>
              Core Competencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <FiCheck className="text-yellow-400" />
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-yellow-400 rounded-full"></span>
              Technical & Digital Tools
            </h3>

            <div className="space-y-6">
              {tools.map((toolGroup, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-800/80 to-gray-900/50 p-5 rounded-xl border border-gray-700/50"
                >
                  <h4 className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                    {toolGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {toolGroup.items.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
