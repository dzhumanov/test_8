import React from "react";
import { Quotes } from "../../types";
import Quote from "./Quote";

interface Props {
  quotes: Quotes | null;
}

const QuoteList: React.FC<Props> = ({ quotes }) => {
  return (
    <div className="d-flex flex-column">
      {quotes ? (
        Object.keys(quotes).map((key) => (
          <Quote
            key={key}
            category={quotes[key].category}
            author={quotes[key].author}
            text={quotes[key].text}
          />
        ))
      ) : (
        <div className="mt-5 fs-3 fw-bold mx-auto">No avialable posts</div>
      )}
    </div>
  );
};

export default QuoteList;
