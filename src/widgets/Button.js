/**
 * Created by ROOT on 2016/10/11.
 */
import React , { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Button extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount(){

    }


    render() {
        return (
           <TouchableOpacity style={[styles.button,this.props.style]}
                  opacity={()=>{
                      consoe.log(this.props.enable)
                      return this.props.enable?1 : 0.8;
                  }}
                  activeOpacity={0.8}
                  onPress={this.props.onPress}
                  underlayColor="#42CE73"
                >
                {/*<Icon name="chevron-left" size={20} color={'#ffffff'} />*/}
                <Text style={{color:'#ffffff'}}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:'#3CA352',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height: 36,  borderRadius:3,

    },





})