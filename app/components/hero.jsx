/* eslint-disable react/no-unescaped-entities */
import ify from '../images/ify.png'

const Hero = () => {
    return (
      <section id='home' className=" text-white min-h-screen flex items-center justify-center p-10 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 lg:pt-0 pt-[20px] mb-4 ">
          
          <div className="text-center md:text-left md:w-1/2">

          
            <p className="text-yellow-400 uppercase font-semibold">Hello,</p> 
         
            <h1 className="text-5xl font-bold mt-2">
            I’m <span className="text-yellow-400 "> Ifebuche!</span>
        
            </h1>
            <p className="text-md mt-3">Glad to have you here. Take a look around and discover how I can help support your business. </p>
            <div className="lg:mt-6 mt-3 space-x-4">
            <a href="#contact">
  <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold mb-4">
    Hire Me
  </button>
</a>
              <button className="border border-white px-6 py-3 rounded-full font-bold">
                My Works
              </button>
            </div>
          </div>
  
          
          <div className="md:w-1/2 lg:mt-8 md:mt-0">
            <img src={ify} alt="Ify" className="w-full" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  