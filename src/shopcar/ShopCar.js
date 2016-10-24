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
    ListView,
    TouchableOpacity,
    Image,
    TouchableHighlight,

} from 'react-native';
import RadioButton from 'react-native-radio-button'
import Icon from 'react-native-vector-icons/FontAwesome';
import NumberButton from '../widgets/NumberButton';





export default class Map extends Component {

    swipeoutBtns = [
        {
            text: '删除'
        }
    ]

    ds;

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state ={
            isSelected: true,
            totalPrice: 0 ,
            data:[
                 { title:"榴莲吧。。。", count: 1,price:0 }
                ,{ title:"也许是南瓜。。。",  count: 1, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
                ,{ title:"也许是南瓜。。。",  count: 0, price:188.02 }
            ]
        }

    }
    componentDidMount(){
        this.__updateTotalPrice();// 更新总价格
    }

    _onBack(){
        console.log("register... ")
        this.props.navigator.pop();

    }


    _onJieSuan(that){
        console.log("=====")
        console.log(that.state.data);

    }

    __updateTotalPrice(){
        var result = 0 ;
        for (var value of this.state.data) {
            result += value.count * value.price;
        }
        this.setState({totalPrice: result});
    }

    render() {
        return (
            <View style={{backgroundColor:'#EEEEEE',flex:1,}}>
                <View style={styles.header}>
                    <Text style={styles.header_title}>购物车</Text>
                    <TouchableOpacity style={styles.back} onPress={()=>this._onBack()}>
                        <Icon name="chevron-left" size={20} color={'#ffffff'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settings}>
                        <Icon name="cog" size={20} color={'#ffffff'} />
                    </TouchableOpacity>
                </View>

                <ListView style={{marginBottom:30,}}
                    dataSource={this.ds.cloneWithRows(this.state.data)}
                    renderRow={(rowData, sectionID, rowID) =>
                        <View style={styles.product_item}>
                            <Image source={require('../../img/product1.png')}
                                   style={{width:60,height:60}}
                            ></Image>
                            <Text>{rowData.title + '...'}</Text>
                            <View style={styles.numberButton}>
                                <NumberButton
                                    value={rowData.count} onChangeNumber={(number)=>{
                                    rowData.count = number
                                    this.setState(this.state);
                                    this.__updateTotalPrice();
                                }}></NumberButton>
                            </View>
                            <Text style={{color:'red'}}>{'￥' + rowData.price}</Text>
                        </View>
                    }
                />

                <View style={styles.footer}>
                    <Text style={styles.pfrice}>￥ {this.state.totalPrice}</Text>

                    <TouchableOpacity style={styles.jiesuan} onPress={()=>this._onJieSuan(this)}>
                        <Text style={{color:'#ffffff',}}>结算</Text>

                    </TouchableOpacity>
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

    footer:{
        position:'absolute',
        flexDirection:'row',
        backgroundColor:'#ffffff',
        height: 40,
        bottom:0,
        right:0,
        left:0,
    },
    jiesuan:{
        position:'absolute',
        backgroundColor:'#F15352',
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        width: 80,
        right:0,
        top:0,


    },
    pfrice:{
        position:'absolute',
        top:10,
        left:71,
    },

    product_item:{
        position:'relative',
        flexDirection:'row',
        backgroundColor:'#ffffff',
        padding:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#E7E7E7'

    },
    numberButton:{
        position:'absolute',
        top:45,
        left:71,
    },


})