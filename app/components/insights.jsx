import { FiArrowRight, FiBookOpen } from "react-icons/fi";

export default function Insights() {
  const articles = [
    {
      title: "The Project Manager's Secret Weapon",
      description: "Discover the essential tools and strategies that set successful project managers apart from the rest.",
      link: "https://medium.com/ifebuche-juliet/the-project-managers-secret-weapon-9505e110d784?sk=b25186f989a01ee86c7d14891104baf6",
    },
    {
      title: "When Intuition Misleads: What Real Leadership Demands",
      description: "Explore how data-driven decision making complements instinct in effective leadership.",
      link: "https://medium.com/ifebuche-juliet/when-intuition-misleads-what-real-leadership-demands-ec25ca222fa2?sk=239d834b04fb400957bb2470920e7860",
    },
    {
      title: "Why Remote Work Breaks Your Focus And How To Take Back Control",
      description: "Practical strategies to maintain productivity and reclaim your time in a remote work environment.",
      link: "https://medium.com/ifebuche-juliet/why-remote-work-breaks-your-focus-and-how-to-take-back-control-of-your-time-7d85688e0cd5?sk=2911ee36f989e9ab16bc41079818eb50",
    },
  ];

  return (
    <section id="insights" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Knowledge Sharing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Insights & Research</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Thoughts on leadership, project management, and professional growth.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Article Header */}
              <div className="p-8">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                  <FiBookOpen className="text-yellow-400 text-xl" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {article.description}
                </p>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-3 transition-all"
                >
                  Read More <FiArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="
https://medium.com/@ifebuchejulietobi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 font-medium transition-colors"
          >
            View all articles on Medium <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
