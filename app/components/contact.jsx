
import ify from '../images/ify.png'
import {  FiMail, } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineCalendar } from "react-icons/ai";
const Contact = () => {
    return (
      <section id="contact" className="bg-[#000080]  text-white py-16 px-6">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-[#98FF98]">Contact Me</h2>
          <p className="text-gray-400 mb-8 text-lg">
          Empowering Excellent

          </p>
  
         

          <div className="grid md:grid-cols-4 gap-8 mb-12 text-center pt-10 mb-[150px]">
          
          <div>
            <div className="w-[100px] h-[100px]  mx-auto bg-gray-800 rounded-full flex items-center justify-center">
              <AiOutlineCalendar className="text-[#98FF98] text-[30px]" />
            </div>
            <h4 className="mt-4 font-semibold uppercase text-[17px] mb-4">Calendly</h4>
            <p className="text-gray-400">
              <a
                href="https://calendly.com/ifebuchejulietobi/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#98FF98]  hover:underline"
              >
                Book a Call
              </a>
            </p>
          </div>

    
          <div>
            <div className="w-[100px] h-[100px]  mx-auto bg-gray-800 rounded-full flex items-center justify-center">
              <AiOutlineLinkedin className="text-[#98FF98] text-[30px]" />
            </div>
            <h4 className="mt-4 font-semibold uppercase text-[17px] mb-4">LinkedIn</h4>
            <p className="text-gray-400">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#98FF98]   hover:underline"
              >
                Connect with me
              </a>
            </p>
          </div>

          
          <div>
            <div className="w-[100px] h-[100px] mx-auto bg-gray-800 rounded-full flex items-center justify-center">
              <FiMail className="text-[#98FF98]  text-[30px]" />
            </div>
            <h4 className="mt-4 mb-4 font-semibold uppercase text-[17px]">Email</h4>
            <p className="text-gray-400">
              <a href="mailto:info@yoursite.com" className="text-[#98FF98]   hover:underline">
                info@yoursite.com
              </a>
            </p>
          </div>
     
          <div>
            <div className="w-[100px] h-[100px] mx-auto bg-gray-800 rounded-full flex items-center justify-center">
              <FiMail className="text-[#98FF98]  text-[30px]" />
            </div>
            <h4 className="mt-4 mb-4 font-semibold uppercase text-[17px]">Email</h4>
            <p className="text-gray-400">
              <a href="mailto:info@yoursite.com" className="text-[#98FF98]   hover:underline">
                info@yoursite.com
              </a>
            </p>
          </div>
          </div>
  
       
          <div className="md:flex md:items-center md:justify-center h-[450px]  shadow-lg bg-white z-20 p-0 rounded-lg">
  <div className="md:w-1/2 bg-[#336699] rounded-l-lg overflow-hidden ">
    <img src={ify} alt="Profile" className="w-full rounded-l-lg h-[450px]  " />
  </div>
  <div className="md:w-1/2 p-8  rounded-r-lg">
    <form>
      <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded bg-gray-200 text-black" />
      <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded bg-gray-200 text-black" />
      <input type="text" placeholder="Subject" className="w-full p-3 mb-4 rounded bg-gray-200 text-black" />
      <textarea placeholder="Message" className="w-full p-3 mb-4 rounded bg-gray-300 text-black h-32"></textarea>
      <button className="w-full bg-[#98FF98] py-3 rounded font-semibold hover:bg-[#88FF88] transition duration-200">SEND MESSAGE</button>
    </form>
  </div>
</div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  