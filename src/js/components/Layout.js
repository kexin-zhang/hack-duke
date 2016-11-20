import React from "react";
import ImageGallery from 'react-image-gallery';
import Carousel from 'nuka-carousel';
import $ from 'jquery';

import Header from "./Header";
import Query from "./Query";

var Typeahead = require('react-typeahead').Typeahead;
import myJSON from 'json!./county_results.json';


export default class Layout extends React.Component {

  constructor() {
    super();
    this.state={
      inputValue:null,
      query:"Empty Query",
      currentState:null,
      temp: null,
      imageUrls: new Array(26),
      infoUrls: new Array(26),
      monthlyCost: new Array(26),
      default: "small row center hide"
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
    const images = new Array(26);
    const infos = new Array(26);
    const monthlyCost = new Array(26);
    for(var i = 0; i < 26; i++){
      images[i] = myJSON[this.state.inputValue][i]["image"];
      infos[i] = "http://www.zillow.com" + (myJSON[this.state.inputValue][i]["url"]);
      monthlyCost[i] = myJSON[this.state.inputValue][i]["monthly"];
    }
    this.setState({imageUrls:images});
    this.setState({infoUrls: infos});
    this.setState({monthlyCost: monthlyCost});
    console.log(this.state.monthlyCost)
    this.setState({default: "small row center"});
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    console.log(Object.keys(myJSON).length);
    return (
      <div>
        <div class='row center'>
          <Header />
        </div>
        <div class='row center'>
          <div class='col s8'>
          <Typeahead class='input' options={Object.keys(myJSON)} maxVisible={2}
            onOptionSelected={this.handleQueryChange.bind(this)}
            onChange={this.handleTypingChange.bind(this)}/>
          </div>
          <div class='col s4'>
            <a onClick={this.onSearchPressed.bind(this)} class="waves-effect waves-light btn">Search</a>
          </div>
        </div>
        <div class={this.state.default}>
            <Carousel dragging={true}>
                <a href={this.state.infoUrls[0]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[0]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[0]}/>
                    <br/>
                </a>
                <a href={this.state.infoUrls[1]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[1]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[1]}/>
                    <br/>
                </a>
                <a href={this.state.infoUrls[2]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[2]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[2]}/>
                    <br/>
                </a>
                <a href={this.state.infoUrls[3]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[3]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[3]}/>
                    <br/>
                </a>
                <a href={this.state.infoUrls[4]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[4]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[4]}/>
                    <br/>
                </a>
                <a href={this.state.infoUrls[5]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[5]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[5]}/>
                    <br/>
                </a>
                <a href={this.state.infoUrls[6]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[6]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[6]}/>
                    <br/>
                </a>
                <a href={this.state.infoUrls[7]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[7]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[7]}/>
                    <br/>
                </a>
                <a href={this.state.infoUrls[8]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[8]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[8]}/>
                    <br/>
                </a>
                <a href={this.state.infoUrls[9]} target="_blank">
                <figcaption class="figcaption">Estimated Monthly Price: <br/> <p class="largeFont"> {this.state.monthlyCost[9]} </p> <br/> </figcaption>
                    <img src={this.state.imageUrls[9]}/>
                    <br/>
                </a>
            </Carousel>
        </div>
      </div>
    );
  }
}
