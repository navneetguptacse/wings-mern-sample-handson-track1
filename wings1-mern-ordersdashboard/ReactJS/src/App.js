import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Form from "./components/Form";
import FilterBar from "./components/FilterBar";
import List from "./components/List";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
    min_amount: "",
    max_amount: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    customerName: "",
    restaurantName: "",
    items: "",
    totalAmount: "",
    estimatedDeliveryMinutes: ""
  });
  const [error, setError] = useState("");

  // On mounting, fetch existing orders.
  useEffect(() => {
    fetchOrders();
  }, []);

  const buildQueryString = () => {
    // Helper to build query string from `filters`.
    // TODO: Implement mapping from filters object
    // to ?status=...&min_amount=...&max_amount=...
    return "";
  };

  const fetchOrders = async () => {
    /**
     * Fetches orders from the backend using:
     *   GET -> http://localhost:8001/orders
     * and applies current filter values in the query string.
     *
     * Use Fetch API from the browser.
     * On success: update `orders` state with response.records.
     * On error: set `error` message appropriately.
     */
    // TODO: Implement Fetch API GET call.
  };

  const updateFilterHandler = (event) => {
    /**
     * Handles filter control changes and updates `filters` state.
     * After updating filters, it should call `fetchOrders` to refresh the list.
     */
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
    // TODO: Call fetchOrders after updating filters.
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setError("");
    setFormInputs({
      customerName: "",
      restaurantName: "",
      items: "",
      totalAmount: "",
      estimatedDeliveryMinutes: ""
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
     * Validates form fields and sends a POST request to:
     *   http://localhost:8001/orders
     *
     * Validation:
     * - All fields must be non-empty and not only whitespaces.
     * - Other validations are handled at backend.
     *
     * On success:
     *  - Close modal
     *  - Clear error and reset formInputs
     *  - Refresh list by calling fetchOrders()
     *
     * On failure:
     *  - Set `error` message from backend response.
     */
    // TODO: Implement form validation and Fetch API POST call.
  };

  const advanceStatusHandler = async (id) => {
    /**
     * Sends PATCH request to:
     *   http://localhost:8001/orders/updateStatus/:id
     * to move order to the next allowed status.
     *
     * On success: refresh order list using fetchOrders().
     * On error: set `error` message.
     */
    // TODO: Implement PATCH call for advancing status using Fetch API.
  };

  const cancelOrderHandler = async (id) => {
    /**
     * Sends PATCH request to:
     *   http://localhost:8001/orders/updateStatus/:id
     * with body { status: "CANCELLED" }.
     *
     * On success: refresh list.
     * On error: set `error` message.
     */
    // TODO: Implement PATCH call for cancelling order using Fetch API.
  };

  const markDelayedHandler = async (id) => {
    /**
     * Sends PATCH request to:
     *   http://localhost:8001/orders/markDelayed/:id
     *
     * On success: refresh list.
     * On error: set `error` message.
     */
    // TODO: Implement PATCH call for marking order as delayed using Fetch API.
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Food Delivery Orders Dashboard</h1>
        <Button
          label="Add Order"
          data-testid="add-order-button"
          onClick={showModalHandler}
        />
      </header>

      <main className="app-main">
        <div className="toolbar">
          <FilterBar filters={filters} onFilterChange={updateFilterHandler} />
        </div>

        <List
          data={orders}
          onAdvanceStatus={advanceStatusHandler}
          onCancel={cancelOrderHandler}
          onMarkDelayed={markDelayedHandler}
        />

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
