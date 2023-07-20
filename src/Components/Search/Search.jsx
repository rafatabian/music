import "./Search.css"
import { useContext, useEffect, useRef, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { ApiContext } from "../../Contexts/ApiReq"

import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import spotyTiny from "../../assets/spoty_tiny.jpg"
import { SomeContexts } from "../../Contexts/Context"

const Search = () => {

    const { songRequest, storeSearch, album1 } = useContext(ApiContext)
    const { setTrackURI, arrowIcon } = useContext(SomeContexts)
    const [inputText, setInputText] = useState("")
    const inputRef = useRef(null)
   

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            songRequest(inputText)
        }}


        useEffect(()=> {
           inputRef.current.focus();
        }, [])
         

  return (
    <div className="search_background">
        <div className={arrowIcon ? "search_container" : "search_container_s"}> 
           <div className="search_input_container">
            <input type="search"
            ref={inputRef}
            placeholder="What do you want to listen to?"
            onChange={(e)=>setInputText(e.target.value)}
            value={inputText}
            onKeyDown={handleKeyDown}/>
            <button onClick={()=>songRequest(inputText)}><BsSearch/></button>
           </div>
 
            <div className="search_results">
            {storeSearch
            ? (storeSearch.tracks.items.map((item)=>{

               return (
                <div className="results_outer_container" key={item.id}>
                    <div className="results_inner_container">
                      <div className="results_img" >
                        <LazyLoadImage 
                        src={item.album.images[1].url}
                        placeholderSrc={spotyTiny}
                        effect="blur"
                        alt="track"
                        onClick={()=>setTrackURI(item.uri)}
                        />
                      </div>
                      <div className="results_text">
                       <h1 key={item.id}>{item.name}</h1> 
                      </div>
                </div>
                </div>
               )
               
            })
            ) : album1 && album1.tracks && album1.tracks.items ?(
               album1.tracks.items.map((item) => {
                return (<div className="results_outer_container" key={item.id}>
                <div className="results_inner_container">
                  <div className="results_img" >
                    <LazyLoadImage 
                    src={item.track.album.images[0].url}
                    placeholderSrc={spotyTiny}
                    effect="blur"
                    alt="track"
                    onClick={()=>setTrackURI(item.track.uri)}
                    />
                  </div>
                  <div className="results_text">
                   <h1 key={item.id}>{item.track.name}</h1> 
                  </div>
            </div>
            </div>)
              
               })
              ) : null
            
          }
            </div>
        </div>

    </div>
  )
}

export default Search