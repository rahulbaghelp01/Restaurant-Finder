import Sidebar from "./slidebar.jsx"
import ProfileSection from "./profile-section.jsx"
import {Link} from "react-router-dom"


export default function Navbar (){
  return (
    <nav className="flex justify-between py-1 px-0.5 bg-[var(--background)]">
   
     <Sidebar/>
   
     <div className="flex my-3 mx-2 gap-2">
     <Link to="/ " className="home transition-transform duration-300
        hover:-translate-y-1 font-semibold text-xl mx-2">Favourites</Link>
     <ProfileSection />
     </div>
    </nav>
  )
}