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
    ToastAndroid,

} from 'react-native';
import Header from  '../widgets/Header';
import Button from '../widgets/Button';

var ProgressBar = require('ProgressBarAndroid');



// 验证码获取等待时间
const WAIT_CODE_TIME = 10;


export default class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username :"",
            password :"",
            code:"",
            time: WAIT_CODE_TIME, // 剩余时间
            btnCode:"获取验证码",
            enableBtnCode:true,
            progress:0.5
        };

    }



    _onRegister(that){
        console.log("register... ")

        ToastAndroid.show('注册成功！', ToastAndroid.LONG);

        setTimeout(()=>{

            var navigator = that.props.navigator;
            navigator.pop();

        },3000);



    }

    /**
     * 获取验证码
     * @param that
     * @private
     */
    _onGetCode(that){
        console.log("get code ... ")
        if(this.state.enableBtnCode){
            that.setState({enableBtnCode:false});
            var timer = setInterval(()=>{
                var time = this.state.time -1;
                that.setState({time:time,btnCode:'剩余('+ time+'s)'});
                if(time <= 0){
                    clearInterval(timer);
                    that.setState({
                        btnCode:'重新获取验证码',
                        time: WAIT_CODE_TIME,
                        enableBtnCode:true
                    });
                }
            },1000);
        }




    }

    render() {
        return (
            <View style={{backgroundColor:'#ffffff'}}>
                <Header title="注 册"
                    enableBackBtn={true}
                    onPressBack={()=>{ this.props.navigator.pop();}}
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
                <View style={[styles.flexRow,{marginTop:10}]}>
                    <Text style={styles.flexRowLabel}>验证码  </Text>
                    <View style={[styles.flexRow,{flex:1.3,marginRight:10,padding:0,}]}>
                        <TextInput
                            style={[styles.flexRowColunm,{flex:0.5}]}
                            underlineColorAndroid="#ffffff"
                            placeholder={''}
                            onChangeText={(text) => this.setState({code:text})}
                        ></TextInput>
                        <Button
                            style={{flex:0.5}}
                            enable={this.state.enableBtnCode}
                            title={this.state.btnCode}
                            onPress={()=>this._onGetCode(this)}
                        ></Button>
                    </View>
                </View>

                <Button
                    onPress={()=>this._onRegister(this)}
                    style={{marginTop:15, marginLeft:10,marginRight:10}}
                    title="注 册"
                >
                </Button>

                <ProgressBar progress={this.state.progress} />
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
        marginRight:10,
        flex: 1.3,
        borderWidth:1,
        borderColor:'#eeeeee',

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