import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
    super()
    this.state={
      bots:[],
      displayBots:[],
      myBots:[]
    }
  }
  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        bots:data,
        displayBots:data
      })
    })
  }

  addBot=(bot)=>{
    console.log(bot)
    if(this.state.myBots.some(botData=> bot === botData)){
      console.log('already added')
    }else{
      let newBot=[...this.state.myBots,bot]
      this.setState({
        myBots:newBot
      })
    }
  }
    
  // let usersOnline = this.state.users.filter(user => {
  //   return user.online === true;  /* can use just - (return user.online),
  //                                    put for your  reference. */
  // }) ; 

  removeBot=(bot)=>{
    console.log(bot)
    let newList = this.state.myBots.filter(botData=> botData !== bot)
    this.setState({
      myBots:newList
    })
  }
  render() {
    return (
      <div>
        {<YourBotArmy 
          bots={this.state.myBots}
          removeBot={this.removeBot}/>}
        {<BotCollection 
          bots={this.state.displayBots}
          addBot={this.addBot}/>}
      </div>
    );
  }

}

export default BotsPage;
