import { BrowserRouter, Route, Routes } from "react-router-dom"

import LoginLanding from "./auth/login"
import SignUp from "./auth/sign-up"
import Landing from "./landing"


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginLanding />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
