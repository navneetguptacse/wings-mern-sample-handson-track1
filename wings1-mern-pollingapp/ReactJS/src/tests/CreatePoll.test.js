import React from "react";
import { render } from "@testing-library/react";
import CreatePoll from "../components/CreatePoll";

describe("CreatePoll component", () => {
  test.todo("should render question and 4 option input fields");
  test.todo("should show alert when any field is empty on submit");
  test.todo("should send PUT request to /polls/create on valid submit");
  test.todo("should reset form after successful submit");
  test.todo("should display backend success message in alert");
  test.todo("should display backend error message in alert on failure");
  test.todo("should trim whitespace when validating inputs");
  test.todo("should prevent submission if all fields are whitespace");
});
