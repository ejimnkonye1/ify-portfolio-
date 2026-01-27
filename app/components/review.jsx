import { FiStar } from "react-icons/fi";

export default function Reviews() {
  const reviews = [
    {
      name: "Client A",
      role: "Executive",
      text: "Ifebuche's leadership transformed our project delivery. Her ability to align teams and execute strategy is exceptional.",
    },
    {
      name: "Client B",
      role: "Operations Director",
      text: "Working with Ifebuche improved our customer experience strategy and operational efficiency. Her insights are always data-driven and actionable.",
    },
    {
      name: "Client C",
      role: "CEO",
      text: "A true strategic partner. Ifebuche combines project management mastery with mentorship and organizational foresight.",
    },
  ];

  return (
    <section id="review" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">What Clients Say</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Trusted by leaders and organizations to deliver results that matter.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:-translate-y-2 relative"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-6xl text-yellow-400/10 font-serif">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
