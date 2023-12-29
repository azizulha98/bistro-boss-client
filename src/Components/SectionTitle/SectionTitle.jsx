const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="space-y-2 w-full md:w-4/12 mx-auto text-center">
      <p className="text-yellow-600 text-sm">---{subHeading}---</p>
      <h3 className="text-4xl uppercase border-y-4 py-4 tracking-wide">{heading}</h3>
    </div>
  );
};

export default SectionTitle;