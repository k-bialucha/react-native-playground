import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Todos from './screens/Todos';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Todos: { screen: Todos },
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
