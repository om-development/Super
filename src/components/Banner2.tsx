const Banner2 = () => {
  return (
    <div className="w-full bg-[#f1f5fe] overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12 md:py-16 gap-6">
        <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
          <h1 className="font-bold text-lg text-black">Let employers find you</h1>
          <p className="text-gray-500 text-sm max-w-lg">
            Advertise your jobs to million of monthly users and search 158 million CVs in our database
          </p>
        </div>
        <button className="bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-sm transition-colors hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 shrink-0">
          Upload Your CV
        </button>
      </div>
    </div>
  );
};

export default Banner2;
