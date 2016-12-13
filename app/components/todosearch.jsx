var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={()=>{
            dispatch(actions.setSearchText(this.refs.searchText.value));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
              dispatch(actions.toggleShowCompleted());
            }}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = connect(
  (state)=>{
    return{
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
