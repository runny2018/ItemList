/*import React, {Component} from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight, Dimensions, TextInput} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen=Dimensions.get('window');

export default class AddItem extends Component{
    constructor(props){
        super(props);
    }

    showAddItem=()=>{
        this.refs.myModal.open();
        
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
                alert("Modal closed");
            }}
            >
                <Text>New Item</Text>
            </Modal>
        );
    }
}*/

