import Image from "next/image"



export const Logo = () => {
  return (
    <div className="relative 2xl:w-48 2xl:h-20">
        <Image 
        src='/remita-logo.svg' 
        alt="remita logo" 
        fill 
        className="absolute" />
    </div>
  )
}
