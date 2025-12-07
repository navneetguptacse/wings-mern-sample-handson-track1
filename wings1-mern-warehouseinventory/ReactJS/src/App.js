import React, { useEffect, useState } from "react";
import "./App.css";

import Modal from "./components/Modal";
import Form from "./components/Form";
import FilterBar from "./components/FilterBar";
import InventoryList from "./components/InventoryList";
import RequestsList from "./components/RequestsList";

/**
 * App component acts as the top-level controller.
 * It should manage:
 *  - inventory (list of products)
 *  - requests (stock requests list)
 *  - showModal (Add Product modal visibility)
 *  - formInputs (inputs for Add Product)
 *  - filters (category, minQuantity)
 *  - error (validation error text from Add Product form)
 *
 * The functions below are only skeletons with TODO comments,
 * ready for implementation as per the problem statement.
 */

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [requests, setRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    category: "",
    quantity: "",
    price: ""
  });
  const [filters, setFilters] = useState({
    category: "",
    minQuantity: ""
  });
  const [error, setError] = useState("");

  // --- API helper methods ---

  const fetchInventory = async (appliedFilters = filters) => {
    /**
     * TODO:
     * - Build query string from appliedFilters.category and appliedFilters.minQuantity
     * - Use Fetch API to GET /inventory
     * - On success, update setInventory with response.records
     * - Handle any network / server errors gracefully
     */
  };

  const fetchRequests = async () => {
    /**
     * TODO:
     * - Use Fetch API to GET /requests
     * - Update requests state with the result
     * - Handle error cases
     */
  };

  // initial data load
  useEffect(() => {
    fetchInventory();
    fetchRequests();
  }, []);

  const showModalHandler = () => {
    // TODO: Open the Add Product modal
    setShowModal(true);
  };

  const closeModalHandler = () => {
    // TODO: Close modal and reset form inputs + error
    setShowModal(false);
    setFormInputs({ name: "", category: "", quantity: "", price: "" });
    setError("");
  };

  const inputChangeHandler = (event) => {
    // TODO: Update formInputs based on name/value from event.target
    const { name, value } = event.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const filterChangeHandler = (event) => {
    /**
     * TODO:
     * - Update filters using event.target.name and value
     * - After state update, call fetchInventory with updated filters
     */
    const { name, value } = event.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    fetchInventory(updated);
  };

  const submitHandler = async () => {
    /**
     * TODO:
     * - Validate formInputs (non-empty, correct ranges)
     * - Show alert/ setError when invalid
     * - On valid inputs, POST /inventory with body = formInputs
     * - On success, refresh inventory list and close modal
     * - On API validation error, set error from server response
     */
  };

  const createRequestHandler = async (productId) => {
    /**
     * TODO:
     * - Prompt for requested quantity (simple window.prompt or separate UI)
     * - POST /requests with { productId, requestedQty }
     * - Refresh requests list on success
     * - Handle error via alert
     */
  };

  const updateRequestStatus = async (id) => {
    /**
     * TODO:
     * - Determine next status from current request.status based on rules:
     *   PENDING -> APPROVED -> COMPLETED
     *   PENDING -> REJECTED (possibly via some alternate control)
     * - PATCH /requests/updateStatus/:id with new status
     * - Refresh requests list on success
     * - Handle error message "Invalid status update."
     */
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="app-title">Warehouse Inventory &amp; Stock Request</h1>
        <button
          type="button"
          onClick={showModalHandler}
          data-testid="btn-open-add-product"
        >
          Add Product
        </button>
      </header>

      <div className="app-content">
        <section className="section">
          <h2 className="section-title">Inventory</h2>
          <FilterBar onFilterChange={filterChangeHandler} />
          <InventoryList
            data={inventory}
            onCreateRequest={createRequestHandler}
          />
        </section>

        <section className="section">
          <h2 className="section-title">Stock Requests</h2>
          <RequestsList data={requests} onStatusUpdate={updateRequestStatus} />
        </section>
      </div>

      <Modal show={showModal} closeHandler={closeModalHandler}>
        <Form
          error={error}
          inputOnChangeHandler={inputChangeHandler}
          onSaveHandler={submitHandler}
        />
      </Modal>
    </div>
  );
};

export default App;
