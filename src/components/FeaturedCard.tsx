import {type ReactNode } from "react"

const FeaturedCard = ({ image, children, className = "" }: { image: string; children: ReactNode; className?: string }) => {
  return (
    <div
      className={`rounded-md bg-cover bg-no-repeat bg-center min-h-44 relative ${className}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute bottom-0 left-0 p-4">
        {children}
      </div>
    </div>
  )
}

export default FeaturedCard
