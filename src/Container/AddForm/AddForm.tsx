import { useState } from "react";
import { QuoteType } from "../../types";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi";

const AddForm = () => {
  const [quote, setQuote] = useState<QuoteType>({
    category: "",
    author: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setQuote((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const newQuote = {
      category: quote.category,
      author: quote.author,
      text: quote.text,
    };

    try {
      await axiosApi.post("quotes.json", newQuote);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-50 mx-auto mt-3">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="author">
          <Form.Label>Author:</Form.Label>
          <Form.Control
            type="text"
            name="author"
            placeholder="Type author"
            onChange={onChange}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="select" className="mt-3">
          <Form.Select name="category" required onChange={onChange}>
            <option>Select a category</option>
            <option value="star-wars">Star Wars</option>
            <option value="funny">Funny quotes</option>
            <option value="motivational">Motivational</option>
            <option value="famous">Famous people</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mt-4" controlId="textArea">
          <Form.Label>Write your quote!</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="text"
            onChange={onChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
