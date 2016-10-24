/**
 * Created by ROOT on 2016/10/18.
 */


import React , { Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,


} from 'react-native';
// 样式
import Styles from './Styles';
import Header from '../widgets/Header';



export default class LifePass extends Component{


    constructor(props) {
        super(props);


    }


    render() {
        return (
            <View style={Styles.Common_BackgroundColor}>
                <Header
                    title="jiedu"
                    enableBackBtn={true}
                    backgroundColor="#3CA352"
                    onPressBack={()=>{ this.props.navigator.pop();}}

                    iconRightBtn="user"
                    onPressRightBtn={()=>{

                    }}

                ></Header>

            </View>
        )
    }


}

