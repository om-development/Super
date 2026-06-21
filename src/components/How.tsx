import HowCard from "./HowCard"


const How = () => {
  return (
    <div className="mt-3 mb-3 flex justify-between flex-col items-center overflow-x-hidden max-w-full">
      <div className="text-black font-extrabold text-xl">How It Works?</div>
      <div className="text-gray-500 text-small
       ">Job for anyone, anywhere </div>
    <div className="flex gap-4 mt-10 space-x-0 md:space-x-7 lg:space-x-28  px-4 overflow-x-auto">
  <div className="shrink-0">
    <HowCard
      image="/card1.png"
      title="Free Resume Assessments"
      description="Employers spend 31 seconds scanning resumes."
    />
  </div>

  <div className="shrink-0">
    <HowCard
      image="/card2.png"
      title="Expert Feedback"
      description="Get personalized recommendations."
    />
  </div>

  <div className="shrink-0">
    <HowCard
      image="/card3.png"
      title="Get Hired Faster"
      description="Stand out from other applicants."
    />
  </div>
</div>
    </div>
  )
}

export default How
