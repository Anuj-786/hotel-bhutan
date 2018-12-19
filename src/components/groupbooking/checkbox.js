import React from 'react';
export const ReactExample = (props) => (
  <select id = {props.id} name={props.name} value={props.value} onChange={props.handleChange}>
    <option value="A">Apple</option>
    <option value="B">Banana</option>
    <option value="C">Cranberry</option>
  </select>
)