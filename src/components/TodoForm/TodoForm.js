import React, { Component, Fragment } from 'react'
import { 
  TodoInput, 
  SubmitButton,
} from './styles';
import { addTodo, getTodos } from '../../actions/todoActions';
import { connect } from 'react-redux'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      item: '',
      completed: false
    }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.onShowAll = this.onShowAll.bind(this);
  }

  onChange(e){
    this.setState({
      item: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const {addTodo} = this.props;
    const newTodo = {
      item: this.state.item,
      completed: this.state.completed
    }
    addTodo(newTodo);
  }

  onShowAll(e) {
    e.preventDefault();
    const { getTodos } = this.props;
    getTodos();
  }

  render() {
    return (
      <Fragment>
      {console.log('this is thisstateitem', this.state.item)}
        <TodoInput onChange={this.onChange}/>
        <SubmitButton onClick={this.onSubmit}>Add</SubmitButton>
        <SubmitButton>Show Active</SubmitButton>
        <SubmitButton>Show Completed</SubmitButton>
        <SubmitButton onClick={this.onShowAll}>Show All</SubmitButton>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  item: state.todos.item
})

export default connect(mapStateToProps, { addTodo, getTodos })(TodoForm)