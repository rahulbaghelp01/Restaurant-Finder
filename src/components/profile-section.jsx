import { useState } from "react";
import { UserRound } from 'lucide-react';



export default function ProfileSection(){
   const [profilebtn,setProfilebtn] = useState(false)
   

   const handleClick = () => setProfilebtn(!profilebtn)


    return (
        <div className="profile-section">
          <button onClick={handleClick}>
            <UserRound />
          </button>
          {profilebtn && (
            <div className="login-or-signup">
            <button className="sign-up">Sign Up</button>
            <button className="login">Login</button>
            </div>
          )}
        </div>
    )
}
