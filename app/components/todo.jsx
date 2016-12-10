var React = require('react');

var Todo = React.createClass({
  render(){
    var {text,id}= this.props;
    return (
      <div>{id}. {text}</div>
    )
  }
});

module.exports = Todo;