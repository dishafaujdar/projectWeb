"use client"

// import { useState } from "react"
// import { X } from "lucide-react"
// import { Button } from "../ui/check-items"
// import { cn } from "@/lib/utils"

export function Header() {

//   const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="">
   <div className="flex items-center justify-center gap-5">
  <div className="bg-blue-950 w-max rounded-2xl mt-5 text-white font-medium">
    <div className="grid grid-cols-3 items-center justify-center gap-4 p-4">
      
      {/* Logo / Brand */}
      <div>
        <a href="#" className="text-lg font-semibold">Infrasity</a>
      </div>

      {/* Navigation as */}
      <div className="flex flex-wrap gap-4 justify-center text-sm">
        <span className="cursor-pointer hover:underline">Home</span>
        <span className="cursor-pointer hover:underline">Blog</span>
        <span className="cursor-pointer hover:underline">Case Studies</span>
        <span className="cursor-pointer hover:underline">Services</span>
        <span className="cursor-pointer hover:underline">FAQ</span>
        <span className="cursor-pointer hover:underline">About Us</span>
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Purple
        </button>
      </div>

    </div>
  </div>
</div>
    </header>
  )
}
