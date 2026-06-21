import { MapPin, Bookmark } from "lucide-react";

const CandidateCard = ({ image = "/Can1.png" }: { image?: string }) => {
  return (
    <div className="p-3 m-1 bg-white border border-gray-200 rounded-md w-full group relative">
      <div className="flex justify-between items-center space-y-2 flex-col">
        <img src={image} className="w-20 h-20 rounded-full" alt="Candidate" />
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-black text-lg font-bold">Candidate</h1>
          <h3 className="text-blue-500">UI Designer</h3>
        </div>
        <h3 className="text-sm text-gray-600 flex items-center gap-2">
          <MapPin className="w-4 h-4 shrink-0" />
          <span>New York</span>
        </h3>
        <button className="bg-blue-100 h-11 p-2 rounded-md w-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-200">
          View Profile
        </button>
      </div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Bookmark className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  );
};

export default CandidateCard;
