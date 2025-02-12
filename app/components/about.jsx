
import ify1 from '../images/ify1.png'
import './scroll.css'
export default function About() {
    return (
      <section id='about' className="bg-[#000080] text-white min-h-screen flex items-center justify-center px-6 pt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-10">
       
          <div className="flex justify-center order-2 md:order-1">
            <img 
              src={ify1}
              alt="Ify" 
              className="w-full max-w-md rounded-lg "
            />
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h1 className="text-4xl md:text-4xl font-bold text-[#98FF98] ">
              ABOUT ME
            </h1>
            <p className="mt-4 text-lg md:text-xl">
 






              Hi, I’m Ifebuche, an experienced Executive Administrative Assistant and Virtual Assistant passionate about efficiency, organization, and problem-solving. With over four years of experience, I specialize in streamlining operations, managing client communications, and optimizing business processes to help businesses run seamlessly.
              <br /><br />

            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="bg-[#98FF98] animate__animated animate__bounce text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#008B74] transition">
                Download Cv
              </button>
      
            </div>
          </div>
  
       
        </div>
      </section>
    );
  }
  