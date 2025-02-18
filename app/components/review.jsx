export default function Reviews() {
    const reviews = [
      {
        name: "Martin.",
        text: "We're thrilled with the final outcome and are ready to implement it within our team. Thank you for your hard work and dedication; your efforts are truly appreciated.",
      },
      {
        name: "Favour.",
        text: "Your countless calls, sleepless nights, and relentless determination to get the learners on track did not go unnoticed. You brought heart and drive to every effort, showing that success is built on teamwork and perseverance.",
      },
      {
        name: "Blessing.",
        text: "You inspire not just through your words but through your actions, creating an environment where growth and collaboration thrive. One of the things I admire most about you is your approach to conflict resolution. ",
      },
    ];
  
    return (
      <section id="review" className="   py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white ">Client Reviews</h2>
          <p className="text-lg text-gray-400 mt-4">See what our clients have to say</p>
  
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-10">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#FFFFFF1A]  p-6 rounded-lg shadow-md">
                <p className="text-[#999999] italic">&quot;{review.text}&quot;</p>
                <h4 className="mt-4 font-semibold text-yellow-400">— {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  