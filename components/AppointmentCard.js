import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


//import { MonoText } from '../components/StyledText';

export default function AppointmentCard({bgColor}) {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
        <View style = { styles.appointDateContainer}>
            <View style = { styles.appointDateContainerInner}>
                <Text style = { styles.appointDateText}>12</Text>
                <Text style = { styles.appointDateMonthText}>JAN</Text>
            </View>
        </View>
        <View style = {styles.appointDetailsContainer}>
            <Text style = { styles.titleText}>Consultation</Text>
            <Text style = {styles.appTimeText}>Sunday . 9am -11am</Text>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    marginVertical: 12,
    alignSelf: 'stretch',
    height: 90,
    borderRadius: 13,
    borderWidth: 0, 
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    shadowColor: "#29224C",   
    shadowOffset: {
    width: 0,
    height: 6,
},
  shadowOpacity: 0.2,
  shadowRadius: 8,

  elevation: 2,
},

titleText:{
    fontFamily: "Helvetica Neue",
    fontSize: 16,
    color: '#01005B',
    fontWeight: '700',
    textAlign: 'left',
    //height: 1.25,
},
appTimeText:{
    fontFamily: "Helvetica Neue",
    fontWeight: '400',
    fontSize: 14,
    marginTop: 5,
    color: '#403F7B'
},
appointDetailsContainer:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    flex: 0.8,
},
appointDateContainer:{
    height: 55,
    flex: 0.2,
    width: 55,
},
appointDateContainerInner:{
    height: 55,
    borderRadius: 10,
    backgroundColor: '#CFDCFC',
    justifyContent: "center",
    alignItems: 'center',
    width: 55,
},
appointDateText:{
    fontSize: 25,
    fontFamily: "Helvetica Neue",
    fontWeight: '700',
    color: '#3165F6'
},
appointDateMonthText:{
    fontSize: 14,
    fontFamily: "Helvetica Neue",
    fontWeight: '400',
    color: '#3165F6'

}

});
