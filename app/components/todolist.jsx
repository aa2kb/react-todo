var React = require('react');
var Todo = require('todo');
var TodoList = React.createClass({
  render(){
    var {todos}= this.props;
    function renderTodos(){
      return todos.map((todo)=>{
        return (
        <Todo key={todo.id} {...todo}/>
        )
      });
    }
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;