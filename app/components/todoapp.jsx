var React = require('react');
var TodoList = require('todolist');
var TodoApp = React.createClass({
  getInitialState(){
    return{
      todos:[
        {
          id: 1,
          text : 'walk the dog'
        },
        {
          id:2,
          text: 'clear the yard'
        },
        {
          id:3,
          text: 'play games'
        },
        {
          id:4,
          text: 'code something'
        }
      ]
    }
  },
  render(){
    var {todos}= this.state;
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;