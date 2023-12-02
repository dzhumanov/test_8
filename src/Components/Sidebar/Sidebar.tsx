import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
      <div className="col-3 mt-3 d-flex flex-column">
        <NavLink to="/">All</NavLink>
        <NavLink to="/quotes/star-wars">Star Wars</NavLink>
        <NavLink to="/quotes/funny">Funny quotes</NavLink>
        <NavLink to="/quotes/motivational">Motivational</NavLink>
        <NavLink to="/quotes/famous">Famous people</NavLink>
      </div>
    );
}

export default Sidebar;