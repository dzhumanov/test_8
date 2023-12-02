import { NavLink } from "react-router-dom";
import CategoryList from "../../CategoryList";

const Sidebar = () => {
  return (
    <div className="col-3 mt-3 d-flex flex-column">
      <NavLink to="/">All</NavLink>
      {CategoryList.map((category) => (
        <NavLink key={category.id} to={`/quotes/${category.id}`}>
          {category.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
