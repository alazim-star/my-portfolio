

const SectionTitle = ({heading,subheading }) => {
  return (
    <div className="text-center my-8  mx-auto">
   <h3 className="font-semibold text-4xl bg-gradient-to-r from-[#3d35e0] to-purple-400 bg-clip-text text-transparent">{subheading}</h3>
      {/* Heading */}
      <h2 className="font-bold uppercase text-5xl bg-gradient-to-r from-[#6a64f1] to-purple-500 bg-clip-text text-transparent py-4  ">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
