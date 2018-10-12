import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
 const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.judul}>
          BIODATA
        </Text>
        <Text style={styles.welcome}>
          Vangga Fibo Eprila
        </Text>
        <Text style={styles.instructions}>
          XI RPL 1
        </Text>
        <Text style={styles.instructions}>
          38
        </Text>
        <Image
          style={{width: 250, height: 250}}
          source={require('./img.jpg')}
        />
       </View>
    );
  }
}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  judul:{
    color: "#939b99",
    fontSize: 60,
    fontWeight: 'bold'
  }
});