import { useState } from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineCalendar } from "react-icons/ai";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://email-green-chi.vercel.app/api/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Email sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setError(result.error || "Failed to send email.");
      }
    } catch {
      setError("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: AiOutlineCalendar,
      title: "Book a Consultation",
      description: "Schedule a free 15-minute call",
      link: "https://calendly.com/ifebuchesolution/meeting-with-ifebuche ",
      linkText: "Book Now",
    },
    {
      icon: AiOutlineLinkedin,
      title: "Connect on LinkedIn",
      description: "Let's grow our networks",
      link: "https://linkedin.com/in/ifebuche-juliet-obi",
      linkText: "Connect",
    },
    {
      icon: FiMail,
      title: "Send an Email",
      description: "I'll respond within 24 hours",
      link: "mailto:Ifebuchesolution@gmail.com",
      linkText: "Email Me",
    },
  ];

  return (
    <section id="contact" className="text-white py-20 lg:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Ready to Transform Your Projects?</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Let's discuss how I can help elevate your organization and drive measurable results.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
                <method.icon className="text-yellow-400 text-2xl" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{method.description}</p>
              <span className="text-yellow-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                {method.linkText} <FiArrowRight />
              </span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-700/50">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Info */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-10 lg:p-12 text-black">
              <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
              <p className="text-black/80 mb-8 leading-relaxed">
                Whether you need strategic consulting, project management expertise, or speaking engagements, I'm here to help your organization thrive.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="font-medium">Quick response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="font-medium">Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="font-medium">Tailored solutions for your needs</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              {message && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <p className="text-green-400">{message}</p>
                </div>
              )}
              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <p className="text-red-400">{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
