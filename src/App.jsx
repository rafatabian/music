import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ApiFunction } from "./Contexts/ApiReq"
import { SomeFunction } from "./Contexts/Context"

import "./App.css"

const Navbar = lazy(() => import("./Containers/Navbar/Navbar"))
const PlayBar = lazy(() => import("./Components/PlayBar/PlayBar"))
const Home = lazy(() => import("./Containers/Home/Home"))
const Search = lazy(() => import("./Components/Search/Search"))
const Playlist = lazy(() => import("./Components/Playlist/Playlist"))

const App = () => {
  return (
   
    <div >
      <SomeFunction>
     <ApiFunction>
        <Router>
          <Suspense fallback={<h1 className="App_loading">Loading...</h1>}>
            
              <Navbar /> 
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/playlist" element={<Playlist />} />
              </Routes>
            
            <PlayBar />
          </Suspense>
      </Router>
    </ApiFunction>
    </SomeFunction>
    </div>
  )
}

export default App