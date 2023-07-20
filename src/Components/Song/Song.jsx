import "./Song.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
import spoty_tiny from "../../assets/spoty_tiny.jpg" 

const Song = ({props}) => {

  return (
    <>
       <LazyLoadImage
       className="home_song_image"
        src={props.track.album.images[2].url}
        placeholderSrc={spoty_tiny}
        effect="blur"
        alt="spotify"
      />
    </>
  )
}

export default Song