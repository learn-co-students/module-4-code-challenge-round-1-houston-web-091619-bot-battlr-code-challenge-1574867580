import React from "react";
import BotCard from "../components/BotCard"; // importing the specific bot cards
import BotSpecs from "../components/BotSpecs"; // importing the details for the bots

export default class BotCollection extends React.Component { // class component

  state = { // state to current bots initially as an empty array
    currentBot: {}
  };

  setCurrentBot = bot => { // settting state to current bot to equal to bot
    this.setState({
      currentBot: bot
    });
  };

  clearCurrentBot = () => { // clearing the current bot initially back to an empty array
    this.setState({
      currentBot: {}
    });
  };

  renderBots = () => {
    if (!this.state.currentBot.id) { // setting a condition id the state of the current bot id
      return ( //return the collection of bots
        <div className="row">
          <h1>Collection of all bots</h1>
          {this.props.bots.map(bot => ( // map through the array 
            <BotCard key={bot.id} bot={bot} seeBot={this.setCurrentBot} /> // set the current bot id card to the bollection 
          ))}
        </div>
      );
    } else { //if so 
      return ( // then return all the bots specs
        <BotSpecs
          bot={this.state.currentBot} // state for current bot
          enlist={this.props.addArmy} // state to add bots to list
          goBack={this.clearCurrentBot} // state to go back to current bot pag
          addArmy={this.props.addArmy} // state to add bot to collection
        />
      );
    }
  };

  render() {
    return <div className="ui four column grid">{this.renderBots()}</div>; // rendering all the bots function
  }
}


