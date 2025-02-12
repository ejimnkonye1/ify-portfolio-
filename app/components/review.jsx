export default function Reviews() {
    const reviews = [
      {
        name: "Martins O.",
        text: "We're thrilled with the final outcome and are ready to implement it within our team. Thank you for your hard work and dedication; your efforts are truly appreciated.",
      },
      {
        name: "Favour.",
        text: "Your countless calls, sleepless nights, and relentless determination to get the learners on track did not go unnoticed. You brought heart and drive to every effort, showing that success is built on teamwork and perseverance.",
      },
      {
        name: "David K.",
        text: "Fantastic experience from start to finish. The quality of work, responsiveness, and commitment to excellence were outstanding. Will definitely return for future projects!",
      },
    ];
  
    return (
      <section id="review" className="bg-[#000080]   py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#98FF98] ">Client Reviews</h2>
          <p className="text-lg text-gray-400 mt-4">See what our clients have to say</p>
  
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-10">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 italic">&quot;{review.text}&quot;</p>
                <h4 className="mt-4 font-semibold text-[#000080]">— {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  