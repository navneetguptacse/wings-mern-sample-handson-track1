import React from "react";
import { render } from "@testing-library/react";
import ViewResult from "../components/ViewResult";

describe("ViewResult component", () => {
  test.todo("should fetch poll result data on mount using GET /polls/fetch");
  test.todo("should display poll question in heading");
  test.todo("should render option rows for 4 options");
  test.todo("should display vote counts for each option");
  test.todo("should display percentages for each option");
  test.todo("should pass correct percentage values to progress bar elements");
  test.todo("should handle zero votes gracefully (all percentages 0)");
  test.todo("should show error alert when backend returns error");
});
