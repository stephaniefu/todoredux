import React, { Component } from 'react';
import { 
  TodoTitle, 
  Wrapper
} from './styles';
import { Provider } from 'react-redux';
import store from '../../store';
import List from '../List/List';
import TodoForm from '../TodoForm/TodoForm';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <TodoTitle>Todo</TodoTitle>
          <TodoForm/>
          <hr/>
          <List/>
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
