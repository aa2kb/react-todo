var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('todoapp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todo state on handleAddtodo',()=>{
    var TodoText = 'todo text';
    var TodoAppEL = TestUtils.renderIntoDocument(<TodoApp/>);
    TodoAppEL.setState({todos:[]});
    TodoAppEL.handleAddTodo(TodoText);

    expect(TodoAppEL.state.todos[0].text).toBe(TodoText);
  });
});