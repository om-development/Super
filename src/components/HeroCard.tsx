import { Search } from "lucide-react"
import { LocationEdit } from "lucide-react"
import { ChevronDown } from "lucide-react"

const HeroCard = () => {
  return (
    <div className="rounded-lg w-full mt-3 bg-white px-5 mb-3 text-white relative">
      <div className="flex flex-col space-y-4 py-6 lg:flex-row lg:space-y-0 lg:items-center lg:gap-3">
        <div className="text-gray-500 flex items-center space-x-4 py-3 lg:flex-1 lg:border-r lg:border-gray-200 lg:pr-3">
          <Search />
          <h2>Job title, keywords...</h2>
        </div>
        <div className="text-gray-500 flex items-center space-x-4 py-3 lg:flex-1 lg:border-r lg:border-gray-200 lg:pr-3 relative">
          <LocationEdit />
          <h2>Location</h2>
          <ChevronDown className="absolute right-0 lg:relative lg:right-auto lg:ml-auto" />
        </div>
        <button className="bg-yellow-500 h-14 rounded-lg lg:w-auto lg:px-10">
          Find Jobs
        </button>
      </div>
    </div>
  )
}

export default HeroCard
