
import { createContext, useState, useEffect} from "react";

export const ApiContext = createContext(null)

    
    export const ApiFunction = ({ children }) => {
        const [s, sets] = useState("")
        const [album1, setAlbum1] = useState(null)
        const [album2, setAlbum2] = useState(null)
        const [album3, setAlbum3] = useState(null)
        const [album4, setAlbum4] = useState(null)
        const [storeSearch, setStoreSearch] = useState(null)


        
const tokReq = async() => {
  const client_id = process.env.REACT_APP_CLIENT_ID
  const client_secret = process.env.REACT_APP_CLIENT_SECRET
  const url = 'https://accounts.spotify.com/api/token'

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  const options = {
    method: "POST",
    headers: {
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    },
    body: params
  };

  try{
    const response = await fetch(url, options);
    const data = await response.json();
    sets(data.access_token)
  }catch(err){
    console.log(err)
  }
}
useEffect(() => {
  tokReq()
}, []);

{/**album 1 request */}

          const albumA = async() => {
           
            const url = "https://api.spotify.com/v1/playlists/37i9dQZF1DX2L0iB23Enbq"
            const options = {
              method: "GET",
              headers: {
                Authorization: `Bearer ${s}`
              }
            }
            
             try{
            const response = await fetch(url, options)
            const data = await response.json()
               setAlbum1(data)
             }catch(err){
                console.log(err)
              }
          }
       useEffect(()=>{
              albumA()
            }, [s])

{/**album 2 request */}

            const albumB = async() => {
              const url ="https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M"
              const options = {
                headers: {
                  Authorization: `Bearer ${s}`
                }
              }
              try{
                const response = await fetch(url, options)
                const data = await response.json()
                 setAlbum2(data)
              }catch(err){
                console.log(err)
              }
            }
            
          useEffect(()=>{
            albumB()
          }, [s])

{/**album 3 request */}

          const albumC = async()=>{
            const url = "https://api.spotify.com/v1/playlists/37i9dQZF1DWY4lFlS4Pnso"
            const options = {
              headers:{
                Authorization: `Bearer ${s}`
              }
            }
            try{
               const response = await fetch(url, options)
               const data = await response.json()
               setAlbum3(data)
            }catch(err){
              console.log(err)
            }
          }
          
          useEffect(()=>{
             albumC()
          }, [s])

{/**album 4 request  */}
      const albumD = async()=>{
        const url = "https://api.spotify.com/v1/playlists/37i9dQZF1EVJSvZp5AOML2"
        const options = {
          headers:{
            Authorization: `Bearer ${s}`
          }
        }
        try{
          const response = await fetch(url, options)
          const data = await response.json()
          setAlbum4(data)
        }catch(err){
          console.log(err)
        }
      } 
      useEffect(()=>{
        albumD()
      }, [s]) 

{/** search songs */}
         const songRequest = async(text) => {
          const url =   `https://api.spotify.com/v1/search?q=${text}&type=track`
  const options = {
      method: "GET",
      headers: {
          Authorization : `Bearer ${s}`
      }
  }
  try{
  const response = await fetch(url, options)
  const data = await response.json()
  setStoreSearch(data)
  }catch(err){
    console.log(err)
  }
      }
          
        return (
          <ApiContext.Provider value={{album1, album2, album3, album4, songRequest, storeSearch}}>
            {children}
          </ApiContext.Provider>
        );
      };
      
