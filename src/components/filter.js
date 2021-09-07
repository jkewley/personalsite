import * as React from 'react';

const DefaultState = {
  tags: [],
  postcode: '',
  sortOrder: '',
  sortOrders: ['Highest First', 'Lowest First'],
};

class Filter extends React.Component {
  state = Object.assign({}, DefaultState);

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value,
    });
  };

  render() {
    return (
      <select>
        <option label="ONE"></option>
      </select>
    );
  }
}

export default Filter;
