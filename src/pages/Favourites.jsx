import Navbar from "../components/navbar.jsx"
import {Cards} from "../components/main-content.jsx"
import FavouritesContext from "../contexts/FavouritesContext.jsx"
import { useContext } from "react"


export default function Favourites(){
    const {favourites} = useContext(FavouritesContext )

    

    return ( <div>
        <Navbar/>
        {
           favourites.map((place)=>{
            return (
                 <div>
                    <Cards place={place}/>
                 </div>
            )
           }) 
        }

    </div> )
}