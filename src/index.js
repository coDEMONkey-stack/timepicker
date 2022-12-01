import React, { Component } from "react";
import ReactDOM from "react-dom";
import CustomDatePicker from "./CustomTimePicker.js";
import moment from "moment";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(value) {
    console.log("handleUpdate", value);
  }

  render() {
    return (
      <div className="App">
        <CustomDatePicker
          defaultValue={undefined}
          minDateTime={moment("2020-05-28T07:00:00")}
          maxDateTime={moment("2020-05-28T11:35:00")}
          value={this.handleUpdate}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
