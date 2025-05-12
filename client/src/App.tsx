import { BrowserRouter, Route, Routes } from "react-router-dom"

import LoginLanding from "./auth/login"


function App() {

  return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<h1>
            LUNCH KLUB
          </h1>} />
          <Route path="/login" element={<LoginLanding />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
