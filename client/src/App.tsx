import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import store from "./store"

import LoginLanding from "./auth/login"
import SignUp from "./auth/sign-up"
import Landing from "./landing"
import Profile from "./profile"
import CreateRoom from "./rooms/create"
import RoomCreateGuest from "./rooms/create/guest"


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginLanding />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rooms">
            <Route path="create" element={<CreateRoom />} />
            <Route path="create/guest" element={<RoomCreateGuest />} />
            {/* Add more nested routes here, e.g.: */}
            {/* <Route path=":roomId" element={<RoomDetail />} /> */}
            {/* <Route path=":roomId/edit" element={<EditRoom />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
