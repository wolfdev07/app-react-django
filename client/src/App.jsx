import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";


//COMPONENTS
import LoginPage from "./pages/LoginPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false}/>
    </BrowserRouter>
  )
}

export default App
