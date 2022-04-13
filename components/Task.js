import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const Task = (props)=> {
    console.log(
        '1r'
    );
    const [isComplete, setComplete] = useState(false);
    return (
        <View style={styles.task}>
            <View style={styles.checkbox}>
                <TouchableOpacity onPress={setComplete(!isComplete)}>
                    <Icon name ={isComplete?'check-square':'square'} size={25} color='#708090'/>
                </TouchableOpacity>
            </View>
            <View style={{flex: 8}}>
                <Text style={styles.taskContent}>{props.text}</Text>
            </View>

                <TouchableOpacity style={{flex: 2}}>
                    <Icon name='trash-2' size={20} color='#ff6347' style={styles.trashIcon}/>
                </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        flexDirection:'row',
        // backgroundColor:'#FFF',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom: 15,
        flex: 12
    },
    checkbox:{
        marginLeft: 15,
        flexDirection: 'row',
        flexWrap:'wrap',
        flex: 2
    },
    trashIcon: {
        padding :10
    },
    taskContent: {
        fontSize: 30,
        fontWeight: '300'
    }
})

export default Task;