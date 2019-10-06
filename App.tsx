import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Todo from './screens/Todo';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Todo: {screen: Todo},
});

const App = createAppContainer(MainNavigator);

export default App;