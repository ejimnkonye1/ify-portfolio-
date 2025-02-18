import { GrStatusGood } from "react-icons/gr";
export default function Services() {
    
    const services = [
      {
        category: "Executive & Administrative Support",
        icon: "📌",
        items: [
          "Calendar & email management",
          "Meeting scheduling & coordination",
          "Travel planning & expense tracking",
          "Document preparation & data entry",
          "Inbox organization & correspondence handling",
        ],
      },
      {
        category: "Project Management",
        icon: "📌",
        items: [
          "End-to-end project coordination",
          "Task & timeline management",
          "Resource allocation & budgeting",
          "Team collaboration & workflow optimization",
          "Performance tracking & reporting",
        ],
      },
      {
        category: "Customer Support & Communication",
        icon: "📌",
        items: [
          "Responding to customer inquiries professionally",
          "Handling complaints & issue resolution",
          "Live chat & email support",
          "Client relationship management",
          "CRM data entry & maintenance",
        ],
      },
      {
        category: "Research & Data Management",
        icon: "📌",
        items: [
          "Market & competitor research",
          "Data collection & organization",
          "Report creation & analysis",
          "Academic research",
          "Automation & tool optimization",
        ],
      },
    ];
  
    const tools = [
      "Google Workspace & Microsoft Office Suite",
      "CRM software (HubSpot, Zoho)",
      "Workflow automation (Google appscript)",
      "Task & project management tools (Asana, Trello, Notion)",
      "Communication tools (Slack, Zoom, Microsoft Teams)",
    ];
  
    return (
      <section id="services" className=" py-16 text-center pt-10">
        <div className="max-w-6xl mx-auto px-6 pt-20">
  
          <h2 className="text-4xl font-bold  text-white">My Services</h2>
          <p className="text-lg text-gray-400 mt-4">Here’s how I can help you</p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8 pt-10">
            {services.map((service, index) => (
              <div key={index} className="bg-[#FFFFFF1A] p-6 rounded-lg shadow-md text-left">
                <h3 className="text-2xl font-semibold text-white mb-3">{service.icon} {service.category}</h3>
                <ul className="list-none space-y-2 text-neutral-800">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-yellow-400 mr-2"><GrStatusGood size='20' /></span> <span className="text-[#999999]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
         
          <h2 className="text-4xl font-bold text-white  mt-16">Technical & Digital Tools</h2>
          <p className="text-lg text-gray-400 mt-4">Some of the tools I use</p>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 pt-10">
            {tools.map((tool, index) => (
              <div key={index} className="bg-[#FFFFFF1A] p-4 rounded-lg shadow-md text-yellow-400 font-semibold">
               <span className="text-yellow-400"> ✔  </span><span className="text-[#999999]">{tool}</span>
              </div>
            ))}
          </div>
        </div>
        
      </section>
    );
  }
  