import { Routes, Route } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar"
import Quotes from "./Container/Quotes/Quotes";
import AddForm from "./Components/AddForm/AddForm";

function App() {

  return (
    <div className="app-container">
      <header>
        <Toolbar/>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-3 d-flex flex-column">
            <NavLink to='/'>All</NavLink>
            <NavLink to='/star-wars'>Star Wars</NavLink>
            <NavLink to='/funny'>Funny quotes</NavLink>
            <NavLink to='/motivational'>Motivational</NavLink>
            <NavLink to='/famous'>Famous people</NavLink>
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Quotes/>} />
              {/* <Route path="/quotes/:categoryId" element={<Quotes/>} /> */}
              <Route path="/add-quote" element={<AddForm/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default App
