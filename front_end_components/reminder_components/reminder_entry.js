//import "https://cdn.syncfusion.com/ej2/material.css"
import {useState, useEffect} from 'react';
import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
//import DatePicker from "react-datepicker";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';


function ReminderEntry(props){
    
    //getting date and time values
   // const [startDate, setStartDate] = useState(new Date());

 //   const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(),14);
  //  const startDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(),10);
  //  const enddate: Date = new Date(new Date().getFullYear(), new Date().getMonth(),20);


    const [reminder_title, set_reminder_title] = useState("");
    const [reminder_entry, set_reminder_entry] = useState("");
    const [reminder_due_time, set_reminder_due_time] = useState("");
    const [reminder_due_date, set_reminder_due_date] = useState("");




    const inputData = () => {
        fetch('http://localhost:3000/reminder/add', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({reminder_title:reminder_title,reminder_entry:reminder_entry,reminder_due_time:reminder_due_time,reminder_due_date:reminder_due_date})
        })
        .then(resp => resp.json())
        .then(output => {
            props.navigation.navigate('Reminder')
        })
        .catch(error=>console.log(error))
    }

    return (
        <View>
            <TextInput style = {styles.inputStyle}
                label = "Reminder Title"
                value = {reminder_title}
                mode = "outlined"
                onChangeText = {text => set_reminder_title(text)}
            />

            <TextInput style = {{padding:15, margin:10}}
                label = "Description"
                value = {reminder_entry}
                mode = "outlined"
                multiline
                numberOfLines={20}
                onChangeText = {text => set_reminder_entry(text)}
            />
          

            <Button
                style = {{margin:10}}
                icon = "floppy"
                mode = "contained"
                onPress = {() => inputData()}
            >
                Save Reminder
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding: 10,
        marginTop: 30,
        margin: 10
    }

})

export default ReminderEntry