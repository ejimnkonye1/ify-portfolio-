import { useState } from "react";
import {  FiMail, } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineCalendar } from "react-icons/ai";
import ify from '../images/ify.png'
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
      } else {
        setError(result.error || "Failed to send email.");
      }
    } catch (error) {
      setError("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="text-white py-16 px-6">
      <div className="container mx-auto text-center max-w-6xl pt-20">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">Contact Me</h2>
        <p className="text-gray-400 mb-8 text-lg">Empowering Excellence</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 text-center pt-10 mb-[150px]">
            <div className=''>
                <div className="w-[100px] h-[100px] mx-auto bg-gray-800 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <AiOutlineCalendar className="text-yellow-400 text-[30px]" />
                </div>
                <h4 className="mt-4 font-semibold uppercase text-[17px] mb-4 hover:scale-90 transition-transform duration-300">Calendly</h4>
                <p className="text-gray-400">
                    <a
                        href="https://calendly.com/ifebuchejulietobi/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#999999] hover:underline"
                    >
                        Book a Call
                    </a>
                </p>
            </div>

            <div className=''>
                <div className="w-[100px] h-[100px] mx-auto bg-gray-800 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <AiOutlineLinkedin className="text-yellow-400 text-[30px]" />
                </div>
                <h4 className="mt-4 font-semibold uppercase text-[17px] mb-4 hover:scale-90 transition-transform duration-300">LinkedIn</h4>
                <p className="text-gray-400">
                    <a
                        href="https://linkedin.com/in/ifebuche-juliet-obi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#999999] hover:underline"
                    >
                        Connect with me
                    </a>
                </p>
            </div>

            <div className=''>
                <div className="w-[100px] h-[100px] mx-auto bg-gray-800 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <FiMail className="text-yellow-400 text-[30px]" />
                </div>
                <h4 className="mt-4 mb-4 font-semibold uppercase text-[17px] hover:scale-90 transition-transform duration-300">Email</h4>
                <p className="">
                    <a href="mailto:Ifebuchesolution@gmail.com" className="text-[#999999] hover:underline">
                        Email 
                    </a>
                </p>
            </div>

         
        </div>
  
       

        <div className="md:flex md:items-center md:justify-center lg:h-auto shadow-lg bg-white z-20 p-0 rounded-lg">
          <div className="md:w-1/2 bg-[#343a40] rounded-l-lg overflow-hidden">
            <img src={ify} alt="Profile" className="w-full rounded-l-lg lg:h-auto" />
          </div>
          <div className="md:w-1/2 p-8 rounded-r-lg">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 mb-4 rounded bg-gray-200 text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 rounded bg-gray-200 text-black"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 mb-4 rounded bg-gray-200 text-black"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 mb-4 rounded bg-gray-300 text-black h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-400 py-3 rounded font-semibold transition duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>

            {/* Show status messages */}
            {message && <p className="text-green-500 mt-4">{message}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}