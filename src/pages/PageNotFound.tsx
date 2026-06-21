import { Link } from 'react-router'
import '@/index.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f1f5fe]">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-black">Page Not Found</h1>
          <h3 className="text-gray-500 font-medium">404 Error</h3>
          <Link to="/" className="inline-block bg-blue-600 text-white font-medium px-6 py-2.5 rounded-md text-sm hover:bg-blue-700 transition-colors">
            Go to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageNotFound
