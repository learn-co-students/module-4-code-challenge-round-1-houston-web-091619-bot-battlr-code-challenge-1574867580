import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
    		  {this.props.bots.map(botData=> <BotCard bot={botData}
														addBot={this.props.addBot}
														handleViewSpec={this.props.handleViewSpec}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
