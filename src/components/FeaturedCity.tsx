import FeaturedCard from "./FeaturedCard"

const FeaturedCity = () => {
  return (
    <div className="max-w-7xl mx-auto mt-4 mb-5 px-4">
      <div className="flex items-center justify-between w-full mt-10 mb-6">
        <div className="flex flex-col items-start space-y-1.5">
          <h1 className="font-bold text-xl">Featured Cities</h1>
          <h3 className="text-gray-500">Know your worth and find the job that qualify your life</h3>
        </div>
        <a href="/notfound" className="text-blue-400 font-normal text-sm whitespace-nowrap">
          Browse All Locations &gt;
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 mb-10">
        <div className="sm:col-span-2 md:col-span-1 md:row-span-2 md:min-h-96">
          <FeaturedCard image="/bag1.png" className="h-full">
            <h2 className="text-white font-bold text-lg">New York</h2>
            <h3 className="text-white text-sm">10 Jobs</h3>
          </FeaturedCard>
        </div>
        <FeaturedCard image="/bag2.png">
          <h2 className="text-white font-bold text-lg">Paris</h2>
          <h3 className="text-white text-sm">2 Jobs</h3>
        </FeaturedCard>
        <FeaturedCard image="/bag3.png">
          <h2 className="text-white font-bold text-lg">Miami</h2>
          <h3 className="text-white text-sm">2 Jobs</h3>
        </FeaturedCard>
        <FeaturedCard image="/bag1.png">
          <h2 className="text-white font-bold text-lg">London</h2>
          <h3 className="text-white text-sm">12 Jobs</h3>
        </FeaturedCard>
        <FeaturedCard image="/bag2.png">
          <h2 className="text-white font-bold text-lg">Los Angeles</h2>
          <h3 className="text-white text-sm">6 Jobs</h3>
        </FeaturedCard>
      </div>
    </div>
  )
}

export default FeaturedCity
