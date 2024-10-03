const SectionTaitle = ({ heading, subHeading }) => {
  // const width = width;
  return (
    <div className= {`mx-auto text-center my-8`}>
      <p className="text-[#D99904] mb-4">---{subHeading}---</p>
      <h3 className="text-4xl uppercase border-y-4 py-3 inline-block">{heading}</h3>
    </div>
  );
};

export default SectionTaitle;
