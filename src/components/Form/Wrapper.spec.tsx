import React from "react";
import { render } from "@testing-library/react";

import Wrapper from "./Wrapper";


describe("Wrapper", () => {
  test("renders the Wrapper component", () => {
    render(<Wrapper label="test" description="test description"  ><div>Test Wrapper</div></Wrapper>);
  });
});