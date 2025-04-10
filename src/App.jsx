import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Hero from "./pages/Hero"
import ChatroomSection from "./pages/chatroom/ChatroomSection"
import AuthForm from "./pages/auth/AuthForm"
import CreateChatroom from "./pages/chatroom/CreateForm"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/chatrooms" element={<ChatroomSection />} />
        <Route path="/chatrooms/create" element={<CreateChatroom />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
