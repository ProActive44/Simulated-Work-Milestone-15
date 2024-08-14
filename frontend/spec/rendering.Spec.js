import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing context
import App from "../src/App"; // Adjust the import path according to your file structure

describe("App Component", () => {
    // Helper function to render the App component with a given token state

    afterEach(() => {
        // Clear localStorage after each test
        localStorage.removeItem('token');
    });



    it("REQ032]_should_redirect_to_/signin_for_unauthenticated_users", () => {
        // Mock unauthenticated state

        localStorage.setItem('token', "");
        // Render the App component with a Router
        render(

            <App />

        );
        // Check that the SignIn component is rendered
        const signInPage = screen.queryByText("Log In to see photos and videos from you friends"); // Adjust text to what appears on the SignIn page
        expect(signInPage).not.toBeNull(); // Jasmine assertion for existence
    });

});