import { FaFacebook, FaGithub, FaHeadphones, FaLinkedin,FaSchool, FaUniversity, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import {Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { Map, Marker } from "pigeon-maps"; 
import Lottie from "react-lottie";
import profileAnimation from "../assets/lottie/lottiee.json"; 
import Marquee from "react-fast-marquee";
import ReactRating from "react-rating";
import { FaStar } from "react-icons/fa"; 
import '@smastrom/react-rating/style.css';
import SectionTitle from "./SectionTitle";
const Banner = () => {
  const { hash } = useLocation();
  const [reviews, setReviews] = useState([]);


  const Location = [
    { name: "Jessore, Bangladesh", location: [23.166667, 89.216667] },
    { name: "Khulna, Bangladesh", location: [22.8158, 89.5681] },
    { name: "Dhaka, Bangladesh", location: [23.8103, 90.4125] },
  ];

  useEffect(() => {
    fetch('review.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);


  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);
  // Lottie Animation Configuration
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: profileAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };




  return (
    <div
    style={{
      backgroundImage: "url('https://i.ibb.co/60hV0wgs/peakpx.jpg')",
    }}
    className="bg-cover bg-center"
  >
    <div className="relative flex flex-col container mx-auto text-white">
      {/* Home Section */}
      <section id="home">
        <div className="flex flex-col justify-center  md:flex-row items-center mt-20">
          {/* Text Section */}
          <div className="text-center md:text-left  space-y-5">
            <motion.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
           <span className="">   Hi ! I’m </span><br />
              <span className="text-5xl bg-gradient-to-r from-[#6a64f1] to-purple-500 bg-clip-text text-transparent">
                Abdullah Al Azim
              </span>
            </motion.h1>

            <h2 className="text-2xl font-semibold text-blue-300 mt-2">
              Front-End{" "}
              <span className="underline decoration-pink-500">Web Developer</span>
            </h2>
            <p className="text-gray-300 mt-3 max-w-md ">
              I specialize in building modern{" "}
              <span className="font-medium text-blue-300">React</span> applications
              with <span className="font-medium text-blue-300">Java Scripts,Tailwind CSS</span>.
              Based in <span className="font-medium text-blue-300">Khulna, Bangladesh</span>.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
              <a href="https://www.facebook.com/" className="text-blue-500 hover:text-blue-700">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/" className="text-blue-300 hover:text-blue-500">
                <FaLinkedin />
              </a>
              <a href="https://github.com/" className="text-gray-400 hover:text-gray-300">
                <FaGithub />
              </a>
              <a href="https://mail.google.com/" className="text-red-400 hover:text-red-500">
                <SiGmail />
              </a>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <button className="border-4 border-purple-900 
             from-purple-900 to-purple-500 px-6 py-2 rounded-lg hover:bg-purple-800 text-purple-400 hover:text-white transition">
                Resume
              </button>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </section>


 {/* About Section */}
 <section id="about" className=" px-6">
  <SectionTitle heading='about me'></SectionTitle>
  <div className="flex flex-col lg:flex-row items-center gap-10">
    
    {/* Text Content */}
    <div className="lg:w-1/2 space-y-4">
     
      <SectionTitle subheading='I build websites that solve user problems'></SectionTitle>
      <p className="text-gray-300">
        I am a passionate frontend developer with <b>1 year of experience</b>. 
        I have successfully completed <b>50+ projects</b> and currently working on 2 projects. 
        My expertise includes <b>Css,JavaScripts,React, Tailwind, and DaisyUI</b>.
      </p>

      {/* Details */}
      <div className="space-y-2">
        <p><b>📍 Location:</b> Jessore, Khulna, Bangladesh</p>
        <p><b>🎓 Education:</b> Bsc in Electrical and Electronics Engineering</p>
        <p><b>💡 Interests:</b> Traveling, Cricket, Football, Design, Reading Books,Exercise</p>
        <p><b>📩 Email:</b> <a href="azimalabdullah@gmail.com" className="text-blue-400 underline">azimalabdullah@gmail.com</a></p>
      </div>

      {/* Future Goals */}
      <div className="mt-6 p-4 border-l-4 border-primary bg-[#101342] rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-primary"> Future Goals</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-2">
          <li>Become a full-stack developer by mastering backend technologies.</li>
          <li>Contribute to open-source projects and help the developer community.</li>
          <li>Work on AI-powered web applications.</li>
          <li>Build my own startup focused on innovative tech solutions.</li>
        </ul>
      </div>
    </div>

    {/* Image */}
 
  <img
    src="https://i.ibb.co/bhZgFKP/profile-pic.jpg"
    className="lg:w-1/2 max-w-sm rounded-full border-8  border-[#9f4fff]"
    alt="Developer"
  />


  </div>
</section>







        {/* Skills Section */}
        <section id="skills" className="mt-20">
        <SectionTitle heading='my skills'></SectionTitle>

        <h1 className="text-center mt-10 text-3xl font-bold ">Front-End</h1>
          <div className="flex flex-wrap gap-4 mt-6 items-center justify-center">
            {[
              "https://i.ibb.co/qFLYLgPv/images-2-removebg-preview.png",
              "https://i.ibb.co/FLHCDRBj/css3-removebg-preview.png",
              "https://i.ibb.co/pBPjT0HR/images-1.png",
              "https://i.ibb.co/SwmkFr43/React-icon-svg-removebg-preview.png",
              "https://i.ibb.co/HTkTd3CZ/next-dot-js-icon-size-256-removebg-preview.png",
           
            ].map((skill, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 rounded-3xl w-32 h-32 flex justify-center items-center">
                <img className="p-3" src={skill} alt="Skill" />
              </div>
            ))}
          </div>
          <h1 className="text-center mt-10 text-3xl font-bold ">Back-End</h1>
          <div className="flex flex-wrap gap-4 mt-6 items-center justify-center">
         
            {[
              "https://i.ibb.co.com/MkY0WW6N/Node-js-logo-svg-removebg-preview.png",
           "https://i.ibb.co.com/v4y4V3Ny/images-5-removebg-preview.png",
           "https://i.ibb.co.com/x8jktj7x/1721188761705-removebg-preview.png",
    "https://i.ibb.co.com/5gRPnWkB/Firebase-logo-removebg-preview.png",
    "https://i.ibb.co.com/chkZ4Jnj/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail-removebg-preview.png",
           
            ].map((skill, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 rounded-3xl w-32 h-32 flex justify-center items-center">
                <img className="p-3" src={skill} alt="Skill" />
              </div>
            ))}
          </div>



        </section>

        {/* Education Section */}
        <section id="education" className="mt-10 px-4 md:px-8 lg:px-12">
  <SectionTitle heading="Education"></SectionTitle>
  <div className="hero flex flex-col lg:flex-row items-center">
    <div className="w-full lg:w-1/2 space-y-3 text-center lg:text-left">
      <h1 className="text-3xl md:text-4xl lg:text-5xl">
        I'm great in what I do <br />and I'm loving it
      </h1>
      <p className="text-gray-300 flex items-center justify-center lg:justify-start gap-2 mt-6 md:mt-10">
        <FaUniversity />
        Daffodil International University
      </p>
      <h2 className="text-lg md:text-xl">B.Sc in EEE (2013 - 2017)</h2>
      <p className="text-gray-300 flex items-center justify-center lg:justify-start gap-2">
        <FaSchool />
        Al Hera College Jessore
      </p>
      <h2 className="text-lg md:text-xl">HSC in Science (2010 - 2012)</h2>
    </div>
    <div className="space-y-4 w-full lg:w-1/2 mt-8 lg:mt-0">
      {[
        { title: "Communication", value: 95 },
        { title: "Problem Solving", value: 70 },
        { title: "Web Application", value: 90 },
        { title: "Error Handling", value: 85 },
        { title: "Interested in Learning", value: 95 },
      ].map((skill, index) => (
        <div key={index} className="w-full">
          <div className="flex justify-between text-sm md:text-base">
            <p>{skill.title}</p>
            <p>{skill.value}%</p>
          </div>
          <progress
            className="progress progress-primary w-full md:w-[500px]"
            value={skill.value}
            max="100"
          ></progress>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Skills Explore  */}
<section className="mt-10">
<SectionTitle heading='Skills Explore '></SectionTitle>

<div>
<Marquee pauseOnHover speed={50}>

<div className="flex flex-wrap gap-4 mt-6 items-center justify-center">
            {[
              "https://i.ibb.co/qFLYLgPv/images-2-removebg-preview.png",
              "https://i.ibb.co/FLHCDRBj/css3-removebg-preview.png",
              "https://i.ibb.co/pBPjT0HR/images-1.png",
              "https://i.ibb.co/SwmkFr43/React-icon-svg-removebg-preview.png",
              "https://i.ibb.co/HTkTd3CZ/next-dot-js-icon-size-256-removebg-preview.png",

              "https://i.ibb.co.com/MkY0WW6N/Node-js-logo-svg-removebg-preview.png",
              "https://i.ibb.co.com/v4y4V3Ny/images-5-removebg-preview.png",
              "https://i.ibb.co.com/x8jktj7x/1721188761705-removebg-preview.png",
              "https://i.ibb.co.com/sdTsd0tX/images-3-removebg-preview.png",
              "https://i.ibb.co.com/5gRPnWkB/Firebase-logo-removebg-preview.png",
              "https://i.ibb.co.com/chkZ4Jnj/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail-removebg-preview.png",
              "https://i.ibb.co.com/3yh1qb7X/tailwind-css-logo-png-seeklogo-354675-removebg-preview.png",
              "https://i.ibb.co.com/BHRPQqWD/download-3-removebg-preview.png",
              "https://i.ibb.co.com/Z6J4Wfh9/1-Mo-09-Vngs5t-o-WGq-HZu-Ptg-removebg-preview.png",
            ].map((skill, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 rounded-3xl w-32 h-32 flex justify-center items-center">
                <img className="p-3" src={skill} alt="Skill" />
              </div>
            ))}
          </div>



</Marquee>
</div>
</section>
  

{/* project section  */}
<section id="projects" className="mt-10 px-4 md:px-8 lg:px-12">
  <SectionTitle heading="My latest awesome Projects"></SectionTitle>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 justify-center">
    {/* Card 1 */}
    <div className="border card shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl rounded-tl-[150px] rounded-br-[150px] w-full sm:w-[400px] mx-auto">
      <figure>
        <img src="https://i.ibb.co/Qv0xwPdG/ac.jpg" alt="Project Image" className="h-64 object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Scholar</h2>
        <p>Scholarship Management Web Application</p>
        <p>
          The Scholarship Management Web Application provides a user-friendly interface to view, apply, and manage scholarships. Users can also give reviews, get detailed scholarship information, and register/login to access specific features.
        </p>
        <div className="card-actions justify-start">
          <Link to="/details1">
            <button className="border-4 border-purple-900 from-purple-900 to-purple-500 px-6 py-2 rounded-lg hover:bg-purple-800 text-purple-400 hover:text-white transition">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="border card shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl rounded-tl-[150px] rounded-br-[150px] w-full sm:w-[400px] mx-auto">
      <figure>
        <img src="https://i.ibb.co/6cS4QrFh/feff.jpg" alt="Project Image" className="h-64 object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">The Grand Palace</h2>
        <p className="text-sm">Modern Hotel Booking Platform</p>
        <p>
          The Grand Palace is a luxurious and user-friendly web application designed to manage hotel bookings, room availability, and guest services. The application provides an easy interface for customers to check room availability, make reservations, and manage their bookings.
        </p>
        <div className="card-actions justify-start">
          <Link to="/details2">
            <button className="border-4 border-purple-900 from-purple-900 to-purple-500 px-6 py-2 rounded-lg hover:bg-purple-800 text-purple-400 hover:text-white transition">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="border card shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl rounded-tl-[150px] rounded-br-[150px] w-full sm:w-[400px] mx-auto">
      <figure>
        <img src="https://i.ibb.co/PG6R37B0/ss.jpg" alt="Project Image" className="h-64 object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Lingo Bingo</h2>
        <p>Word Learning Web Application</p>
        <p>
          Lingo Bingo is a web application designed to enhance language learning through an interactive bingo game. Users can practice vocabulary and phrases in a fun
        </p>
        <div className="card-actions justify-start">
          <Link to="/details3">
            <button className="border-4 border-purple-900 from-purple-900 to-purple-500 px-6 py-2 rounded-lg hover:bg-purple-800 text-purple-400 hover:text-white transition">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="mt-20 pb-20 px-4 md:px-6 lg:px-12">
  <SectionTitle heading="Contact Me"></SectionTitle>

  <p className="text-gray-300 mt-2 text-center">Email: azimalabdullah@gmail.com</p>

  <div className="p-6 rounded-lg shadow-md mt-10 bg-transparent text-white flex flex-col lg:flex-row gap-5">
    {/* Contact Information */}
    <div className="w-full lg:w-1/2 space-y-4">
      <div>
        <label className="text-sm font-medium flex gap-3">
          <FaHeadphones /> PHONE:
        </label>
        <p>+8801782180042</p>
      </div>
      <div>
        <label className="text-sm font-medium flex gap-3">
          <FaWhatsapp /> Whats-App:
        </label>
        <p>+8801782180042</p>
      </div>
      <div>
        <label className="text-sm font-medium flex gap-3">
          <HiOutlineMailOpen /> EMAIL:
        </label>
        <p>azimalabdullah@gmail.com</p>
      </div>
      <div>
        <label className="text-sm font-medium flex gap-3">
          <FaLocationDot /> ADDRESS:
        </label>
        <p>Jessore, Khulna, Bangladesh</p>
      </div>

      {/* Map Section */}
      <div className="w-full p-4 rounded-lg shadow-md">
        <div className="w-full h-[300px] md:h-[400px]">
          <Map height={300} defaultCenter={[20.5937, 78.9629]} defaultZoom={2}>
            {Location.map((local, index) => (
              <Marker
                key={index}
                width={50}
                anchor={local.location}
                color="red"
                onClick={() => alert(`This is ${local.name}`)}
              />
            ))}
          </Map>
        </div>
      </div>
    </div>

    {/* Message Section */}
    <div className="w-full lg:w-1/2 mt-10 lg:mt-0 p-6 md:p-10 bg-[#101342] rounded-lg shadow-lg">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-white">FULL NAME:</label>
            <input
              type="text"
              className="bg-white text-black input border-gray-500 rounded-xl border-2 w-full p-2"
              placeholder="Your full name"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-white">EMAIL ADDRESS:</label>
            <input
              type="email"
              className="bg-white text-black input border-gray-500 rounded-xl border-2 w-full p-2"
              placeholder="your email@gmail.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white">YOUR MESSAGE:</label>
          <textarea
            className="bg-white text-black textarea border-gray-500 rounded-xl border-2 w-full p-2"
            placeholder="Write your message"
          ></textarea>
        </div>
        <button className="border-4 border-purple-900 from-purple-900 to-purple-500 px-6 py-2 rounded-lg hover:bg-purple-800 text-purple-400 hover:text-white transition">
          Send Me Message
        </button>
      </div>
    </div>
  </div>
</section>


{/* review section  */}
<div className="container mx-auto px-4">
      <section className="mb-10">
<SectionTitle heading='What my client have
    to say      about me'></SectionTitle>

        {reviews.length > 0 ? (
          <Marquee pauseOnHover speed={50}>
            {reviews.map((review) => (
              <div
                key={review._id}
                className="flex flex-col items-center mx-8 p-6 bg-gradient-to-r from-teal-400 via-blue-500  shadow-lg rounded-lg max-w-xs transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  className="w-20 h-20 rounded-full mb-4 border-4 border-white transform transition-all duration-300 hover:scale-110"
                  src={review.photo}
                  alt="Reviewer"
                />
                <p className="font-semibold text-xl text-white mb-2">
                  {review.name || 'Anonymous'}
                </p>
                <p className="text-sm text-white text-center mt-2 mb-4">
                  {review.review || 'No comments provided.'}
                </p>
                <ReactRating
  value={Number(review.rating) || 0} // Ensures it's a number
  readonly
  emptySymbol={<FaStar className="text-yellow-300 w-5 h-5" />}
  filledSymbol={<FaStar className="text-yellow-500 w-5 h-5" />}
/>




              </div>
            ))}
          </Marquee>
        ) : (
          <p className="text-center text-gray-500">No reviews available at the moment.</p>
        )}
      </section>
    </div>


      </div>
    </div>
  );
};

export default Banner;
