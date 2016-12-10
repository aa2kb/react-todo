var React = require('react');

var TodoSearch = React.createClass({
  handleChange(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted,searchText);
  },
  render(){
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleChange}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleChange}/> Show Completed Todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;