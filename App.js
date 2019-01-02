import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, Text, View } from 'react-native';
import response from "./response.json";
import AppHead from "./components/AppHead";
import AppBody from "./components/AppBody";

export default class MyApp extends Component {
  constructor(props){
    super();
  }

  render(){
    console.log('ceo resp:', response.description)
    return (
      <View style = {styles.container}>
      <AppHead respdata = {response}/>
      <AppBody respdata = {response} styles={styles} />
      

      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => MyApp);

/*Styles for my App*/ 
const styles = StyleSheet.create ({
  container: {
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'gray',
     height: 600
  },
  redbox: {
     width: 100,
     height: 100,
     backgroundColor: 'red'
  },
  bluebox: {
     width: 100,
     height: 100,
     backgroundColor: 'blue'
  },
  blackbox: {
     width: 100,
     height: 100,
     backgroundColor: 'black'
  },
})
/*Styles for my App*/ 




/*
  componentDidMount = () => {
    fetch('https://www.getpostman.com/collections/6471a77f69db5ae7cf9e', {
       method: 'GET'
    })
    .then(response => response.json())
    .then(responseJson => {
       console.log(responseJson);
       this.setState({
          data: responseJson
       })
    })
    .catch(error => {
       console.error(error);
    });
 };
*/