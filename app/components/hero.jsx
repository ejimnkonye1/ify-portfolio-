import ify from '../images/ify.png'

const Hero = () => {
  return (
    <section id='home' className="text-white min-h-screen flex items-center justify-center px-6 pt-24 pb-16 lg:pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-yellow-400/10 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-medium tracking-wide">Senior Project Manager & Strategic Consultant</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-yellow-400">Ifebuche Juliet</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
              Empowering organizations to achieve seamless execution, measurable growth, and lasting impact.
            </p>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              I help businesses align strategy, operations, and teams turning complex challenges into successful outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://calendly.com/ifebuchesolution/meeting-with-ifebuche" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/25">
                  Book a Call
                </button>
              </a>
              <a href="https://forms.gle/A6paaJTMatAE3nmt8" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto border-2 border-white hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-full font-bold transition-all duration-300">
                  Explore My Work
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-yellow-400">5+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-yellow-400">25+</p>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-yellow-400">100%</p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-2xl"></div>
              <img
                src={ify}
                alt="Ifebuche Juliet"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
