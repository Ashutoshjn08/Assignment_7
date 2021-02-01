import React from "react";
import { mount } from "enzyme";
import AllProductsPage from "./AllProductsPage";

describe("AllProductPage snapshot", () => {
  let wrapper = mount(<AllProductsPage />);

  test("renderds correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  wrapper.unmount();
});

describe("AllProductPage rendering of elements",()=>{
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<AllProductsPage />);
    });
  
    afterEach(() => {
      wrapper.unmount();
    });
  test("renders correct heading for product list", () => {
    expect(wrapper.find("h1").text()).toEqual("Product List");
  });
  test("renders one productlist React component", () => {
    expect(wrapper.find("ProductList").length).toBe(1);
  });
})
