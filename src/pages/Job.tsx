import '@/index.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JobCards from '@/components/JobCards'

const images = ["/job1.png", "/job2.png", "/job3.png", "/job1.png", "/job2.png"]

const Job = () => {
  return (
    <div className="bg-[#f1f5fe] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center space-y-1.5 mb-8">
          <h1 className="font-bold text-xl">All Jobs</h1>
          <h3 className="text-gray-500">Browse through available positions</h3>
        </div>
        <div className="flex flex-col items-center space-y-3.5 w-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <JobCards key={i} image={images[i % images.length]} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Job
