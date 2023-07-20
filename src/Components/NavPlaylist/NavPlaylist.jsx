import "./NavPlaylist.css"
import { useContext } from "react"
import { SomeContexts } from "../../Contexts/Context"
import "react-lazy-load-image-component/src/effects/blur.css"
import { LazyLoadImage } from "react-lazy-load-image-component"

import  spoty_tiny  from "../../assets/spoty_tiny.jpg"
import { Link } from "react-router-dom"

const NavPlaylist = ({prop}) => {
  const {arrowIcon, setPlaylistID} = useContext(SomeContexts)
 
if(prop && prop.images){
  return (
    <Link to="/playlist">
    <div className={arrowIcon ? "NavPlaylist_container" : "NavPlaylist_container_s"} 
    key={prop.id}
    onClick={()=>setPlaylistID(prop)}>
      <div className="NavPlaylist_first_child">
         <LazyLoadImage
          src={prop.images[0].url}
          placeholderSrc={spoty_tiny}
          effect="blur"
          alt="spotify"
          />
      </div>
       {arrowIcon && (
        <div className="NavPlaylist_second_child">
        <div className="NavPlaylist_second_child_text">
          <h2>{prop.name}</h2>
         <p>{prop.tracks.items.length} songs</p>
        </div>
      </div>
       )}
    </div>
    </Link>
  )
}
}
export default NavPlaylist