import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar";
import Quotes from "./Container/Quotes/Quotes";
import AddForm from "./Components/AddForm/AddForm";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <header>
        <Toolbar />
      </header>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-9">
            <Routes>
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/quotes/:category" element={<Quotes />} />
              <Route path="/add-quote" element={<AddForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
