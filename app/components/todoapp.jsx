var React = require('react');
var TodoList = require('todolist');
var AddTodo = require('addtodo');
var TodoSearch = require('todosearch');
var uuid = require('node-uuid');
var TodoApp = React.createClass({
  getInitialState(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'walk the dog'
        },
        {
          id: uuid(),
          text: 'clear the yard'
        },
        {
          id: uuid(),
          text: 'play games'
        },
        {
          id: uuid(),
          text: 'code something'
        }
      ]
    }
  },
  handleAddTodo(text){
    this.setState({
      todos : [
        ...this.state.todos,
        {
          text: text,
          id: uuid()
        }
      ]
    })
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