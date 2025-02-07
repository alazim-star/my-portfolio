import { FaBrain,  FaGlobe,FaMobile, FaMobileAlt, FaSearch, } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Details2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#03052c] to-[#1a1f71] text-white">
      {/* Navbar */}
      <nav className="container mx-auto py-4">
        <div className="navbar bg-opacity-30 backdrop-blur-lg shadow-lg px-6 rounded-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#1a1f71] rounded-box z-10 mt-3 w-52 p-2 shadow">
                <li><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
                
              </ul>
            </div>
            <a className="text-2xl font-bold text-white tracking-wide">AZIM</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink></li>
            
            </ul>
          </div>
          <div className="navbar-end">
          <button className="border-4 border-purple-900 
             from-purple-900 to-purple-500 px-6 py-2 rounded-lg hover:bg-purple-800 text-purple-400 hover:text-white transition">
                Resume
              </button>
          </div>
        </div>
      </nav>

      {/* Project Card */}
      <div className="container mx-auto mt-10 flex justify-center">
        <div className=" bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden transform transition ">
          <figure>
            <img src="https://i.ibb.co.com/6cS4QrFh/feff.jpg" alt="Project Image" className="w-full object-cover rounded-t-2xl" />
          </figure>
          <div className="p-6">
           <h2 className="text-3xl">Project Name : The Grand Palace </h2>
           <h2 className="text-xl">Uses : Modern Hotel Booking Platform</h2>
              <p className="text-justify text-white mb-3">The Grand Palace is a luxurious and user-friendly web application designed to manage hotel bookings, room availability, and guest services. The application provides an easy interface for customers to check room availability, make reservations, and manage their bookings. It also helps hotel management efficiently handle bookings, room assignments, and guest requests.</p>
            
            {/* Project Details */}
            <ul className="mt-4 space-y-3">
              <li><strong className="text-blue-300">Tech Stack:</strong>
              
            <li><strong className="">Frontend : </strong>
            React.js, Tailwind CSS, DaisyUI
            </li>
<li><strong className="">Tailwind CSS: </strong>
Tailwind CSS is used for styling to create a responsive and visually appealing layout.
</li>
<li><strong className="">React Router:</strong> Handles navigation between pages in the application.</li>
<li><strong className="">React Context API: </strong>Manages global state such as user authentication and cart items.</li>
<li><strong className="">React Fast Marquee:  </strong>For smooth scrolling text (used for reviews).</li>
<li><strong className="">Backend:  </strong>Node.js, Express.js</li>
<li><strong className="">Database: </strong>MongoDB</li>
<li><strong className="">Authentication : </strong>JWT (JSON Web Tokens)</li>
              
              
              </li>
              <ul><strong className="text-blue-300">Challenges Faced:</strong>
              <li>Balancing modern UI design while keeping the booking process simple and fast.</li> 
              <li>Developing a fair refund policy with automated transaction handling.</li> 
              <li>Managing guest data securely while complying with international data protection laws.</li> 
              <li>Ensuring no overbookings and real-time updates across platforms.</li> 
              <li>Ensuring the platform runs smoothly on mobile, tablets, and desktops.</li> 
              
              
              
              </ul>
              <ul><strong className="text-blue-300">Future Plans:</strong>
             
              </ul>
              <div className="max-w-4xl mx-auto mt-10 shadow-lg rounded-xl p-6">
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="flex items-center space-x-3">
            <FaBrain className="text-purple-600 text-2xl" />
            <p><strong>AI-Powered Booking Recommendations:</strong> Implement AI-based suggestions for guests based on past stays and preferences.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaSearch className="text-blue-600 text-2xl" />
            <p><strong>Dynamic Pricing System:</strong> Introduce real-time pricing adjustments based on demand, seasons, and customer trends.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMobileAlt className="text-green-600 text-2xl" />
            <p><strong>Virtual Hotel Tour with AR/VR</strong> Offer an immersive 3D/VR tour of hotel rooms before booking.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaSackDollar className="text-red-600 text-2xl" />
            <p><strong>Multi-Currency & Multi-Language Support:</strong> Add support for global travelers with real-time currency conversion & language options.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaGlobe className="text-indigo-600 text-2xl" />
            <p><strong>Multi-Language Support:</strong> Add support for multiple languages.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMobile className="text-orange-600 text-2xl" />
            <p><strong>Seamless Mobile App Integration :</strong>Launch a dedicated mobile app with one-click booking & push notifications for offers.</p>
          </div>
         
        </div>
      </div>

              <li><strong className="text-blue-300">GitHub Repo:</strong> <a href="https://github.com/alazim-star/b10a11-client-side" target="_blank" className="text-blue-400 hover:underline">View on GitHub</a></li>
              <li><strong className="text-blue-300">Live Project:</strong> <a href="https://b10a11-client-side.web.app/" target="_blank" className="text-blue-400 hover:underline">Visit Here</a></li>
            </ul>

            <div className="mt-6 flex justify-center">
              <Link to="/">
                <button className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-xl transition">
                 My Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details2;
