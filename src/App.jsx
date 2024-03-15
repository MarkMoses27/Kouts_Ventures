
import Home from "./components/home/Home"
import Header from "./components/header/Header"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home/>
    </BrowserRouter>
  )
}

export default App
