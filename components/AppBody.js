import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, View } from 'react-native';
import BookingLunchSuccess from "./BookingLunchSuccess";


class AppBody extends React.Component {
    constructor(props){
        super()
    }
    render(){
        //console.log('da vidimo:', this.props.respdata.name)
        let styleOb = this.props.respdata.pages[0].xsFields[0].styles
        /*styleOb.padding = '5%'*/
        return(
            <View>
            <BookingLunchSuccess  allData = {this.props.respdata}/>

            {/*<View style = {this.props.styles.redbox} />
            <View style = {this.props.styles.bluebox} />
            <View style = {this.props.styles.blackbox} />*/}

            </View>
        )
    }
}; 


export default AppBody;