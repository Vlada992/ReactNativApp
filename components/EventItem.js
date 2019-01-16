import React, { Component} from 'react';
import {Image, Text, View, Button, Icon} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';



class EventItem extends Component { //i can initiate component with just Component, also.
    constructor(props) {
        super()
    }
    render() {
        let styleCont = this.props.allData.pages[1].settings.styles
        styleCont.height = Number(String(this.props.allData.pages[1].settings.styles).substring(0, 5))
        let styleContMain = this.props.allData.pages[1].xsFields[0].styles
        styleContMain.borderTopWidth  = 0.5;
        styleContMain.borderRightWidth = 0.5
        styleContMain.borderBottomWidth = 0.5
        styleContMain.borderLeftWidth = 0.5
        styleContMain.marginBottom = '15%';


        return (
            <View >
            <View style={styleContMain}>
            <View style={this.props.allData.pages[1].xsFields[1].styles}>
            <Text style={{paddingLeft:15}}> 
            <FontAwesome name={this.props.allData.pages[1].icon} size={32} color="black" />
            </Text>
            </View>
            </View>


            </View>
        )
    }
};


export default EventItem;