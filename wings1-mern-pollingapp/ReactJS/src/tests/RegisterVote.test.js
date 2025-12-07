import React from "react";
import { render } from "@testing-library/react";
import RegisterVote from "../components/RegisterVote";

describe("RegisterVote component", () => {
  test.todo("should fetch poll data on mount using GET /polls/fetch");
  test.todo("should display question text in the question element");
  test.todo("should display 4 option buttons");
  test.todo("should send PATCH /polls/updateVotes with correct selectedOption when an option is clicked");
  test.todo("should show success alert on successful vote registration");
  test.todo("should show error alert on failed vote registration");
  test.todo("should disable buttons while vote request is in progress");
  test.todo("should handle case where backend returns no poll data");
});
