import "./Home.css"
import {  useEffect, useContext } from "react";
import { SomeContexts } from "../../Contexts/Context";
import { ApiContext } from "../../Contexts/ApiReq";
import  Song  from "../../Components/Song/Song"


const Home = () => {
  const { arrowIcon, setTrackURI } = useContext(SomeContexts)
  const { album3 } = useContext(ApiContext)
//move home-icons logic
  useEffect(() => {
    const handleMouseMove = (event) => {
      const spans = document.querySelectorAll(".imageIcon");
      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const spanCenterX = rect.left + rect.width / 2;
        const spanCenterY = rect.top + rect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const dx = mouseX - spanCenterX;
        const dy = mouseY - spanCenterY;
        const translateX = dx * 0.05;
        const translateY = dy * 0.05;
        span.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  if(album3 && album3.tracks && album3.tracks.items.length > 0) {

  return (
    <div className={arrowIcon ? "home_background" : "home_background_s"}>
      <div className={arrowIcon ? "home_title" : "home_title_s"}>
       <h2 className={arrowIcon ? "home_title_p" : "home_title_p_s"}>Discover Your Favourite Songs</h2>
      </div>
     
     <div className="home_icons_container">
      <div id="homeContainer">
      {album3.tracks.items.map((item) => {
        
  return (
    <span key={item.track.id} className="imageIcon" onClick={()=> setTrackURI(item.track.uri)}>
     <Song  props={item}/>
    </span>
  );
})}
      </div>
     </div>
    </div>  
  )
}else{
  return null
}
}

export default Home