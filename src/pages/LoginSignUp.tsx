import '@/index.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { User, Briefcase } from 'lucide-react'

const LoginSignUp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f1f5fe]">
      <Navbar />
      <div className="flex-1 flex flex-col items-center py-16">
        <div className="text-center mb-10 px-4">
          <h1 className="text-2xl font-bold text-black">Login/Register</h1>
          <br />
          <h3 className="text-gray-500 font-medium">Home / Login / Register</h3>
        </div>

        <div className="bg-white w-full shadow-md">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-5">Login to Superio</h2>

              <div className="bg-emerald-50 border border-emerald-200 rounded-md p-4 mb-6 text-sm text-gray-700 space-y-1">
                <p>demo username: <span className="font-medium text-emerald-600">candidate</span> or <span className="font-medium text-emerald-600">employer</span></p>
                <p>password: <span className="font-medium text-emerald-600">demo</span></p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded" />
                  Keep me signed in
                </label>
                <a href="/notfound" className="text-sm text-black font-medium">Forgotten Password?</a>
              </div>

              <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-md text-sm hover:bg-blue-700 transition-colors">
                Login
              </button>
            </div>

            <div className="flex-1 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-5">Create a free superio account</h2>

              <div className="flex gap-4 mb-6">
                <label htmlFor="candidate" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors bg-[#f1f5fe] text-gray-700 has-checked:bg-blue-600 has-checked:text-white hover:bg-blue-600 hover:text-white">
                  <User className="w-4 h-4" />
                  Candidate
                  <input id="candidate" name="account-type" type="radio" defaultChecked className="hidden" />
                </label>
                <label htmlFor="employer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors bg-[#f1f5fe] text-gray-700 has-checked:bg-blue-600 has-checked:text-white hover:bg-blue-600 hover:text-white">
                  <Briefcase className="w-4 h-4" />
                  Employer
                  <input id="employer" name="account-type" type="radio" className="hidden" />
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="flex items-start gap-2 mb-6">
                <input type="checkbox" className="mt-0.5 rounded" />
                <span className="text-sm text-gray-700">You accept our Terms and Conditions and Privacy Policy</span>
              </div>

              <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-md text-sm hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginSignUp
