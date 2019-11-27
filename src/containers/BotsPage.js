import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      bots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => {
      bots.map(bot => bot.inArmy = false)
      this.setState({
        bots
      })
    });
  }

  // addBot = (bot) => {
  //   if (this.state.botArmy.find(abot => abot === bot)) {
  //     this.setState({
  //       botArmy: this.state.botArmy.filter(abot => abot !== bot)
  //     })
  //     return;
  //   }
  //   this.setState({
  //     botArmy: [...this.state.botArmy, bot]
  //   })
  // }

  addBot = (bot) => {
    if (this.state.botArmy.find(abot => abot === bot)) return;
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

  removeBot = (bot) => {
    this.setState({
      botArmy: this.state.botArmy.filter(abot => abot !== bot)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeBot={this.removeBot} />
        <BotCollection bots={this.state.bots} addBot={this.addBot} />
      </div>
    );
  }

}

export default BotsPage;
