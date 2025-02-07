import { FaBrain, FaCheckCircle, FaFileAlt, FaGamepad, FaGlobe, FaLink, FaMobileAlt, FaSearch, FaUniversity } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Details3 = () => {
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
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#1a1f71]   rounded-box z-10 mt-3 w-52 p-2 shadow">
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
            <img src="https://i.ibb.co.com/PG6R37B0/ss.jpg" alt="Project Image" className="w-full object-cover rounded-t-2xl" />
          </figure>
          <div className="p-6">
           <h2 className="text-3xl">Project Name :Lingo Bingo</h2>
           <h2 className="text-xl">Uses : Word Learning Web Application</h2>
              <p className="text-justify text-white mb-3">Lingo Bingo is a web application designed to enhance language learning through an interactive bingo game. Users can practice vocabulary and phrases in a fun, engaging manner, reinforcing their language skills.</p>
            
            {/* Project Details */}
            <ul className="mt-4 space-y-3">
              <li><strong className="text-blue-300">Tech Stack:</strong>
              
            <li><strong className="">React : </strong>
         The client-side is built with React.js to provide an interactive user interface.
            </li>
<li><strong className="">Tailwind CSS: </strong>
Tailwind CSS is used for styling to create a responsive and visually appealing layout.
</li>
<li><strong className="">React Router:</strong> Handles navigation between pages in the application.</li>
<li><strong className="">React Context API: </strong>Manages global state such as user authentication and cart items.</li>
<li><strong className="">React Fast Marquee:  </strong>For smooth scrolling text (used for reviews).</li>
<li><strong className="">State Management: </strong>React useState, useEffect</li>
<li><strong className="">Authentication: </strong>Firebase Auth</li>
              
              
              </li>
              <ul><strong className="text-blue-300">Challenges Faced:</strong>
              <li>-Adapting phrases and vocabulary based on regional language variations.</li>
              <li>-Implementing speech-to-text AI for real-time pronunciation assessment.</li>
              <li>-Optimizing UI/UX for mobile and tablet users.</li>
              <li>-Ensuring the app is accessible to users with disabilities.</li>
              <li>-Storing and retrieving large sets of words, phrases, and user progress efficiently.</li>
              <li>-Maintaining smooth performance even with many users online.</li>
              <li>-Various types of error.</li>
             
              
               </ul>
              <ul><strong className="text-blue-300">Future Plans:</strong>
             
              </ul>
              <div className="max-w-4xl mx-auto mt-10 shadow-lg rounded-xl p-6">
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="flex items-center space-x-3">
            <FaBrain className="text-purple-600 text-2xl" />
            <p><strong>AI-Based Personalized Learning Paths :</strong> Implement AI-driven recommendations for vocabulary based on users' progress.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaSearch className="text-blue-600 text-2xl" />
            <p><strong>Live Tutor Integration :</strong> Allow users to join live sessions with language tutors for real-time practice.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMobileAlt className="text-green-600 text-2xl" />
            <p><strong>Mobile App:</strong> Develop a cross-platform app for easy access.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaCheckCircle className="text-red-600 text-2xl" />
            <p><strong>Augmented Reality (AR) Vocabulary Learning</strong> Introduce AR-based vocabulary learning to enhance word recognition.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaGlobe className="text-indigo-600 text-2xl" />
            <p><strong>Multi-Language Support:</strong> Add support for multiple languages.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaUniversity className="text-orange-600 text-2xl" />
            <p><strong>Offline Mode for Learning on the Go:</strong> Develop an offline mode where users can play without internet access.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaFileAlt className="text-teal-600 text-2xl" />
            <p><strong>Customizable Bingo Boards :</strong> Let users create personalized bingo boards with their favorite words and phrases.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaGamepad className="text-yellow-600 text-2xl" />
            <p><strong>Voice Recognition for Speaking Practice: </strong> Improve speech recognition to give users feedback on pronunciation.</p>
          </div>
      
        </div>
      </div>

              <li><strong className="text-blue-300">GitHub Repo:</strong> <a href="https://github.com/alazim-star/b10-a9-authentication?tab=readme-ov-file" target="_blank" className="text-blue-400 hover:underline">View on GitHub</a></li>
              <li><strong className="text-blue-300">Live Project:</strong> <a href="https://b10-a9-authentication.web.app/" target="_blank" className="text-blue-400 hover:underline">Visit Here</a></li>
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

export default Details3;
