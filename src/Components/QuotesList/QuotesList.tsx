import React from "react";
import { Quotes } from "../../types";
import Quote from "./Quote";

interface Props {
  quotes: Quotes | null;
  onDelete: (quoteId:string) => void;
}

const QuoteList: React.FC<Props> = ({ quotes, onDelete }) => {
  return (
    <div className="d-flex flex-column">
      {quotes ? (
        Object.keys(quotes).map((key) => (
          <Quote
            key={key}
            id={key}
            category={quotes[key].category}
            author={quotes[key].author}
            text={quotes[key].text}
            onDelete={() => onDelete(key)}
          />
        ))
      ) : (
        <div className="mt-5 fs-3 fw-bold mx-auto">No avialable posts</div>
      )}
    </div>
  );
};

export default QuoteList;
