import React from 'react';
import {Text,View,TouchableOpacity, TextInput}  from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
            <View style = {styles.container}> 
            <View>
                <Text style = {{textAlign: 'center', fontSize: 30, backgroundColor:'lightblue'}}> STORY HUB </Text>
            </View>
            <View style  = {styles.inputView}>
            <TextInput 
                style = {styles.inputBox}
                placeholder = "Tiltle Of The Story" ></TextInput>
            </View>
            <View style = {styles.inputView}>
            <TextInput 
                style = {styles.inputBox}
                placeholder = "Aurthor Of The Story"></TextInput>
            </View>
            <TextInput
                  style={styles.storyBox}
                  placeholder = "Write your story here"></TextInput>
                  <TouchableOpacity 
                  style = {styles.submitButton}
                  onPress = {this.submitStory}
                  >
                    <Text style = {styles.buttonText}>Submit</Text>
                  </TouchableOpacity>


</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    storyBox:{
        backgroundColor:'#234EAF',
        width: 50,
        borderWidth: 1.3,
        borderRightWidth: 1.3,
        fontSize: 22,
        backgroundColor: 'white'
    },
    scanButton:{
        backgroundColor: '#66BB6A',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    },
    submitButton:{
      backgroundColor:'#ee3cc4' ,
      width: 100,
      height:50
    },
    submitButtonText:{
      padding:10,
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    }
});