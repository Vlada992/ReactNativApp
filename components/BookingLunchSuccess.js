import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



class BookingLunchSuccess extends React.Component {      //i can EXPORT these class instances from this line also
    constructor(props){
        super()
    }
    render(){
        console.log('prazno ili ne:', this.props.allData.pages[0].xsFields[5].actions.onPress[0].name)
        let styleCont = this.props.allData.pages[0].xsFields[0].styles
        let styleIcon = this.props.allData.pages[0].xsFields[2].styles
        let styleText = this.props.allData.pages[0].xsFields[3].styles
        styleIcon.fontSize = 78 //Number(String(this.props.allData.pages[0].xsFields[2].styles.fontSize).substring(0, 3)) //i needed to rewrite this because it displays error with JSON style response 78px for JS.
        styleCont.padding = '4%'
        styleText.fontSize =  Number(String(this.props.allData.pages[0].xsFields[3].styles.fontSize).substring(0, 3))
        let popPage= function(){}

        return (
            <View style= {styleCont }>

        
            <View>
            <Text  style={{fontWeight:'bold', fontSize:32}} >  <FontAwesome name={this.props.allData.pages[0].icon} size={32} color="black" />&nbsp;&nbsp;
            {this.props.allData.pages[0].displayName}</Text>
            <Text style={{fontStyle:'italic'}}>{this.props.allData.pages[0].issuer}</Text>
            <Text>{this.props.allData.pages[0].issueDate}</Text>
            </View>

            <View style={this.props.allData.pages[0].xsFields[1].styles}>
            <Text>{this.props.allData.pages[0].xsFields[1].elementName}</Text>

            <Text>
            <FontAwesome 
            name={this.props.allData.pages[0].xsFields[2].settings.icon} style={styleIcon} 
            />
            </Text>
            <Text style={styleText}>{this.props.allData.pages[0].xsFields[3].settings.text}</Text>
            
            <Button onPress={popPage}  style={this.props.allData.pages[0].xsFields[5].styles}
            title={this.props.allData.pages[0].xsFields[5].settings.text}
            accessibilityLabel="Learn more..."></Button>

            </View>

            
            

            </View>
        )
    }
}; 


export default BookingLunchSuccess;