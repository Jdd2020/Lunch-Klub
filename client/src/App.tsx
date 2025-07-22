import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import store from "./store"

import LoginLanding from "./auth/login"
import Profile from "./auth/profile"
import SignUp from "./auth/sign-up"
import Landing from "./landing"


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginLanding />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
