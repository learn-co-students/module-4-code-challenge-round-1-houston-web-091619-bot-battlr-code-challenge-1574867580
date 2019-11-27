import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myArmy: [],
    currentBot: {}
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(res => this.setBots(res));
  }

  setBots = data => {
    this.setState({
      bots: data
    });
  };

  addToArmy = bot => {
    this.setState({
      myArmy: [...this.state.myArmy, bot]
    });
  };

  removeBot = (bot) => {
    this.setState({
      selectedBots: this.state.selectedBots.filter(robot => robot !== bot)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myArmy} removeBot={this.state.removeBot}/>
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} />
      </div>
    );
  }
}

export default BotsPage;
