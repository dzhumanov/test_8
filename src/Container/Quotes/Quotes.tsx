import React, { useEffect, useState } from "react";
import { QuoteType, Quotes } from "../../types";
import axiosApi from "../../axiosApi";
import QuotesList from "../../Components/QuotesList/QuotesList";

// interface Props {
//   categoryId: string;
// }

const Quotes: React.FC = ({}) => {
  const [quotes, setQuotes] = useState<Quotes | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosApi.get("quotes.json");
        setQuotes(response.data);
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, []);

  return (
    <>
      <QuotesList quotes={quotes}/>
    </>
  );
};

export default Quotes;
