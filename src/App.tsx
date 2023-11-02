import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {

  return (
    <div>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
