import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import Search from "../components/Search"
class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
    super()
    this.state={
      bots:[],
      displayBots:[],
      myBots:[],
      currentBot:null,
      checkSpec:false,
      serachText:''
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

  removeBot=(bot)=>{
    console.log(bot)
    let newList = this.state.myBots.filter(botData=> botData !== bot)
    this.setState({
      myBots:newList
    })
  }

  searchBot=()=>{
    console.log('searching')
  }

  handleViewSpec =(bot)=>{
    this.setState({
      currentBot:bot,
      checkSpec:!this.state.checkSpec
    })
  }

  render() {
    
    return (
      <div>
        {<YourBotArmy 
          bots={this.state.myBots}
          removeBot={this.removeBot}/>}
        {this.state.checkSpec?
          <div>
            <BotSpecs 
             bot={this.state.currentBot}
             addBot={this.addBot}
             handleViewSpec={this.handleViewSpec}/>
          </div> 
          :
          <div>
            <Search />
            <BotCollection 
            bots={this.state.displayBots}
            addBot={this.addBot}
            handleViewSpec={this.handleViewSpec}/>
          </div>}
      </div>
    );
  }

}

export default BotsPage;
