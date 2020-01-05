import React from 'react';
import {shallow} from "enzyme";
import List from "./list";
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

let wrapper;
let mockSubmit;
beforeEach(() => {
    mockSubmit = jest.fn();
    wrapper = shallow(<List submit={mockSubmit} />);
afterEach(cleanup);


describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    })
    it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List/>, div)
    })
});
});

describe("deleteEvent", () => {
    it("should call setState on domains", () => {
      const mockEvent = {
        target: {
          name: "domains",
          value: "test"
        }
      };
      const expected = {
        apiKey: "at_CTh44UQbAh9qDuN0CC7mv4UYGimLX",
        domainName: "",
        domains: "test"
      };
      wrapper.instance().deleteEvent(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });