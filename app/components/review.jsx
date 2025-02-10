export default function Reviews() {
    const reviews = [
      {
        name: "Martins O.",
        text: "We're thrilled with the final outcome and are ready to implement it within our team. Thank you for your hard work and dedication; your efforts are truly appreciated.",
      },
      {
        name: "Sarah L.",
        text: "The service exceeded our expectations! The attention to detail, efficiency, and professionalism made the entire process seamless. Highly recommended!",
      },
      {
        name: "David K.",
        text: "Fantastic experience from start to finish. The quality of work, responsiveness, and commitment to excellence were outstanding. Will definitely return for future projects!",
      },
    ];
  
    return (
      <section id="reviews" className="bg-gray-100 py-16 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#000080]">Client Reviews</h2>
          <p className="text-lg text-gray-700 mt-4">See what our clients have to say:</p>
  
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
  