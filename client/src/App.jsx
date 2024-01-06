import { BrowserRouter, Routes, Route } from "react-router-dom"


//COMPONENTS
import LoginPage from "./pages/LoginPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
