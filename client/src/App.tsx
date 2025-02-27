import { BrowserRouter, Route, Routes } from "react-router-dom"

import LoginLanding from "./auth/login"


function App() {

  return (
    <div style={{
      height: "100%",
      width: "100%",
    }}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<h1>
            LUNCH KLUB
          </h1>} />
          <Route path="/login" element={<LoginLanding />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
