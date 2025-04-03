import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Hero from "./pages/Hero"
import ChatroomSection from "./pages/chatroom/ChatroomSection"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/chatrooms" element={<ChatroomSection />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
