import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

type HomeProps = {
    navigation: {
        navigate: (name: string, params: Object) => any,
    },
}

class Home extends React.Component<HomeProps> {
    static navigationOptions = {
      title: 'Home',
    };

    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
            <Button
            title="Go to Todo page"
            onPress={() => navigate('Todo', {name: 'TESTOWY'})}
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