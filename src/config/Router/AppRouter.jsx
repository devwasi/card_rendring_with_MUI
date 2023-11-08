
import About from '../../Screens/About'
import Home from '../../Screens/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


  const AppRouter = () => {

    return <Router>
    <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'/About'} element={<About />} />
  </Routes>

    </Router>
  }

  export default AppRouter

