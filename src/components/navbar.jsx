import Sidebar from "./slidebar.jsx"
import ProfileSection from "./profile-section.jsx"
import {Link} from "react-router-dom"


export default function Navbar (){
  return (
    <nav className="navbar">
   
     <Sidebar/>
   
     <div className="right-side">
     <Link to="/" className="home">Home</Link>
     <ProfileSection/>
     </div>
    </nav>
  )
}