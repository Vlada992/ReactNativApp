import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Icon} from 'react-native';


class AppHead extends React.Component {
    constructor(props){
        super()
    }
    render(){
       // console.log('propsi ovde:', this.props.respdata)
        return(
            <View style={{marginBottom:2}}>
            {/*<Icon name={this.props.respdata.pages[0].icon}></Icon>*/}
            <Image source={{uri:this.props.respdata.settings.publish.iconUrl}} style = {{ width: 200, height: 200 }}></Image>
            <Text style={{fontSize:30, fontWeight:'bold', letterSpacing:5}}>{this.props.respdata.title}</Text>
            <Text>Vladan ({this.props.respdata.description.slice(0, -4)}) ReactNativ App</Text>
            </View>
        )
    }
}


export default AppHead;