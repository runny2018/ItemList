import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, FlatList, Alert, Image, TouchableOpacity} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddItem from './AddItem';


class FlatListItem extends Component
{
    constructor(props){
        super(props);
        this.state = {
            activeRowKey: null
        };

    }
    render(){
        const swipeSettings={
            autoClose: true,
            onClose: (secId, rowId, direction) =>{
                if(this.state.activeRowKey!=null)
                {
                    this.setState({activeRowKey: null});
                }               
            },
            onOpen: (secId, rowId, direction) =>{
                this.setState({activeRowKey: this.props.item.key});     //try index,index ; key,index; index, key; key,key at both positions
            },
            right:[
                {
                    onPress: () =>{
                        const deletingRow=this.state.activeRowKey;

                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text:"No", onPress:() => console.log('Cancel was pressed'), style: 'cancel'},
                                {text: 'Yes', onPress:()=>{
                                    flatListData.splice(this.props.index, 1);

                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }}
                            ],
                            {cancelable:true}
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,     //try index,index ; key,index; index, key; key,key at both positions
            secId:1
        };
        return(
            <Swipeout {...swipeSettings}>
                <View style={{flex:1, backgroundColor: '#f5f5f5'}}>
                <Text style={styles.flatListItem}>{this.props.item.name} </Text>

            </View>
            </Swipeout>
            
        );
    }
}



export default class BasicFlatList extends Component
{
    constructor(props){
        super(props);
        this.state = ({
            deletedRowKey: null
        });
    }

    clickHandler = () =>{
        Alert.alert("Floating button clicked");
        //this.refs.addModal.showAddItem();
    };

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 2,
              width: "100%",
              backgroundColor: "#CED0CE",
              
            }}
          />
        );
      };


    refreshFlatList = (deletedKey) =>{
        this.setState((prevState) =>{
            return{
                deletedRowKey:deletedKey
            };
        });
    }
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList 
                data={flatListData}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={({item, index})=>{
                
                return(
                    <FlatListItem item={item} index={index} parentFlatList={this}>
                        
                    </FlatListItem>
                );
                }}
                >

                </FlatList>
                <TouchableOpacity activeOpacity={0.7} onPress={this.clickHandler} style={styles.touchableOpacityStyle}>
                    <Image source={require('../images/add.png')} style={styles.floatingButtonStyle} />

                </TouchableOpacity>
                

            </View>
        );
    }
}



const styles=StyleSheet.create({
    flatListItem:{
        color:'black',
        padding: 15,
        fontSize: 20
    },

    touchableOpacityStyle:{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right:30,
        bottom:30,
        
        
    },

    floatingButtonStyle:{
        
        width:50,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 25
        
    },

    
});