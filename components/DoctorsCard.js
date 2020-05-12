import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getCurrentFrame } from 'expo/build/AR';

import { SharedElement } from 'react-navigation-shared-element';
//import { MonoText } from '../components/StyledText';

export default function DoctorsCard({name, job, hospital, color, navigation, bgColor}) {
  return (
    <TouchableOpacity 
    onPress = {
        ()=>{
            navigation.push("DetailScreen", { name, job, hospital, bgColor});
        }
    }
    style={styles.container}
    >
        <SharedElement
        id={`1`}
        >
            <View style = { [styles.cardImg, {backgroundColor: color}]}/>
        </SharedElement>
        <View style  = { styles.doctorDetailsContainer}>
        <Text style = { styles.nameText}>{ name}</Text>
        <Text style = { styles.jobText}>{ job }</Text>
        <Text style = { styles.jobText}>{ hospital }</Text>
        </View>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    height: 110,
    borderRadius: 13,
    borderWidth: 1, 
    borderColor: '#F7F7F7',
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 15,
    shadowColor: "#ff0057",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
},

doctorDetailsContainer:{
    marginLeft: 23,
},
nameText:{
    fontFamily: "Helvetica Neue",
    fontWeight: '400',
    fontSize: 16,
    color: '#01005B',
    fontWeight: '400',
    //height: 1.25,
},
jobText:{
    fontFamily: "Helvetica Neue",
    fontWeight: '400',
    fontSize: 14,
    color: '#B3B2B2'
},
cardImg:{
    width: 78,
    height: 78, 
    borderRadius: 15,
    
}

});
