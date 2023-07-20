import "./Navbar.css"
import { Link } from "react-router-dom"
import { lazy, useState, useContext} from "react"
import { ApiContext } from "../../Contexts/ApiReq"
import { SomeContexts } from "../../Contexts/Context"
//icons
import { BiHomeAlt } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { GoHomeFill } from "react-icons/go"
import { BiSolidSearch } from "react-icons/bi"
import { AiOutlineArrowRight } from "react-icons/ai"

const NavPlaylist = lazy(() => import("../../Components/NavPlaylist/NavPlaylist"))


const Navbar = () => {
  const { album1, album2, album3 } = useContext(ApiContext)
  const { handleArrow, arrowIcon } = useContext(SomeContexts)

  {/**icons changes */}
  const [homeIcon, setHomeIcon] = useState(true)
  const [searchIcon, setSearchIcon] = useState(true)
  
  {/**styles */}
  const left = {
    alignItems:"center",
    width:"100%"
  }

  {/**icons changes */}
  const handleIconsChanges = (e) => {
    if(e === "first"){
      setHomeIcon(false)
    }else{
      setHomeIcon(true)
    }
    if(e === "second"){
      setSearchIcon(false)
    }else{
      setSearchIcon(true)
    } 
  }

  return (
    <div className={arrowIcon ? "navbar_container" : "navbar_container_right"}>

      <div className="navbar_first_child" style={arrowIcon ? null : left}>
       <Link to="/" onClick={()=>handleIconsChanges("first")}>{homeIcon ? <BiHomeAlt className={`${arrowIcon ? "home_icons" : "home_icon_m"}`}/> : <GoHomeFill className={`${arrowIcon ? "home_icons" : "home_icon_m"}`} />} {arrowIcon ? "Home" : null}</Link>
       <Link to="/search" onClick={()=>handleIconsChanges("second")}>{searchIcon ? <BsSearch className={`${arrowIcon ? "search_icons" : "search_icons_m"}`} /> : <BiSolidSearch className={`${arrowIcon ? "search_icon_fill" : "search_icon_fill_m"}`} />} {arrowIcon ? "Search" : null}</Link>
      </div>

      <div className="navbar_second_child"style={arrowIcon ? null : left}>

        <div className="navbar_second_child_buttons">
          {arrowIcon ?<AiOutlineArrowLeft onClick={()=>handleArrow("left")} className="arrows_icons"/> : <AiOutlineArrowRight onClick={()=>handleArrow("right")} className="arrows_icons arrow_right_icon"/>}
          <p>Playlists</p>
        </div>

        <div className={arrowIcon ? "navbar_second_child_playlists" : "navbar_second_child_playlists_s"}>
           <NavPlaylist prop={album1}/>
           <NavPlaylist prop={album2}/>
           <NavPlaylist prop={album3}/>
        </div>
      </div>

    </div>
  )
}

export default Navbar