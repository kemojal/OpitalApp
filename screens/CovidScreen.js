import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import DoctorsCard from '../components/DoctorsCard';


export default function CovidScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style = {styles.tracingContainer}>
          <Text style = {styles.categoriesText}>Enable Trace</Text>
          <Switch
          trackColor={{ false: "#767577", true: "#52D367" }}
          thumbColor={isEnabled ? "#FFF" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
        <View style = {styles.tracingDetailContainer}>
          <Text>5</Text>
          <Text style = {styles.mediumText}> Users of Opital app near you </Text>
        </View>
        
        <Text style = {styles.categoriesText}>Let's fight COVID-19 together</Text>
      </ScrollView>
      <View style = {[styles.headerContainer, {backgroundColor: '#F2F6FE',}]}>
        <Text style = { styles.headerText}>Covid 19 </Text>
        <View>
            <Text style = {styles.covidquestionText}>Are you feeling sick? </Text>
            <Text style = {styles.covidText}>
                If you feel sick with any of Covid-19 syptoms please calll or SMS 
                immediately for help.
            </Text>
        </View>
        <View style = { styles.contactUsCovid}> 
            <View style  = {[styles.contactBtn, {backgroundColor: '#EC4659'}]}>
                <Ionicons
                name={"ios-call"}
                size={30}
                style={{ }}
                color={"white"}
                />
                <Text style = { styles.contactText}>Call Now</Text>
            </View>
            <View style  = {[styles.contactBtn, {backgroundColor: '#42BDEE'}]}>
                <Ionicons
                name={"ios-cloud-upload"}
                size={30}
                style={{ }}
                color={"white"}
                />
                <Text style = { styles.contactText}>Send ID</Text>
            </View>
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 23,
    backgroundColor: '#fafafa',
  },
  headerContainer:{
    position: 'absolute',
    left: 0,
    width: 420,
    height: 300,
    paddingTop: 46,
    paddingHorizontal: 23,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: "#ff0057",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
  },
  headerText:{
    fontSize: 25,
    fontWeight: '700',
    alignSelf: 'stretch',
    color: 'black',
  },
  covidquestionText:{
      fontWeight: '700',
      fontSize: 22,
      marginTop: 8, 
      color: 'black',
  },
  covidText:{
      paddingTop: 23,
      color: 'black',
  },
  contactUsCovid:{
      marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingVertical: 23,  
},
  contactBtn:{
      width: 150,
      height: 45,
      marginHorizontal: 15,
      justifyContent: 'center',
    alignItems: "center",
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  contactText:{
      color: 'white'
  },
  scrollView:{
    marginTop: 250,
    paddingVertical: 30,
    flex: 1,
},
  categoriesText: {
    fontFamily: "Helvetica Neue",
    fontWeight: '700',
    fontSize: 34,
  },

  tracingContainer:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.5
  },

  mediumText:{
    fontWeight: '400',
    fontSize: 21,
  },
  tracingDetailContainer:{
    backgroundColor: 'blue',
    alignItems: 'center',
  },





  preventionMethodContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    padding: 2,
  },
  preventionMethodCard:{
    margin: 8,
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 15,
    borderRadius: 12,
    
    backgroundColor: 'white',
    shadowColor: "#ff0057",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
  },
  imageContainer:{
    overflow: 'hidden'
  },
  preventImage:{
    height: 150,
    backgroundColor: 'white',
  },
  preventText:{
    marginTop: 18,
    fontSize: 14,
    fontWeight: '700'
  }
});
