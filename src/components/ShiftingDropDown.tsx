import { type ReactNode, useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";

export const ShiftingDropDown = () => {
  return (
    <div className="flex w-full justify-start md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-1"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-4 py-2 max-xl:text-sm xl:text-base font-medium text-white transition-colors`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({
  selected,
  dir,
}: {
  selected: number | null;
  dir: null | "l" | "r";
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-0 top-[calc(100%_+_24px)] z-50 w-[671px] rounded-xl border border-gray-200 bg-white p-5 shadow-lg"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-gray-200 bg-white"
    />
  );
};

const HomeDropdown = () => (
  <div className="grid grid-cols-2 gap-3">
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Home v1</p>
      <p className="text-sm text-gray-500">Classic homepage layout</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Home v2</p>
      <p className="text-sm text-gray-500">Modern hero section</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Home v3</p>
      <p className="text-sm text-gray-500">Minimal design</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Dashboard</p>
      <p className="text-sm text-gray-500">Analytics overview</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Features</p>
      <p className="text-sm text-gray-500">Platform highlights</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">FAQ</p>
      <p className="text-sm text-gray-500">Common questions</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Contact</p>
      <p className="text-sm text-gray-500">Get in touch</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Pricing</p>
      <p className="text-sm text-gray-500">Plans & pricing</p>
    </a>
  </div>
);

const FindJobsDropdown = () => (
  <div>
    <div className="mb-3 grid grid-cols-2 gap-1">
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiHome className="text-blue-500" />
        Search Jobs
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiBarChart2 className="text-green-500" />
        Browse Categories
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiPieChart className="text-purple-500" />
        Remote Jobs
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiHome className="text-orange-500" />
        Full Time Jobs
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiBarChart2 className="text-teal-500" />
        Part Time Jobs
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiPieChart className="text-pink-500" />
        Internships
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiHome className="text-indigo-500" />
        Freelance
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiBarChart2 className="text-red-500" />
        Job Alerts
      </a>
    </div>
    <button className="ml-auto mt-2 flex items-center gap-1 text-base font-medium text-blue-600">
      <span>View all jobs</span>
      <FiArrowRight />
    </button>
  </div>
);

const EmployersDropdown = () => (
  <div className="grid grid-cols-2 gap-3">
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Post a Job</p>
      <p className="text-sm text-gray-500">Reach top talent</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Manage Jobs</p>
      <p className="text-sm text-gray-500">Track listings</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Search Candidates</p>
      <p className="text-sm text-gray-500">Find the right fit</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Pricing</p>
      <p className="text-sm text-gray-500">Choose a plan</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Recruitment Tools</p>
      <p className="text-sm text-gray-500">ATS integration</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Resources</p>
      <p className="text-sm text-gray-500">Hiring guides</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Success Stories</p>
      <p className="text-sm text-gray-500">Case studies</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Partner Program</p>
      <p className="text-sm text-gray-500">Grow with us</p>
    </a>
  </div>
);

const CandidatesDropdown = () => (
  <div>
    <div className="mb-3 grid grid-cols-2 gap-1">
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiHome className="text-blue-500" />
        My Profile
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiBarChart2 className="text-green-500" />
        Saved Jobs
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiPieChart className="text-purple-500" />
        Applied Jobs
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiHome className="text-orange-500" />
        Resume Builder
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiBarChart2 className="text-teal-500" />
        Cover Letter
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiPieChart className="text-pink-500" />
        Skill Assessment
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiHome className="text-indigo-500" />
        Career Advice
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-gray-50"
      >
        <FiBarChart2 className="text-red-500" />
        Interview Tips
      </a>
    </div>
    <button className="ml-auto mt-2 flex items-center gap-1 text-base font-medium text-blue-600">
      <span>View dashboard</span>
      <FiArrowRight />
    </button>
  </div>
);

const BlogDropdown = () => (
  <div className="grid grid-cols-2 gap-3">
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Latest Posts</p>
      <p className="text-sm text-gray-500">Recent articles</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Trending</p>
      <p className="text-sm text-gray-500">Popular this week</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Career Guide</p>
      <p className="text-sm text-gray-500">Career development</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Company Culture</p>
      <p className="text-sm text-gray-500">Workplace insights</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Tech News</p>
      <p className="text-sm text-gray-500">Industry updates</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Industry Insights</p>
      <p className="text-sm text-gray-500">Market analysis</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Success Stories</p>
      <p className="text-sm text-gray-500">Real experiences</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Video Tutorials</p>
      <p className="text-sm text-gray-500">Learn by watching</p>
    </a>
  </div>
);

const PagesDropdown = () => (
  <div className="grid grid-cols-2 gap-3">
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">About Us</p>
      <p className="text-sm text-gray-500">Our mission</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Contact Us</p>
      <p className="text-sm text-gray-500">Get in touch</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">FAQ</p>
      <p className="text-sm text-gray-500">Help center</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Terms of Service</p>
      <p className="text-sm text-gray-500">Legal terms</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Privacy Policy</p>
      <p className="text-sm text-gray-500">Data protection</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">404 Page</p>
      <p className="text-sm text-gray-500">Error page</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Coming Soon</p>
      <p className="text-sm text-gray-500">What's next</p>
    </a>
    <a href="#" className="rounded-lg p-3 transition-colors hover:bg-gray-50">
      <p className="text-base font-medium text-gray-900">Support</p>
      <p className="text-sm text-gray-500">We're here to help</p>
    </a>
  </div>
);

const TABS = [
  { title: "Home", Component: HomeDropdown },
  { title: "Find Jobs", Component: FindJobsDropdown },
  { title: "Employers", Component: EmployersDropdown },
  { title: "Candidates", Component: CandidatesDropdown },
  { title: "Blog", Component: BlogDropdown },
  { title: "Pages", Component: PagesDropdown },
].map((n, idx) => ({ ...n, id: idx + 1 }));
