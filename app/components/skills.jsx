export default function Skills() {
  const skills = [
    "Calendar & Inbox Management",
    "Scheduling",
    "Appointment Coordination",
    "Chat Support",
    "Client Communication",
    "Conflict Resolution",
    "Analysis",
    "Workflow Optimization",
    "Time Management",
    "Data Entry",
    "Research",
    "Analysis",
    "Written & Verbal Communication",
    "Report & Presentation Preparation",
    "Quick Learning",
    "Process Optimization",
    "Automation",
    "Attention to Detail",
    "Problem-Solving",
    "Collaboration",
    "Strategic Thinking",
    "Team management",
    "Project management"
];
    
  
    return (
      <section id="skills" className="py-16 text-center ">
        <div className="max-w-6xl mx-auto px-6 pt-20">
          <h2 className="text-4xl font-bold   text-white">Skills</h2>
          <p className="text-lg text-gray-400 mt-4">Here are some of the skills I bring to the table</p>
          
        
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 pt-10">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#FFFFFF1A] shadow-md rounded-lg px-4 py-3 text-[#999999] font-semibold text-sm sm:text-base">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  