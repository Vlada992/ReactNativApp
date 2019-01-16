import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, View } from 'react-native';
import BookingLunchSuccess from "./BookingLunchSuccess";
import EventItem from "./EventItem";


class AppBody extends React.Component {
    constructor(props){
        super()
    }
    render(){
        let styleCont = this.props.respdata.pages[0].xsFields[0].styles
        styleCont.padding = '4%'

        return(
            <View style={styleCont}>
            <BookingLunchSuccess  allData = {this.props.respdata}/> 
            <EventItem allData = {this.props.respdata}/> 
            </View>
        )
    }
}; 


export default AppBody;