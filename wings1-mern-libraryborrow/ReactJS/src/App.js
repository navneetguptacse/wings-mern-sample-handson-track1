import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    title: "",
    author: "",
    category: ""
  });
  const [error, setError] = useState("");

  // Fetch books from backend when component mounts.
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    /**
     * Should send GET request to /books and update `books` state with
     * the response records.
     *
     * On failure, set appropriate error message in `error` state.
     */
    // TODO: Implement API call using Fetch API.
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setError("");
    setFormInputs({
      title: "",
      author: "",
      category: ""
    });
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitHandler = async () => {
    /**
     * Should validate formInputs:
     * - All fields must be non-empty and not just spaces.
     * - Other validations will be handled by backend.
     *
     * On validation failure, set error message in state.
     * On success:
     *  - Send POST request to http://localhost:8001/books
     *  - Close modal and refresh book list by calling fetchBooks()
     *  - Reset form and error state.
     */
    // TODO: Implement validation + POST API call.
  };

  const borrowHandler = async (id) => {
    /**
     * Should send PATCH request to
     *   http://localhost:8001/books/borrow/:id
     * Body must contain borrowerName (can be captured from user in real app).
     *
     * On success, refresh books list.
     * On error, set `error` state.
     */
    // TODO: Implement PATCH borrow API call.
  };

  const returnHandler = async (id) => {
    /**
     * Should send PATCH request to
     *   http://localhost:8001/books/return/:id
     *
     * On success, refresh books list.
     * On error, set `error` state.
     */
    // TODO: Implement PATCH return API call.
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Library Book Borrowing System</h1>
      </header>

      <main className="app-main">
        <div className="toolbar">
          <Button
            label="Add New Book"
            data-testid="add-book-button"
            onClick={showModalHandler}
          />
        </div>

        <List data={books} onBorrow={borrowHandler} onReturn={returnHandler} />

        <Modal show={showModal} closeHandler={closeModalHandler}>
          <Form
            error={error}
            inputOnChangeHandler={inputChangeHandler}
            onSaveHandler={submitHandler}
          />
        </Modal>
      </main>
    </div>
  );
};

export default App;
