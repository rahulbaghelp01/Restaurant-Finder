import { useState } from "react";
import { Link } from "react-router-dom";
import ZonelyLogo from "../assests/fonts/Lora/logo";

export default function Sidebar() {
   

  const handleClick = () => setOpenOrClose(!openOrClose);

  return (
    <div className="sidebar">
      <div className="flex gap-0.5">
         
        <ZonelyLogo className="cursor-pointer transition-transform duration-300
        hover:-translate-y-1" onClick={handleClick} width={60} height={60} />
        <Link to="/ " className="pt-2 text-3xl font-bold tracking-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.25)]
        transition-transform duration-300
        hover:-translate-y-1">Zonely</Link>
      </div>
      </div>
   )
}

