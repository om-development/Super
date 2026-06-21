import { Mail, MapPin, Clock, DollarSign, Bookmark } from "lucide-react"

const JobCards = ({ image = "/job1.png" }: { image?: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <div className="flex items-start gap-3">
        <img src={image} alt="job" className="w-14 h-14 rounded-lg shrink-0" />
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-base text-gray-900">Junior Graphic Designer (Web)</h1>
          <h3 className="text-xs text-green-600 font-medium mt-0.5">Featured</h3>
        </div>
        <Bookmark className="w-5 h-5 text-gray-400 cursor-pointer shrink-0 mt-1 hidden lg:block" />
      </div>

      <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h3 className="text-sm text-gray-600 flex items-center gap-2">
            <Mail className="w-4 h-4 shrink-0" />
            <span>Design, Development</span>
          </h3>
          <h3 className="text-sm text-gray-600 flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>New York, NY</span>
            <span className="flex items-center gap-1 ml-2">
              <Clock className="w-4 h-4 shrink-0" />
              <span>June 20, 2021</span>
            </span>
          </h3>
          <h3 className="text-sm text-gray-600 flex items-center gap-2">
            <DollarSign className="w-4 h-4 shrink-0" />
            <span>$150-$180 / week</span>
          </h3>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Full Time</span>
          <span className="text-xs font-medium text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">Urgent</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between md:hidden">
        <Bookmark className="w-5 h-5 text-gray-400 cursor-pointer lg:hidden" />
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Full Time</span>
          <span className="text-xs font-medium text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">Urgent</span>
        </div>
      </div>
    </div>
  )
}

export default JobCards
