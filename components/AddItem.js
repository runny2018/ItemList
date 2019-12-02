import React, {Component} from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight, Dimensions, TextInput} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';
import { bold } from 'ansi-colors';

var screen=Dimensions.get('window');

export default class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            newFoodName:''
        };
    }

    showAddItem=()=>{
        this.refs.myModal.open();
        
    }

    generateKey = (numberOfCharacters) =>{
        return require('random-string')({length: numberOfCharacters});
    }

    render(){
        return(
            <Modal style={{
                justifyContent: 'center',
                borderRadius: 0,
                shadowRadius: 10,
                width: screen.width - 80,
                height: 280
            }}
            ref={"myModal"}
            position='center'
            backdrop={true}
            onClosed={() => {
                
            }}>
                <Text style={styles.title}>Enter Fruit Name</Text>
                <TextInput 
                style={styles.fruitInput}
                placeholder="Fruit"
                value={this.state.newFoodName}
                onChangeText={(text)=> this.setState({newFoodName:text})}/>

                <Button
                style={styles.modalButton}
                containerStyle={styles.buttonContainer}
                onPress={()=>{
                    if (this.state.newFoodName.length == 0){
                        alert("Please enter the fruit name.");
                        return;
                    }
                    const newKey=this.generateKey(24);
                    const newFood = {
                        name: this.state.newFoodName,
                        key: newKey
                    };
                    flatListData.push(newFood);
                    this.props.parentFlatList.refreshFlatList(newKey);
                    this.refs.myModal.close(); 
                }}>
                    Save
                </Button>
            </Modal>
        );
    }
}

const styles=StyleSheet.create({
    title:{
        
        textAlign:"center",
        fontWeight:"bold",       
        fontSize:20,
        marginTop:40
    },

    fruitInput:{
        height:40,
        borderBottomColor:"gray",
        marginLeft:30,
        marginRight:30,
        marginTop:20,
        marginBottom:10,
        borderBottomWidth:1

    },

    modalButton:{
        
        fontSize:18,
        color:'white'
    },

    buttonContainer:{
        marginTop:20,
        padding:8,
        marginLeft:132,
        marginRight:132,
        height:40,
        borderRadius:6,
        backgroundColor:'mediumseagreen'
    }

    

});

