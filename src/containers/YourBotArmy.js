import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.bots.map(botData=> <BotCard bot={botData}
			  										  removeBot={this.props.removeBot}/>)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
