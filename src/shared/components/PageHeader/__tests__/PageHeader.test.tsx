import React from "react";
import PageHeader from "../PageHeader";
import { getByText, render } from "@testing-library/react";



describe("<PageHeader />", () => {
    it("The content obtained from props must be in the document", () => {
        //Arrange
        const testTitle = "Test Title";
        const { container } = render(<PageHeader title={testTitle} />)

        //Assert
        expect(getByText(container,"Test Title" )).toBeInTheDocument()
    })
})