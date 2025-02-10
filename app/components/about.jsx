import ify from '../images/ify.png'

export default function About() {
    return (
      <section id='about' className="bg-[#000080] text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
       
          <div className="flex justify-center">
            <img 
              src={ify}
              alt="Ify" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#98FF98]">
              ABOUT ME
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Hi, I’m Ifebuche, an experienced Executive Administrative Assistant and Virtual Assistant passionate about efficiency, organization, and problem-solving. With over four years of experience, I specialize in streamlining operations, managing client communications, and optimizing business processes to help businesses run seamlessly.
              <br /><br />
              {/* I thrive in startup and fast-paced environments, ensuring that teams stay on track with structured workflows, clear communication, and proactive solutions. My expertise spans project management, customer support, data entry, research, and automation, making me a versatile asset to businesses looking for reliability and excellence.
              <br /><br /> */}
              {/* Beyond my professional work, I’m deeply passionate about mentorship and making an impact, especially in empowering others. I also have a keen interest in personality psychology, which helps me foster stronger team dynamics and client relationships.
              <br /><br />
              Whether you need a dedicated assistant to manage operations, a problem-solver to boost efficiency, or a strategist to help you scale, I’m here to help! Contact me or book a call today! */}
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="bg-[#98FF98] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#008B74] transition">
                Download Cv
              </button>
              {/* <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                My Works
              </button> */}
            </div>
          </div>
  
       
        </div>
      </section>
    );
  }
  