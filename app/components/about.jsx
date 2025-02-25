import 'animate.css';
import ify1 from '../images/c.svg';

export default function About() {
  return (
    <section id='about' className="text-white px-6 py-8 md:py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="hidden lg:flex justify-center order-2 md:order-1 animate__animated animate__fadeInLeft">
          <img
            src={ify1}
            alt="Ify"
            className="w-full max-w-md bg-transparent object-cover transform  "
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left order-1 md:order-2 animate__animated animate__fadeInRight">
          <h1 className="text-4xl md:text-4xl font-bold text-yellow-400 mb-6">
            ABOUT ME
          </h1>

          <p className="text-md md:text-md
          l leading-relaxed mb-8">
            Hi, I’m Ifebuche, your strategic partner in productivity and support. With over four years of experience, I specialize in streamlining operations, optimizing workflows, and ensuring seamless business efficiency. From managing client communications to refining business processes, I help businesses stay organized and thrive.
            <br /><br />
            My expertise spans project management, customer support, research, and administrative services, making me a versatile asset for businesses seeking reliability and excellence.
            <br /><br />
            Let’s talk about your goals and how I can support you. Send a message! Thanks for stopping by, and I look forward to working together.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
          <a href="https://calendly.com/ifebuchesolution/15min" target='_blank' rel="noopener noreferrer">
            <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105">
              Book a Free Call
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}