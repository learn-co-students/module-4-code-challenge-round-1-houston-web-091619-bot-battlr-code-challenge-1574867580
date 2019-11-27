import React from "react";
import BotCard from "../components/BotCard"; // importing a specific bot card to set for my army

const YourBotArmy = props => { //functional component
  //your bot army code here...
  console.log(props) // console log which props show up
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row"> 
          {props.bots.map(bot => <BotCard key={bot.id} bot={bot} />)} 
          <h1>Your Bot Army</h1>
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy

// mapping through the bots array, setting the bot id to a specific bot card 