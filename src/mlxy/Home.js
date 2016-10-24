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

import Login from './Login';
import LifePass from './LifePass';


export default class Home extends Component{


    constructor(props) {
        super(props);


    }



    _onGo1(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'LifePass',
            component: LifePass,
        });
    }



    render() {
        return (
            <View style={Styles.Common_BackgroundColor}>
                <Header
                    title="mxxy"
                    iconRightBtn="user"
                    onPressRightBtn={()=>{
                        console.log("click right btn");
                        // 验证是否登录
                        var navigator = this.props.navigator;
                        navigator.push({
                             title: 'Login',
                             component: Login,
                        });
                    }}
                ></Header>
                <View style={styles.normals}>
                    <Text style={{marginLeft:20,fontSize:14,}}>功能列表</Text>
                </View>
                <View style={{marginTop:16, marginBottom:16,flexDirection:'row',justifyContent:'space-around'}}>

                    <TouchableOpacity style={styles.row_item} activeOpacity={0.8}
                        onPress={()=>this._onGo1(this)}
                    >
                        <Image source={require('../../img/ab.png')} style={styles.icon} />
                        <Text style={{marginTop:5,fontSize:12,textAlign:'center'}}>功能1</Text>
                    </TouchableOpacity>
                    <View style={styles.row_item}>
                        <Image source={require('../../img/ac.png')} style={styles.icon} />
                        <Text style={{marginTop:5,fontSize:12,textAlign:'center'}}>功能2</Text>
                    </View>
                    <View style={styles.row_item}>
                        <Image source={require('../../img/ad.png')} style={styles.icon} />
                        <Text style={{marginTop:5,fontSize:12,textAlign:'center'}}>功能3</Text>
                    </View>
                </View>










            </View>
        )
    }


}


const styles = StyleSheet.create({

    normals:{
        height:30,
        backgroundColor: '#EEEEEE',
        justifyContent:'center',
    }
    ,
    row_item:{
        width: 60,
    },
    icon:{
        height: 60,
        width: 60,

    }

})