var React = require('react');
var Todo = require('todo');
var TodoList = React.createClass({
  addTodo(e){
    e.preventDefault();
    var todoText = this.refs.text.value;
    if(todoText.length > 0){
      this.refs.text.value = "";
      this.props.onaddTodo(todoText);
    }
    else{
      this.refs.text.focus();
    }

  },
  render(){
    return (
      <div>
        <form ref="form" onSubmit={this.addTodo}>
          <input type="text" placeholder="What do you need to do ?" ref="text"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoList;