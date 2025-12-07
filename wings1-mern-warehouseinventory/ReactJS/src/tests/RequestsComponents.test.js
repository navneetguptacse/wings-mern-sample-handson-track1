import React from "react";
import { render } from "@testing-library/react";
import RequestsList from "../components/RequestsList";
import RequestCard from "../components/RequestCard";

describe("RequestsList component", () => {
  test.todo("should render empty message when no requests");
  test.todo("should render list of RequestCard components when data is present");
});

describe("RequestCard component", () => {
  test.todo("should display productName, requestedQty and status");
  test.todo("should call onStatusUpdate with id when Update Status button clicked");
});
