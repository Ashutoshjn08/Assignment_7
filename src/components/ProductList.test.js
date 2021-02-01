import React from "react";
import { shallow } from "enzyme";
import ProductList from "./ProductList";
import Product from "./Product";

describe("When valid products array props passed to ProductList.test.js", () => {
  let wrapper;
  let wrapperProduct;
  let props;
  beforeEach(() => {
    props = {
      data: [
        {
          id: 1,
          productName: "Moto G",
          quantity: 2,
          price: 13000,
        },
        {
          id: 2,
          productName: "Recold Geyser",
          quantity: 3,
          price: 6000,
        },
      ],
    };
    wrapper = shallow(<ProductList {...props} />);
    wrapperProduct = shallow(<Product {...props}/>)
  });
  test('renders "Product Name" as heading in second column', () => {
    expect(wrapper.find(`[data-test='second-Column']`).text()).toEqual(
      "Product Name"
    );
  });
  test('renders "Price" as heading in fourth column', () => {
    expect(wrapper.find(`[data-test='fourth-Column']`).text()).toEqual("Price");
  });
  test("Passes the second product's name as props to second product component",()=>{
    let secondProduct = wrapperProduct.find('li').at(1);
    expect(secondProduct.render().text()).toContain('Moto G')
  })
});
