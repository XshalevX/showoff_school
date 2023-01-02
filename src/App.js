import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Hack from "./Hack"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hacked" element={<Hack />} />
    </Routes>
  )
}