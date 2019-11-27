import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bots: [],
      botsDisplay: [],
      myArmy: []
    };
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(data => this.setState({ bots: data, botsDisplay: data }));
  }



  addBot = (bot) => {

    this.setState({
      
      myArmy: [...this.state.myArmy, bot]
      
    })
    
  }


  

  removeBot = (bot) => {
    var botArray = [...this.state.myArmy]
    var robot = botArray.indexOf(bot)
    if (robot !== -1) {
      botArray.splice(robot, 1);
      this.setState({myArmy: botArray});
    }
  }


  render() {
    return (
      <div>
        <YourBotArmy boots={this.state.myArmy} removeBot={this.removeBot}/>

        <BotCollection boots={this.state.botsDisplay} addBot={this.addBot}/>

      </div>
    );
  }

}

export default BotsPage;

