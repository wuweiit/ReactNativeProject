/**
 * Created by ROOT on 2016/10/11.
 */
import React , { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    AsyncStorage,

} from 'react-native';



export default class Stroe extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }


    _onClick(that){
        console.log("=== == === = = = ")
        try {
              AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {
            // Error saving data
            console.log(error)
        }
        try {
            const value =   AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null){
                // We have data!!
                console.log(value+".");
            }
        } catch (error) {
            // Error retrieving data
            console.log(error)
        }

    }



    render() {
        return (
            <TouchableOpacity onPress={()=>this._onClick(this)}>
                <Text>存储数据</Text>
            </TouchableOpacity>
        )
    }
    videoError(){
        console.log("error")
    }
    loadStart(){
        console.log("starts")
    }
}


const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 50,
        right: 0,
    },
})