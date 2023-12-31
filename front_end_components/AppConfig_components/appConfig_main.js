import {useState, useEffect} from 'react';
import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Provider, Card, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';



/* New code Test */
const data = [
    {id: 'Weight'},
    {id: 'B.P'},
    {id: 'No. of Steps'},
]
const AppConfigMain = () => {
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 110, backgroundColor: 'lightyellow'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 20}}>{item.id}</Text>
            </View>
            <View style={{ width: 400, backgroundColor: 'white'}}>
                <TextInput style = {{padding:15, margin:10, borderWidth: 1}}
                    mode = "outlined"
                />
            </View>
            <View style={{ width: 400, backgroundColor: 'white'}}>
                <TextInput style = {{padding:15, margin:10, borderWidth: 1}}
                    mode = "outlined"
                />
            </View>
        </View>
    )
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left', marginTop: '0%', padding:15 }}>
            <Text style={styles.TextStyle}>Fitness</Text>
            <View style={{ width: 910, backgroundColor: 'lightyellow',flexDirection: 'row'}}>
               <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: '275px',justifyContent: 'space-between'}}>Current</Text>
               <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: '350px',justifyContent: 'space-between'}}>Goal</Text>
            </View>
            <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} />
        </View>
    )
}
const styles = StyleSheet.create({
    TextStyle: {
        padding: 3,
      //  marginTop: 30,
      //  margin: 10,
        fontWeight: 'bold',
        fontSize: 25
    }

})
export default AppConfigMain;








/* end*/
/*
function AppConfigMain(){   
    //variable to contain fitness markers names
    const fit_markers = [
        {weight: "",bp: "",no_steps: ""}
    ]


    return(
        
    )


        /*
        <View>
            
            <Text style={styles.TextStyle}>Fitness</Text>
            <View style = {{flex:1}}>
                <FlatList><Text>Hello</Text></FlatList>
            </View>
            
        </View>
        */
    


/*
const styles = StyleSheet.create({
    TextStyle: {
        padding: 10,
      //  marginTop: 30,
        margin: 10,
        fontWeight: 'bold',
        fontSize: 25
    }

})

export default AppConfigMain;
*/