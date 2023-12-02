import React, { useEffect, useState } from "react";
import { Quotes } from "../../types";
import axiosApi from "../../axiosApi";
import QuotesList from "../../Components/QuotesList/QuotesList";
import { useParams } from "react-router-dom";


const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<Quotes | null>(null);
  const [loading, setLoading] = useState(false);

  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (category) {
          const response = await axiosApi.get(
            `quotes.json?orderBy="category"&equalTo="${category}"`
          );
          setQuotes(response.data);
        } else {
          const response = await axiosApi.get("quotes.json");
          setQuotes(response.data);
        }
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, [category]);

  return (
    <>
      <QuotesList quotes={quotes} />
    </>
  );
};

export default Quotes;
