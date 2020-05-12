

import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, Image, View } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { SharedElement } from 'react-navigation-shared-element';

import AppointmentCard from '../components/AppointmentCard';

export default function DetailScreen({route, navigation}) {
    const { name, job, hospital, bgColor}  =  route.params;
  return (
      <View style={styles.container}>
        <SharedElement id={`1`}>
          <View style = { styles.staticImageContainer}>
          <Image
              source={require('../assets/images/doctorInfo.png')
              }
              style={styles.doctorImage}
            /> 
          </View>
          </SharedElement>
          
          <View style = { [styles.detailScrollContainer, {backgroundColor: bgColor}]}>
            <ScrollView 
            style = {styles.scrollView}
            contentContainerStyle={styles.contentContainer}>
              <View style = {styles.doctorInfoContainer}>
                <View style = {styles.doctorDetailsHeader}>
                  <View style = {styles.doctorInfoHeaderContainer}>
                    <Text style = {styles.doctorNameText}>{ name }</Text>
                    <Text style = {styles.doctorPositionText}>{ job }</Text>
                  </View>
                  <View style = { styles.ContactDoctorContainer}>
                  <TouchableOpacity
                  onPress = {
                    ()=>{
                      navigation.push("VideoCallingDoctorScreen");
                    }
                  }
                  >
                      <View style = {styles.videoCallContainer}>
                      <Ionicons
                        name={"ios-videocam"}
                        size={30}
                        style={{ }}
                        color={"#45BBFA"}
                      />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style = {styles.phoneCallContainer}>
                      <Ionicons
                        name={"ios-call"}
                        size={30}
                        style={{ }}
                        color={"#49C28E"}
                      />
                      </View>
                      </TouchableOpacity>
                  </View>
                </View>
                <View>
                    <Text style = { styles.docotorHospitalNameText}>{ hospital }</Text>
                </View>
              </View>
              <View style = {styles.doctorBioContainer}>
                <Text style = { styles.aboutText}>About</Text>
                <View>
                  <Text style = {styles.bioText}>
                  Dr Ivan Smith is a respected expert in general 
                  Health. He always wants to learn… 
                  </Text>
                </View>
              </View>

              

              <View style = { styles.workingHoursContainer}>
                <Text style = { styles.aboutText}>Working hours</Text>
                <View style ={
                  styles.availabilityStatusContainer
                }>
                  <Text style={styles.workingDaysText}>Mon - Fri 09:00 - 17:00</Text>
                  <View style = { styles.statusContainer}>
                    <Text style = {styles.statusText}>Book</Text>
                  </View>
                </View>

                <View style = { styles.appointmentsContainer}>
                <AppointmentCard bgColor= {'#EDF1FA'}/>
                <AppointmentCard bgColor= {'#FCD9D9'} />
                <AppointmentCard bgColor={'#E1F5EB'}/>
              </View>

              </View>

            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 23,
  },
  staticImageContainer:{
      position: 'absolute',
      width: 375,
      height: 360,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      top: 100,
      left: 0,
      
  },
  contentContainer: {
    paddingTop: 15,
  },
  fixbgWhiteBg:{
    position: 'absolute',
    bottom: 0,
    width: 500,
    height: 300,
    backgroundColor: 'white'
  },
  detailScrollContainer:{
    marginTop: 300,
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 23,
    overflow: 'hidden'
  },
  scrollView:{
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 23,
    overflow: 'hidden'
  },
  doctorInfoContainer:{
    paddingVertical: 10,
    borderBottomWidth: 5,
    borderColor: 'rgba(0,0,0,0.03)',
    paddingHorizontal: 23,
  },
  doctorNameText:{
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.18,
    color: '#2B313D'
  },
  doctorPositionText:{
    fontSize: 16,
    color: '#B6B5B5',
    marginTop: 7,
    fontWeight: '400'
  },
  docotorHospitalNameText:{
    fontSize: 16,
    fontWeight: "700",
    color: '#B6B5B5'

  },
  doctorDetailsHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  doctorInfoHeaderContainer:{
    flex: 0.6,
  },
  ContactDoctorContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.4,
  },
  videoCallContainer:{
    width: 59,
    height: 59,
    borderRadius: 16,
    backgroundColor: '#DDF3FC',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#ff0057",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
  },
  phoneCallContainer:{
    width: 59,
    height: 59,
    borderRadius: 16,
    backgroundColor: '#DEF4EA',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#275198",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
  },
  doctorBioContainer:{
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.03)',
    paddingHorizontal: 23,
  },
  aboutText:{
    fontSize: 16, 
    fontWeight: '700',
    paddingTop: 10,
  },
  bioText:{
    fontSize: 15,
    fontWeight: '400'
  },
  workingHoursContainer:{
    backgroundColor: '#FCFAFA',
    marginTop: 10,
    borderRadius: 32,
    paddingBottom: 12,
    padding: 23,
    height: 600,
    shadowColor: "#2914FB",
    shadowOffset: {
        width: 0,
        height: -6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,

  },
  workingDaysText:{
    fontFamily: "Helvetica Neue",
    fontWeight: '400',
    fontSize: 15,
    color: '#616161',
    
  },
  availabilityStatusContainer:{
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusContainer:{
    backgroundColor: '#DBF4E8',
    width: 73,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: "#29224C",   
    shadowOffset: {
    width: 0,
    height: 6,
},
  shadowOpacity: 0.2,
  shadowRadius: 8,

  elevation: 2,
  },
  statusText:{
    color: '#49C28E',
    fontFamily: "Helvetica Neue",
    fontWeight: '400',
    fontSize: 16,

  },
  appointmentsContainer:{
    paddingVertical: 23,
    height: 100,
    paddingHorizontal:0,
  }
});
