import { Routes, Route } from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar";
import Quotes from "./Container/Quotes/Quotes";
import AddForm from "./Container/AddForm/AddForm";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import EditForm from "./Container/AddForm/EditForm";

function App() {
  return (
    <div className="app-container">
      <header>
        <Toolbar />
      </header>
      <div className="container w-75">
        <div className="row">
          <Sidebar />
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Quotes />} />
              <Route path="/quotes/:id/edit" element={<EditForm />} />
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
