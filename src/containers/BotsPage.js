import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  state = { bots:[],
            BotArmy:[] }
	
	componentDidMount() {
    
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
		  .then(res => res.json())
		  .then(bots => this.setState({
			  bots
		  }));
	  }

  render() {
    return (
      <div>

      
      {/* {<YourBotArmy BotArmy={this.state.BotArmy}/>} */}
      {<BotCollection bots={this.state.bots}/>}
      

      </div>
    );
  }

}

export default BotsPage;
