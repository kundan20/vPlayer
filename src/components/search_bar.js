import React, {Component} from 'react';

//class compononent is more intellegine than funtional component which keep awreness itself what user is typing and it aware about what user is exactly typed or we can say some type of internal record keeping ability
//class  component is js object which has methods and properties...
//control component has its value set by state so its value only ever changes when the state changes...

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}; //thsi.state = Object

  }

  /*render() {
    return <input onChange={this.onInputChange} />;
  }*/
  render() {
    return (
      <div className="search-bar">

        <input placeholder="Search..."
        value={this.state.term}
         onChange = {event => this.onInputChange(event.target.value )} />

      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);

  }
//event or eventObject that it gets the more info about event just occurred..
/*  onInputChange(event) {
    console.log(event.target.value);
  }
  */
//state is class based component which record the user everts/properties and ecah instances has its own copy of states...
//when we think updation process then think state...
}

export default SearchBar;
