import Navbar from "./Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/animate/avatar-group";
import HeroCard from "./HeroCard";
import { FileUp } from "lucide-react";
const AVATARS = [
  {
    src: "https://pbs.twimg.com/profile_images/1948770261848756224/oPwqXMD6_400x400.jpg",
    fallback: "SK",
    tooltip: "Skyleen",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
    fallback: "CN",
    tooltip: "Shadcn",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg",
    fallback: "AW",
    tooltip: "Adam Wathan",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg",
    fallback: "GR",
    tooltip: "Guillermo Rauch",
  },
];
const Hero = () => {
  return (
    <div className="bg-linear-to-b from-blue-900 mb-10 to-blue-700 w-full overflow-x-hidden shadow-sm">
      <Navbar transparent />
      <div className="flex flex-col justify-between sm:px-6 lg:px-12 space-y-1 px-4 py-6">
      <div className="lg:flex lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <div className="text-white text-3xl font-medium">
            <h1>Find Your Perfect Job</h1>
            <h1>Match</h1>
          </div>
          <div className="font-medium text-white text-base">
            Find Jobs, Employment & Career Opportunities
          </div>

          <HeroCard />

          <div className="font-medium text-white text-base text-wrap">
            Popular Searches: Designer, Developer, Web, IOS, PHP, Senior Engineer
          </div>
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-3 mt-6">
            <div className="flex justify-between items-center space-x-4">
              <div className="font-medium text-white text-base text-wrap">
                10K+ Candidates
              </div>
              <AvatarGroup className="h-7 " invertOverlap>
                {AVATARS.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className="size-12 border-3 border-blue-800"
                  >
                    <AvatarImage src={avatar.src} />
                    <AvatarFallback className="bg-blue-600 text-white">
                      {avatar.fallback}
                    </AvatarFallback>
                    <AvatarGroupTooltip className="bg-white px-3 py-1.5 text-base text-blue-900">
                      {avatar.tooltip}
                    </AvatarGroupTooltip>
                  </Avatar>
                ))}
              </AvatarGroup>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-between items-center space-x-2.5">
                <FileUp className="text-white" />
                <div className="font-medium text-white text-base text-wrap">
                  Upload Your CV
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img src="/hero.png" alt="Hero" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;
