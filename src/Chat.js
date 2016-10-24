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
    ListView,TextInput,

} from 'react-native';
import Header from  './widgets/Header';
import Button from  './widgets/Button';



export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isSelected: true,
            totalPrice: 0,
            data: [
                {title: "你好，你是谁。。。", count: 1, price: 0}
                , {title: "你好，再见!", count: 1, price: 188.02}
                , {title: "也许是南瓜。。。", count: 0, price: 188.02}
                , {title: "也许是南瓜。。dsasaaaaaaaaaaaaaaamlmmkmklfmdsamfmga;sadf;ms;afdsafmdsa;kfmskdafm;。", count: 0, price: 188.02}
            ],
            messageContent:"",
        }
    }


    componentDidMount() {

    }

    _onSendMessage(that){
        if(that.state.messageContent != ""){
            that.state.data.push({title: this.state.messageContent});
            that.state.messageContent = "";
            that._textInput.clear();
            that.setState(this.state);
        }
    }


    render() {
        return (
            <View style={{flex:1}}>
                <Header title="张 三"
                        style={{position:'absolute',top:0}}
                        backgroundColor="#3CA352"
                        enableBackBtn={true}
                        onPressBack={()=>{ this.props.navigator.pop();
                        }}
                ></Header>
                <ListView style={{marginBottom:70}}
                        ref={(component) => {this._listView = component;}}
                      dataSource={this.ds.cloneWithRows(this.state.data)}
                      renderRow={(rowData, sectionID, rowID) =>
                          <View style={styles.product_item}>
                              <Image source={require('../img/product1.png')}
                                     style={{width:40,height:40,borderRadius:20, }}
                              ></Image>
                              <View style={styles.messageWrapper}>
                                  <Text style={styles.messageText}>{rowData.title}</Text>
                              </View>
                          </View>
                      }
                          onEndReached={()=>{
                              this._listView.scrollTo({x:0,y:this._listView._sentEndForContentLength,animated:true});
                          }}
                />
                <View style={styles.messageBox}>
                    <TextInput style={styles.input}
                           ref={(component) => {this._textInput = component;}}
                           underlineColorAndroid="#ffffff"
                           onChangeText={(text) => this.setState({messageContent:text})}
                    ></TextInput>
                    <Button
                        style={styles.sendButton}
                        title="发 送"
                        onPress={()=>this._onSendMessage(this)}
                    >
                    </Button>
                    <View style={ styles.toolsbars}></View>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({

    product_item:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        padding:6,

    },
    messageWrapper:{
        backgroundColor:'#efefef',
        padding:5,
        flex:1

    },
    messageText:{

    },
    toolsbars:{
        height:30,
        backgroundColor:'#ccc',
        position:'absolute',
        top:40,
        right:0,
        left:0,


    },
    messageBox:{
        height:70,
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
    },
    input:{
        height:40,
        marginBottom:30,
        marginRight:60,
        backgroundColor:'#ffffff',
        borderColor:'#cccccc',
        borderWidth:1,
        borderRightWidth:0,
        borderRadius:3,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,


    },
    sendButton:{
        height:40,
        width:60,
        position:'absolute',
        top:0,
        right:0,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
    }
})