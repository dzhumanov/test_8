import { QuoteType } from "../../types";

const Quote: React.FC<QuoteType> = ({ category, author, text }) => {
  return (
    <div>
      <h1>{author}</h1>
      <p>{text}</p>
      <p>{category}</p>
    </div>
  );
};

export default Quote;
