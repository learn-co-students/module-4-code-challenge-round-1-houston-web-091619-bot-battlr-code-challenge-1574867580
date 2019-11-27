import React from "react";

const BotSpecs = props => { // functional component
  console.log("BotSpecs PROPS:\n", props);
  let { bot } = props; // letting props equal to bots

  let botType;

  switch (props.bot.bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!" 
              className="ui medium circular image bordered"
              src={props.bot.avatar_url}   //url for the bots images
            />
          </div>
          <div className="four wide column"> 
            <h2>Name: {props.bot.name}</h2>  
            <p> 
              <strong>Catchphrase: </strong>
              {props.bot.catchphrase}
            </p>
            <strong>
              Class: {props.bot.bot_class} {botType} 
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{props.bot.health}</strong> 
                  </div> 
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{props.bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{props.bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui button fluid" onClick={() => props.goBack()}>  
              Go Back  
            </button>
            <button className="ui button fluid" onClick={() => props.addArmy(bot)}>
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;