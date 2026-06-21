const HowCard = ({ image, title, description }) => {
  return (
    <div className="w-40 sm:w-44 md:w-48 lg:w-56 h-64 sm:h-72 md:h-80 lg:h-96 flex flex-col space-y-2.5 pt-3 pb-2 px-4">
      <div className="flex items-center justify-center">
        <img src={image} alt={title} className="w-20 h-20" />
      </div>

      <h1 className="text-center font-bold text-black">
        {title}
      </h1>

      <h3 className="text-center text-sm text-gray-500">
        {description}
      </h3>
    </div>
  );
};

export default HowCard;