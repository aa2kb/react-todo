var React = require('react');
var TodoList = require('todolist');
var AddTodo = require('addtodo');
var TodoSearch = require('todosearch');
var TodoApp = React.createClass({
  getInitialState(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'clear the yard'
        },
        {
          id: 3,
          text: 'play games'
        },
        {
          id: 4,
          text: 'code something'
        }
      ]
    }
  },
  handleAddTodo(text){
    alert(text);
  },
  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render(){
    var {todos}= this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onaddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;