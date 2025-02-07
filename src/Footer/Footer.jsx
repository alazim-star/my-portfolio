import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Footer = () => {
    return (
        <div>
       <footer className="footer sm:footer-horizontal footer-center bg-[#04062f] text-[#8e58fb] rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    {/* Social Icons */}
             <div className="flex space-x-4 justify-center lg:justify-start text-xl">
               <a href="https://www.facebook.com/share/18e8uNCbHE/" className="text-[#8e58fb] hover:text-blue-700">
               <FaFacebook />
               </a>
               <a href="https://www.linkedin.com/in/abdullah-al-azim-b15bb118a" className="text-[#8e58fb] hover:text-blue-300">
                <FaLinkedin/>
               </a>
               <a href="https://github.com/alazim-star" className="text-[#8e58fb] hover:text-blue-700">
               <FaGithub/>
               </a>
               <a href="https://mail.google.com/" className="text-[#8e58fb] hover:text-red-500">
               <SiGmail />
               </a>
             
             </div>
  </nav>
  
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by AZIM</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;