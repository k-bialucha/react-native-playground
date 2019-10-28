import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Todos from './screens/Todos';

import { TodosProvider } from './context/TodosContext';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Todos: { screen: Todos },
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => (
  <TodosProvider>
    <AppContainer />
  </TodosProvider>
);

export default App;
