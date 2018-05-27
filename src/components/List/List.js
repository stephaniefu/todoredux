import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ListEntry from '../ListEntry/ListEntry'
import { getTodos, toggleTodo } from '../../actions/todoActions'

class List extends Component {

componentWillMount(){
  const { getTodos } = this.props;
  getTodos();
}

componentWillReceiveProps(nextProp) {
  console.log('this is next', nextProp)
  if (nextProp.item) {
    this.props.todos.unshift(nextProp.item);
  }
}

render() {
  return (
    <Fragment>
      {this.props.todos.map((todo, i) => (
        <ListEntry todo={todo} key={todo.id} onClick={toggleTodo}/>
      ))}
    </Fragment>
  );
}}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  item: state.todos.item
})

export default connect(mapStateToProps, { getTodos, toggleTodo })(List);