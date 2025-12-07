import React, { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import List from "./components/List";
import Modal from "./components/Modal";
import Form from "./components/Form";
import Button from "./components/Button";
import Error from "./components/Error";

const App = () => {
  const [services, setServices] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
    start_date: "",
    end_date: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    customerName: "",
    vehicleNumber: "",
    serviceType: "",
    date: ""
  });
  const [error, setError] = useState("");

  // Fetch services whenever filters change
  useEffect(() => {
    fetchServices();
  }, [filters]);

  const fetchServices = async () => {
    // This function should call GET /services with optional query params
    // built from the filters state.
    //
    // TODO:
    // 1. Build query string from filters.
    // 2. Use fetch API to call backend.
    // 3. On success: update services state with records.
    // 4. On failure: set error message.
  };

  const updateFilterHandler = (name, value) => {
    // Should update filters state and trigger data reload via useEffect.
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setError("");
    setFormInputs({
      customerName: "",
      vehicleNumber: "",
      serviceType: "",
      date: ""
    });
  };

  const inputChangeHandler = (name, value) => {
    setFormInputs((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitHandler = async () => {
    // Should validate and then call POST /services to create a new booking.
    //
    // TODO:
    // 1. Basic front-end validation for required fields.
    // 2. Call backend with fetch.
    // 3. On success: close modal, reset form and refresh list.
    // 4. On failure: show error message from backend.
  };

  const updateStatusHandler = async (id) => {
    // Should call PATCH /services/updateStatus/:id.
    //
    // TODO:
    // 1. Use fetch with PATCH method.
    // 2. Refresh list on success and handle any error messages.
  };

  const cancelBookingHandler = async (id) => {
    // Should call PATCH /services/cancel/:id.
    //
    // TODO:
    // 1. Use fetch with PATCH method.
    // 2. Refresh list on success and handle forbidden error (403).
  };

  const markDelayedHandler = async (id) => {
    // Should call PATCH /services/markDelayed/:id.
    //
    // TODO:
    // 1. Use fetch with PATCH method.
    // 2. Refresh list on success and handle 400 error for invalid state.
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Vehicle Service Booking System</h1>
        <div className="app-actions">
          <Button label="Add Booking" onClick={showModalHandler} />
        </div>
      </header>

      <main className="main-content">
        <Error message={error} />
        <FilterBar filters={filters} onFilterChange={updateFilterHandler} />
        <List
          data={services}
          onUpdateStatus={updateStatusHandler}
          onCancel={cancelBookingHandler}
          onMarkDelayed={markDelayedHandler}
        />
      </main>

      <Modal show={showModal} closeHandler={closeModalHandler}>
        <Form
          error={error}
          formInputs={formInputs}
          inputOnChangeHandler={inputChangeHandler}
          onSaveHandler={submitHandler}
        />
      </Modal>
    </div>
  );
};

export default App;
