import React from "react";

import Header from "./Header"
import Query from "./Query"

var Typeahead = require('react-typeahead').Typeahead;
var Coverflow = require('react-coverflow');

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state={
      inputValue:null,
      query:"Empty Query",
      currentState:null
    };
  }

  handleQueryChange(e) {
    const query = e;
    this.setState({inputValue: query});
  }

  handleTypingChange(e) {
    const query = e.target.value;
    this.setState({inputValue: query});
  }

  onSearchPressed() {
    console.log(this.state.inputValue);
    this.setState({query: 'searching for... ' + this.state.inputValue});
  }

  render() {
    return (
      <div>
        <div class='row center'>
          <Header />
        </div>
        <div class='row center'>
          <div class='inputWrapper'>
          <Typeahead class='input' options={['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado', 'Connecticut', 'Delaware',
            'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
            'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
            'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
            'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming']} maxVisible={2}
            onOptionSelected={this.handleQueryChange.bind(this)}
            onChange={this.handleTypingChange.bind(this)}/>
          </div>
          <div class='buttonWrapper'>
            <a onClick={this.onSearchPressed.bind(this)} class="waves-effect waves-light btn">Search</a>
          </div>
        </div>
        <div class="row center">
          <Query query={this.state.query}/>

        </div>
      </div>
    );
  }
}
