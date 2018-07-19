import React, { Component } from 'react';
import './App.css';
import Text from './components/Text'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Text title='Welcome to My Second React App' />
        <Text text='Todo App'/>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
