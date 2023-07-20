import { createContext, useState, useEffect } from "react";

export const SomeContexts = createContext(null)

export const SomeFunction = ({children}) => {
    const [arrowIcon, setArrowIcon] = useState(true)
    const [trackURI, setTrackURI] = useState("")
    const [playlistID, setPlaylistID] = useState("")

        
    const handleArrow = (e) => {
        if(e === "left" || e === "right"){
            setArrowIcon(!arrowIcon)
          }
    }

    //toggle side-bar based on the page width
    useEffect(()=> {
        const handleWidth = () => {
        const windowWidth = window.innerWidth < 910
        setArrowIcon(!windowWidth)
        }
        window.addEventListener('resize', handleWidth)
        handleWidth()
        
        return () => {
            window.removeEventListener('resize', handleWidth)
        }

}, [])
      

    return(
        <SomeContexts.Provider value={{handleArrow, arrowIcon, setTrackURI, trackURI, setPlaylistID, playlistID}}>
           {children}
        </SomeContexts.Provider>
    )
}