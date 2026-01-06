import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";


describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("heroimage");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', "/media/img/homeHero.png")
    });

    test("renders signup button", () => {
        render(<Hero/>);
        const SignupButton = screen.getByRole("button", { name: /Sign up for free/i });
        expect(SignupButton).toBeInTheDocument();
        expect(SignupButton).toHaveClass("btn btn-primary");
    });
});