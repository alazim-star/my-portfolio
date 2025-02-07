import { motion } from "framer-motion";


export default function Portfolio() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen text-white px-6 md:px-16"
     
    >

      {/* About Section */}
      <section className="mt-20">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <p className="text-gray-300 mt-4">
          I am a passionate frontend developer with expertise in React,
          Tailwind, and DaisyUI.
        </p>
      </section>

  

   
    </div>
  );
}
