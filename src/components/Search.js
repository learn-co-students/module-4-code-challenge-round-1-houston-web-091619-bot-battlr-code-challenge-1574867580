import React from "react";

class Search extends React.Component {
  render(){
    return (
      <div>
          <form>
                <input type="text" placeholder="Search" value="" onChange={(event)=> console.log(event.target.value)}/>
          </form>
      </div>
    )
  }
  
};

export default Search;
