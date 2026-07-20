import MainContent from "../components/main-content";
import Navbar from "../components/navbar";

export default function Home (){
    return (
        <div className="home">
            <Navbar/>
            <MainContent/> 
        </div>
    )
}