import React from "react";
import { render } from "@testing-library/react";
import InventoryList from "../components/InventoryList";
import InventoryCard from "../components/InventoryCard";

describe("InventoryList component", () => {
  test.todo("should render empty message when no data is provided");
  test.todo("should render list of InventoryCard components for data items");
});

describe("InventoryCard component", () => {
  test.todo("should display product name, category, quantity and price");
  test.todo("should call onCreateRequest with product id when Request Stock button clicked");
});
