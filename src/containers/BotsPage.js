import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
  
    this.state = {
       bots: [],
       botsDefault: [],
       myArmy: [],
       isLoaded: true
    }
  }

  componentDidMount() {
      fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          bots: json,
          botsDefault: json
        })
      });
    }

    addArmy = bot => {
      let botId
      this.state.myArmy.map(bot => {
       botId = bot.id
      })
      if (bot.id != botId )
      this.setState({
        myArmy: [...this.state.myArmy, bot]
      })
      else {
        this.state.myArmy.remove(bot)
      }
    };

    render() {
      var { isLoaded } = this.state;
       
      if (!isLoaded) {
        return <div>Loading...</div>
      }
      else {
        return (
        <div>
          <YourBotArmy bots={this.state.myArmy} />
          <BotCollection bots={this.state.bots} addArmy={this.addArmy} />
        </div>
      );
    }
  }
}

export default BotsPage;



