import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './index.css';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';


class Datepicker1 extends Component {
	constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

    render() {
        return (
            <div>
                <DateRangePicker
          startDateId="startDate"
          startDatePlaceholderText="Check In"
          endDateId="endDate"
          endDatePlaceholderText = "Check Out"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
          
        />
            </div>
        )
    }
}

export default Datepicker1; 