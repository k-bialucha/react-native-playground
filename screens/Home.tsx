import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class Home extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;

    return (
      <View style={styles.container}>
        <Button
          title="Go to Todo page"
          onPress={() => navigate('Todos', { name: 'TESTOWY' })}
        />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
