import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Hero from "./pages/Hero"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
