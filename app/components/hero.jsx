/* eslint-disable react/no-unescaped-entities */
import ify from '../images/ify.png'

const Hero = () => {
    return (
      <section id='home' className="bg-[#000080] text-white h-screen flex items-center justify-center p-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 lg:pt-20 pt-20">
          
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-[#98FF98] uppercase font-semibold">Hello!</p>
            <h1 className="text-5xl font-bold mt-2">
              I'm <span className="text-[#98FF98] ">Ify Juilet</span>
            </h1>
            <p className="text-lg mt-3">Welcome to the digital hub of Juliet, your virtual assistant extraordinaire</p>
            <div className="mt-6 space-x-4">
              <button className="bg-[#98FF98] text-black px-6 py-3 rounded-full font-bold mb-4">
                Hire Me
              </button>
              <button className="border border-white px-6 py-3 rounded-full font-bold">
                My Works
              </button>
            </div>
          </div>
  
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={ify} alt="Ify" className="w-full" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  