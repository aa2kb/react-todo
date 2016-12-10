var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var AddTodo = require('addtodo');

describe('AddTodo',()=>{
  it('should exist',()=>{
    expect(AddTodo).toExist();
  });

  it('should call onaddTodo if valid todo entered',()=>{
    var spy = expect.createSpy();
    var todo = 'New todo';
    var AddTodoEL = TestUtils.renderIntoDocument(<AddTodo onaddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(AddTodoEL));
    AddTodoEL.refs.text.value = todo;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(todo);
  });
});