'use client'

import { Logo } from "@/components/logo"
import { MdPerson } from "react-icons/md"
import { BsPeopleFill } from "react-icons/bs";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { PersonalInput } from "@/components/auth/personal-input";
import { CorporateInput } from "@/components/auth/corporate-input";
import Image from "next/image";

const AuthPage = () => {
  const [personal, setPersonal] = useState(true);
  const [corporate, setCorporate] = useState(false);

  const togglePersonal = () => {
    setPersonal(!personal);
  } 

  return (
    <div className="bg-white h-screen w-full">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-3 border-[2px] shadow-lg h-screen w-full">
            <div className="flex items-center justify-center flex-col mt-40">
              <Logo />
              <p className="text-lg text-neutral-700 mt-2">
                Please select your account type to login
              </p>
              <div className="flex items-center justify-center gap-x-28 w-10/12 mt-20">
                <div onClick={togglePersonal}  className={cn("flex items-center justify-center gap-x-2 cursor-pointer py-2", personal && 'underline-offset-8 underline decoration-4 decoration-emerald-500 text-emerald-500 ')}>
                  <MdPerson 
                  className="h-7 w-7"  />
                  <p className="text-xl">Personal/MSME</p>
                </div>

                <div onClick={togglePersonal} className={cn("flex items-center justify-center gap-x-2 cursor-pointer py-2", !personal? 'underline-offset-8 underline decoration-4 decoration-emerald-500 text-emerald-500' : '')}>
                  <BsPeopleFill
                  className="h-7 w-7"  />
                  <p className="text-xl">Corporate</p>
                </div>
              </div>

              <div className="flex items-start justify-start w-full mt-20 px-[120px]">
                {personal ? 
                <div className="w-full">
                  <PersonalInput />
                </div> : 
                <div className="w-full">
                  <CorporateInput />
                </div>
                }
              </div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="flex flex-col items-center justify-center py-20 gap-y-40">
              <div className="flex items-center justify-center gap-y-10 flex-col">
                <h1 className="text-neutral-700 font-semibold text-8xl">Keep the show going!</h1>
                <p className="text-7xl text-center text-orange-600">Buy electricity on Remita</p>
                <div className="px-4 py-2 text-6xl bg-orange-600 text-white ">
                  www.remita.net/electricity
                </div>
              </div>

              <div className="relative w-[800px] h-[400px]">
                <Image 
                src='/images.jpg' 
                alt="Hero"  
                fill 
                className="absolute" />
              </div>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default AuthPage