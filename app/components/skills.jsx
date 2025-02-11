export default function Skills() {
    const skills = [
      "Calendar Management", "Inbox Management", "Chat Support", "Scheduling", "Appointment Coordination",
      "Accurate and Efficient Data Input", "Excellent Written and Verbal Communication", "Gathering and Analyzing Data",
      "Time Management", "Prioritization", "Project Management", "Multitasking", "Presentation",
      "Attention to Detail", "Quick Learning", 
      "Problem-Solving", "Collaboration"
    ];
  
    return (
      <section id="skills" className="bg-[#000080]   py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#98FF98] ">Skills</h2>
          <p className="text-lg text-gray-400 mt-4">Here are some of the skills I bring to the table</p>
          
        
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 pt-10">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg px-4 py-3 text-gray-900 font-semibold text-sm sm:text-base">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  