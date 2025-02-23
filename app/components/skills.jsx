export default function Skills() {
  const skills = [
    "Calendar & Inbox Management",
    "Written & Verbal Communication",
    "Appointment Coordination",
    "Report & Presentation Preparation",
    "Client Communication",
    "Conflict Resolution",
    "Workflow Optimization",
    "Time Management",
    "Data Entry",
    "Research",
    "Team Management",
    "Scheduling",
    "Chat Support",
    "Quick Learning",
    "Process Optimization",
    "Automation",
    "Attention to Detail",
    "Problem-Solving",
    "Collaboration",
    "Strategic Thinking",
    "Project Management" // Ensure this is spelled correctly
  ];

  return (
    <section id="skills" className="py-16 text-center">
      <div className="max-w-6xl mx-auto px-6 pt-20">
        <h2 className="text-4xl font-bold text-yellow-400">Skills</h2>
        <p className="text-lg text-gray-400 mt-4">Here are some of the skills I bring to the table</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 pt-10">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#FFFFFF1A] shadow-md rounded-lg px-4 py-3 text-[#999999] font-semibold text-sm sm:text-base break-words hover:scale-90 transition-transform duration-300">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}