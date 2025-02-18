import 'animate.css';
import ify1 from '../images/ify2.png'

export default function About() {
    return (
      <section id='about' className=" text-white   px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-8 items-center pt-20">
       
          <div className="flex justify-center order-2 md:order-1">
            <img 
              src={ify1}
              alt="Ify" 
              className="w-full max-w-md rounded-lg hidden lg:flex "
            />
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h1 className="text-4xl md:text-4xl font-poppins font-bold text-white ">
              ABOUT ME
            </h1>

            <p className="pt-4 font-poppins text-[16px] md:text-[18px] italic font-sans leading-loose">
            Hi, I’m Ifebuche, your strategic partner in productivity and support. With over four years of experience, I specialize in streamlining operations, optimizing workflows, and ensuring seamless business efficiency. From managing client communications to refining business processes, I help businesses stay organized and thrive.
My expertise spans project management, customer support, research, and administrative services, making me a versatile asset for businesses seeking reliability and excellence.
Let’s talk about your goals and how I can support you. Send a message! Thanks for stopping by, and I look forward to working together.

              <br /><br />

            </p>
            <div className="pt-6 flex justify-center md:justify-start gap-4">
              <button className="bg-yellow-600  text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition font-bold">
              Book a free call 
              </button>
      
            </div>
          </div>
  
       
        </div>
      </section>
    );
  }
  