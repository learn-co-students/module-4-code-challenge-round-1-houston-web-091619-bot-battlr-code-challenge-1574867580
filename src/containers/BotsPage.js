import React from "react";
import YourBotArmy from "./YourBotArmy"; // importing my bot army to the page
import BotCollection from "./BotCollection"; // importing all the bots to the page


export default class BotsPage extends React.Component { // class component
  //start here with your code for step one

  state = { // setting state for bots, mrArmy and current Bot as an empty array to initially start with
    bots: [],
    myArmy: [],
    currentBot: {}
  };

  componentDidMount() { // fetching all the bots 
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots") //api to fetch all the bots from 
      .then(res => res.json())
      .then(res => 
        this.setBots(res)); //setting the bots data
  }

  setBots = data => {
    this.setState({ // setting state to the bots data as its own function
      bots: data
    });
  };

  addArmy = bot => { // adding the bots to my army
    this.setState({
      myArmy: [...this.state.myArmy, bot] 
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myArmy} /> 
        <BotCollection bots={this.state.bots} addArmy={this.addArmy} />
      </div>
    );
  }
}


