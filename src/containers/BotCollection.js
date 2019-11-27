import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
  state = {
    currentBot: {}
  }; 

  setCurrentBot = bot => {
	this.setState({
	  currentBot: bot
	});
  };
  

  render(){
	//   console.log(this.state.currentBot)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				
				{this.props.bots.map(bot => 
				<BotCard bot={bot} key={bot.id} addArmy={this.props.addArmy} 
				setCurrentBot={this.props.setCurrentBot} />)}
    		</div>
  	  </div>
  	);
  }
  

};

export default BotCollection;



