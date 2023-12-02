import React from "react";
import { QuoteType } from "../../types";
import CategoryList from "../../CategoryList";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const getCategoryNameById = (categoryId: string) => {
  const category = CategoryList.find((cat) => cat.id === categoryId);
  return category ? category.title : "Unknown Category";
};

const Quote: React.FC<QuoteType & { id: string; onDelete: () => void }> = ({
  id,
  category,
  author,
  text,
  onDelete,
}) => {
  const categoryName = getCategoryNameById(category);

  return (
    <div className="card border border-primary w-75 mx-auto p-3 mt-3">
      <p className="m-0">{text}</p>
      <p>--- {author}</p>
      <p className="m-0">Category: {categoryName}</p>
      <div className="btn-wrapper mt-3">
        <Link to={`quotes/${id}/edit`} className="btn btn-success me-3">
          Edit
        </Link>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};


export default Quote;
