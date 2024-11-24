import "./App.css"
import { HashRouter as Router , Routes , Route } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/home"
import { Aboutus } from "./pages/Aboutus"
import { Register } from "./pages/register.jsx"
import { Layout } from "./components/layout/layout.jsx"
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
