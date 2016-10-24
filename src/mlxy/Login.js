/**
 * Created by ROOT on 2016/10/11.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,

} from 'react-native';
import Header from  '../widgets/Header';
import Button from '../widgets/Button';
import Register from './Register';



export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username :"",
            password :""
        };

    }

    _onLogin(that){
        console.log("login... ")
        // var navigator = that.props.navigator;
        // navigator.push({
        //     title: 'Map',
        //     component: Map,
        // });
    }

    _onRegister(that){
        console.log("register... ")

    }


    render() {
        return (
            <View style={{backgroundColor:'#ffffff'}}>
                <Header title="登 录"
                    enableBackBtn={true}
                    backgroundColor="#3CA352"
                    onPressBack={()=>{ this.props.navigator.pop();}}

                    textRightBtn="注册"
                    onPressRightBtn={()=>{
                        var navigator = this.props.navigator;
                        navigator.push({
                            title: 'Register',
                            component: Register,
                        });
                    }}
                ></Header>


                <View style={[styles.flexRow,{marginTop:10}]}>
                    <Text style={styles.flexRowLabel}>手机号  </Text>
                    <TextInput
                        style={styles.flexRowColunm}
                        underlineColorAndroid="#ffffff"
                        placeholder={'请输入手机号'}
                        onChangeText={(text) => this.setState({username:text})}
                    ></TextInput>
                </View>
                <View style={[styles.flexRow,{marginTop:10}]}>
                    <Text style={styles.flexRowLabel}>密    码  </Text>
                    <TextInput
                        style={styles.flexRowColunm}
                        underlineColorAndroid="#ffffff"
                        secureTextEntry={true}

                        placeholder={'请输入密码'}
                        onChangeText={(text) => this.setState({password:text})}
                    ></TextInput>
                </View>


                <Button
                    onPress={()=>this._onLogin(this)}
                    style={{marginTop:15,marginLeft:10,marginRight:10}}
                    title="登 录"
                >
                </Button>

                <View style={{flex:1, flexDirection:'row',alignItems:'flex-end',bottom:0,marginTop:10}}>
                    <Text style={styles.style_view_unlogin}>
                        无法登录?
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:'#3CA352',
        height: 40,
        justifyContent:'center',
        alignItems:'center',
    },
    header_title:{
        flex:1,
        color:'#ffffff',
        textAlign:'center',
    },
    settings:{
        position:'absolute',
        top: 10,
        right:10,
    },
    back:{
        position:'absolute',
        top: 10,
        left:10,
    },
    flexRow:{
        flexDirection: 'row'
    },
    flexRowLabel:{
        flex: 0.3,
        textAlignVertical:'center',
        textAlign:'right',
    },
    flexRowColunm:{
        flex: 1.3,
        borderWidth:1,
        borderColor:'#eeeeee',
        marginRight:10,

        padding:0,
        paddingLeft:5,
        paddingRight:5,
    },

    style_view_button:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        borderColor:'#5bc0de',
        height:45,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin:{
        fontSize:15,
        color:'#63B8FF',
        marginLeft:10,
    },
    style_view_register:{
        fontSize:15,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right',
    }
})