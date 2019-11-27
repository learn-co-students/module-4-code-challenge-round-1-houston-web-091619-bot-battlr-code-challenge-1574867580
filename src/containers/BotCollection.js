import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {this.props.boots.map(bot => <BotCard bot={bot} addRemoveBoots={this.props.addBot}/>)}
			  
			  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;


