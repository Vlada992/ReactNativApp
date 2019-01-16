import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Icon} from 'react-native';


class AppHead extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return(
            <View style={{marginBottom:2}}>
            <Image source={{uri:this.props.respdata.settings.publish.iconUrl}} style = {{ width: 200, height: 200 }}></Image>
            <Text style={{fontSize:30, fontWeight:'bold', letterSpacing:5}}>{this.props.respdata.title}</Text>
            <Text>Vladan ({this.props.respdata.description.slice(0, -4)}) ReactNativ App</Text>
            </View>
        )
    }
}


export default AppHead;