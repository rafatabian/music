import "./Playlist.css"
import { useContext, useEffect } from "react"
import { SomeContexts } from "../../Contexts/Context"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import spotyTiny from "../../assets/spoty_tiny.jpg"
import { BsSpotify } from 'react-icons/bs'
import { IoTimeOutline } from 'react-icons/io5'
import { ApiContext } from "../../Contexts/ApiReq"

const Playlist = () => {
    const { playlistID, setPlaylistID, setTrackURI, arrowIcon } = useContext(SomeContexts)
    const { album1 } = useContext(ApiContext)

//default playlist 
 useEffect(()=>{
     if(playlistID == "" && album1 && album1.tracks){
        setPlaylistID(album1)
    }
}, [playlistID, album1])
   
     if(playlistID && playlistID.images){
        
//changing background based on the playlist
        let BackgroundColor = playlistID.primary_color

        if(BackgroundColor == '#ffffff'){
             BackgroundColor = 'linear-gradient(180deg, rgba(255, 255, 0, 1) 0%, rgba(255, 59, 0, 1) 100%)' 
        }else if(BackgroundColor == "#FFFFFF"){
            BackgroundColor = 'linear-gradient(180deg, rgba(0, 255, 235, 1) 0%, rgba(7, 58, 187, 1) 100%)'
        }

  return (
    <div className="playlist_background" style={{background:BackgroundColor}}>
        <div className={arrowIcon ? "playlist_container" : "playlist_container_s"}>

            <div className="playlist_welcome">
              <span><BsSpotify/></span>
               <div className="playlist_img_title">
                 <div className="playlist_img">
                  <LazyLoadImage 
                  src={playlistID.images[0].url}
                  placeholderSrc={spotyTiny}
                  effect="blur"
                  alt="music"
                  />
                 </div>
                 <div className="playlist_title">
                    <p>{playlistID.type}</p>
                    <h1>{playlistID.name}</h1>
                    <p>{playlistID.description}</p>
                    <p>{playlistID.followers.total} likes &#xB7; {playlistID.tracks.total} songs</p>
                    
                 </div>
               </div>
            </div>

            <div className="playlist_songs">
                <div className="playlist_songs_title">
                    <p>#   Title</p>
                    <p>Artists</p>
                    <span><IoTimeOutline/></span>
                </div>
                {playlistID.tracks.items.map((item)=> {
                    //time logic
                    let miliseconds = item.track.duration_ms
                    const minutes = Math.floor(miliseconds / 60000)
                    const seconds = Math.round((miliseconds & 60000) / 1000)
                    const durationString =`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

                    return (
                   <div className="playlist_songs_containers" 
                   key={item.track.id}
                   onClick={()=>setTrackURI(item.track.uri)}>
                    <span className="img_span">
                    <LazyLoadImage
                    src={item.track.album.images[2].url}
                    placeholderSrc={spotyTiny}
                    effect="blur"
                    alt="music"
                    />
                    <p>{item.track.album.name}</p>
                    </span>
                    <span className="name_span">{item.track.artists[0].name}</span>
                    <span className="time_span">{durationString}</span>
                </div>  
                    )
                  })
                }
               
            </div>
        </div>
    </div>
  )
 }
}

export default Playlist