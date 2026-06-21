import { Mail } from "lucide-react";
import { Copyright } from "lucide-react";
import { Target } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full mt-3 bg-blue-700 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 py-8 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-2 lg:col-span-2">
          <a href="#" className="shrink-0">
            <img src="/logowhite.png" className="w-34" alt="Logo" />
          </a>
          <h3 className="font-bold text-white text-base uppercase tracking-wide">
            Call Us <br /> 123 456 789
          </h3>
          <ul className="flex flex-col gap-1.5">
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Location ....{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                location Lorem, ipsum dolor.
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                support@supergmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-white text-base uppercase tracking-wide">
            Find Jobs
          </h3>
          <ul className="flex flex-col gap-1.5">
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Browse jobs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                browse candidates
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Candidate dashpoard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Job alerts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                My Bookmarks
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-white text-base uppercase tracking-wide">
            Frequently Asked Questions
          </h3>
          <ul className="flex flex-col gap-1.5">
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Site map
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Terms of use
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Privacy center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Security center
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="flex flex-col gap-1.5">
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Pakages
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-white text-base uppercase tracking-wide">
            Join Us On
          </h3>
          <ul className="flex flex-col gap-1.5">
            <li>
              <a
                href="#"
                className="text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                We dont send spam so dont worry
              </a>
            </li>
          </ul>
          <div className="bg-white rounded-xl flex relative  p-3">
            <input type="email" placeholder="Your Email" />
            <Mail className="absolute right-2.5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 sm:px-6 lg:px-12 md:flex-row justify-between space-y-2 items-center md:space-x-3 ">
        <div className="font-medium text-white text-base text-wrap space-x-2.5 flex ">
          <span>
            <Copyright />
          </span>
          <span>2021 Superio. All Rights Reserved</span>
        </div>
        <div className="flex items-center justify-between space-x-1">
          <Target className="text-white"/>
          <Target className="text-white"/>
          <Target className="text-white"/>
          <Target className="text-white"/>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
