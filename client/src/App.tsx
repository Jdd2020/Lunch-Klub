import { BrowserRouter, Route, Routes } from "react-router-dom"

import LoginLanding from "./auth/login"
import Landing from "./landing"


function App() {

  return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginLanding />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
