import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import "@testing-library/react/cleanup-after-each"; deprecated
import App from "./App";

describe("App", () => {
  it("Renders withiut error", () => {
    render(<App/>);
  });
});
