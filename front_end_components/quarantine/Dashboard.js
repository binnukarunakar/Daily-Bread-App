import React, {Component} from 'react';
//import axios from 'axios';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const dashboard_icons = [{key:'Diary', value:'notebook'},{key:'Reminder', value:'note-text'},{key:'Music', value:'music'},{key:'Daily Quote', value:'brain'},{key:'Fitness', value:'run'}]
const numColumns = 3

export default class Dashboard extends Component {   
    //Initiallizing Dashboard Icons
    _renderData = ({item, index}) => {
        return (
        <View style  = {styles.cardStyle}> 
            <Button labelStyle={{ textAlign: 'center',  fontSize: 60, marginTop:125, position:'relative'}} style = {{ width: "450px", height: "150px", backgroundColor: 'grey', position: 'absolute'}} mode = "contained" icon = {item.value}  onPress={()=>console.log('pressed')}/>
            <Text style = {{height:'250px',width:'78px'}}>{item.key}</Text>
        </View>  
        )
    }

    render() {
        return(
            <View style={styles.gridStyle}> 
                <FlatList
                    data = {dashboard_icons}
                    renderItem = {this._renderData}
                    keyExtractor={(item, index)=>index.toString()}
                    numColumns={numColumns}
                />
            </View>
        )
    } 
}

const styles = StyleSheet.create(
    {
        textstyle: {
            color: 'white',
            padding: 10,
            margin: 20,
            fontSize: 50
        },
        gridStyle: {
            flex:1,
            marginTop:40          
        },
        cardStyle: {
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
            flex: 1,
            margin: 1
        }

    }
)

