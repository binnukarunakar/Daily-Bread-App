import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

function DiaryMain(props) {
    return (
        <ScrollView>
            <View style = {styles.detailStyle}> 
                <Text style = {{fontSize:25}}>hello</Text>
                <View style = {styles.btnStyle}>
                    <Button
                        icon = "update"
                        mode = "contained"
                        onPress = {() => props.navigation.navigate("Edit", {data:data_transfer})}
                    >
                    Edit
                    </Button>

                    <Button
                        icon = "delete"
                        mode = "contained"
                        onPress = {() => deleteData(data_transfer)}
                    >
                    Delete
                    </Button>
                </View>
            </View>
        </ScrollView>     
    )
}

const styles = StyleSheet.create({
    detailStyle: {
        padding:10,
        margin:10
    },
    btnStyle: {
        flexDirection:"row",
        justifyContent:"space-around",
        margin:15,
        padding:10
    }
})

export default DiaryMain