import { useState } from "react";
import { QuoteType } from "../../types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi";
import Form from "react-bootstrap/Form";
import CategoryList from "../../CategoryList";
import Preloader from "../../Components/Preloader/Preloader";

const AddForm = () => {
  const [quote, setQuote] = useState<QuoteType>({
    category: "",
    author: "",
    text: "",
    id: Date.now().toString(),
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

    try {
      await axiosApi.post("quotes.json", quote);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-50 mx-auto mt-3">
      <h2>Add new quote</h2>
      {loading ? (
        <Preloader />
      ) : (
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
            <Form.Label>Category:</Form.Label>
            <Form.Select name="category" required onChange={onChange}>
              <option>Select a category</option>
              {CategoryList.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
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
      )}
    </div>
  );
};

export default AddForm;
