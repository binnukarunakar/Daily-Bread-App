import {useState, useEffect} from 'react';
import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Provider, Card, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function ReminderMain(props){   
    
    const [data, setData] = useState([])
    const [loadingData, setLoading] = useState(true)

    const loadPage = () => {
        fetch('http://localhost:3000/reminder/get',{
            method:'GET'
        })
        .then(resp => resp.json())
        .then(output => {
            setData(output)
            setLoading(true)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        loadPage()
    }, [])

    //New addition
    const navigation = useNavigation();

    const [reminder_title, set_reminder_title] = useState("");
    const [reminder_entry, set_reminder_entry] = useState("");
    const [reminder_due_time, set_reminder_due_time] = useState("");
    const [reminder_due_date, set_reminder_due_date] = useState("");
    
    const renderData = (item) => {
        return (
            <Provider> 
                    <View style= {styles.textstyle}> 

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{fontSize: 16, textAlign: 'left'}}>{item.reminder_title}</View>
                        <View style={{fontSize: 12, textAlign: 'right'}}>{item.reminder_due_date}</View>    
                    </View>
                    <View style={{fontSize: 12, textAlign: 'right'}}>{item.reminder_due_time}</View>  
                    
                    </View>
                   
            </Provider>
        )
    }
   
    return (
        <View style = {{flex:1}}>
            <FlatList
                data = {data}
                renderItem = {({item}) => {
                    return renderData(item)
                }}
                onRefresh={()=>loadPage}
                refreshing={loadingData}
                keyExtractor = {item => `${item.reminder_title}`}   
                     
            />
            <FAB
            style = {styles.fab}
            small={false}
            icon="plus"
            theme={{colors:{accent:"green"}}}
            //onPress={()=>console.log("Pressed")}
            onPress={()=>props.navigation.navigate('Reminder Entry')}
            />

        </View>
    )
   
}



const styles = StyleSheet.create(
    {
        textstyle: {
            fontSize:20,
            fontWeight: 'bold',
            backgroundColor:'white',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16
        },
        fab: {
            position:"absolute",
            margin:16,
            right:0,
            bottom:0
        }
    }
)

export default ReminderMain;