import JobCards from "./JobCards"

const Joblist = () => {
  return (
    <div className="w-full bg-[#f1f5fe] overflow-x-hidden">
      <div className='max-w-7xl mx-auto flex flex-col items-center space-y-3.5 py-10'>
        <div className="flex flex-col items-center space-y-1.5 mb-5">
          <h1 className="font-bold text-xl">Featured Jobs</h1>
          <h3 className="text-gray-500 text-wrap">Know your worth and find the job that qualify your life</h3>
        </div>
        <div className="flex flex-col items-center space-y-3.5 w-full px-4">
          <JobCards image="/job1.png" />
          <JobCards image="/job2.png" />
          <JobCards image="/job3.png" />
          <JobCards image="/job1.png" />
          <JobCards image="/job2.png" />
        </div>
        <button className="bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-sm transition-colors hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600">
          Load More Listing
        </button>
      </div>
    </div>
  )
}

export default Joblist
