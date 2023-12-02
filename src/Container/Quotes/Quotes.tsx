import React, { useEffect, useState } from "react";
import { Quotes } from "../../types";
import { useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import QuotesList from "../../Components/QuotesList/QuotesList";
import Preloader from "../../Components/Preloader/Preloader";

const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<Quotes | null>(null);
  const [loading, setLoading] = useState(false);

  const { category } = useParams();

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

  const onDelete = async (quoteId: string) => {
    await axiosApi.delete("quotes/" + quoteId + ".json");
    await fetchData();
  };

  useEffect(() => {
    void fetchData();
  }, [category]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {quotes && Object.keys(quotes).length > 0 ? (
            <QuotesList quotes={quotes} onDelete={onDelete} />
          ) : (
            <div className="col-6">
              <h1 className="text-center mt-5">No quotes</h1>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Quotes;
