import { useContext } from "react";
import "./PlayBar.css";
import { SomeContexts } from "../../Contexts/Context";

const PlayBar = () => {

  const { trackURI } = useContext(SomeContexts)
  const defaultSong = "2goceiojSky6KmMzWgrT8N"
  const correctURI = trackURI.split(':')[2]

  return (
    <div className="playbar_bar">
      <iframe
         src={`https://open.spotify.com/embed/track/${correctURI ? correctURI : defaultSong}`}
         allowtransparency="true"
         allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default PlayBar;