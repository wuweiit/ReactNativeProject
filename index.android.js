/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React , { Component} from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import Home from  './src/home/Home';
import Login from  './src/login/Login';
import Location from  './src/location/Location';
import Map from  './src/Map';
import ShopCar from  './src/shopcar/ShopCar';
import MyVideo from  './src/MyVideo';
import MLXYHome from  './src/mlxy/Home';
import Register from  './src/mlxy/Register';
import Chat from  './src/Chat';




class HelloWorldApp extends Component{


    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = Home;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                renderScene={(route, navigator) =>{
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />

                    }
                }>
            </Navigator>

        );
    }
}



// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject2', () => HelloWorldApp);
