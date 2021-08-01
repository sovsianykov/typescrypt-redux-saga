import React from "react";
import {
  getByRole,
  render,
  waitFor,
} from "@testing-library/react";
import Form from "../Form";
import userEvent from "@testing-library/user-event";

describe("<Form />", () => {
  it("rendering and submitting a basic  form", async () => {
    //Arrange
    const handleSubmit = jest.fn();
    const { container } = render(<Form submit={handleSubmit} />);

    //Act
    userEvent.type(getByRole(container, "textbox"), "Test input{enter}");

    //Assert
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith("Test input");
    });
  });
});
