import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity, Button} from 'react-native';

export default class Login extends Component {
  render() {
    return (
    	<View style={styles.container}>
    	<Image 
    	style={{width:100,height:200}}
    	source={require('./Sariflogogradient.png')} />
        <Button style ={{marginVertical: 20,flexDirection: 'row',justifyContent: 'space-between'}}
            onPress={() => this.props.navigation.navigate('BiodataScreen')} title="Biodata"
            title="Login"
			color="#8c6723"
			width= "250"
			height= "40"
			alignItems= "center"
			justifyContent= "center"
			backgroundColor= "#3B5998"
			marginVertical= "10"
			paddingHorizontal= "80"
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
	    backgroundColor: '#fff'
	},
})