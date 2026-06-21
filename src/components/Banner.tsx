import { Link } from 'react-router'
import { HexagonBackground } from "./Hexagon"

const Banner = () => {
  return (
    <HexagonBackground className="w-full h-auto flex justify-center items-center py-16 px-4 bg-blue-700">
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">Featured Cities</h1>
        <h3 className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl">
          Over 1 million interactions, 50,000 success stories. Make yours now.
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link to="/job" className="bg-white text-blue-600 font-medium px-8 py-3 rounded-md text-sm sm:text-base transition-colors hover:bg-blue-600 hover:text-white">
            Search Job
          </Link>
          <Link to="/job" className="bg-yellow-500 text-white font-medium px-8 py-3 rounded-md text-sm sm:text-base transition-colors border-2 border-transparent hover:bg-blue-600 hover:border-yellow-500">
            Apply Job Now
          </Link>
        </div>
      </div>
    </HexagonBackground>
  )
}

export default Banner
