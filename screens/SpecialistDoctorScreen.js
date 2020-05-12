import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import DoctorsCard from '../components/DoctorsCard';


export default function LinksScreen({route, navigation}) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const { title, color}  =  route.params;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <DoctorsCard 
        name = {'Dr Momodou Baldeh'} 
        job = {'General practitioner'}
        hospital  = {'RVTH'}
        color = {'#CBEDFA'}
        navigation = {navigation}
        bgColor = {'#42BDEE'}
        />

        <DoctorsCard 
        name = {'Dr Sedat Douf'} 
        job = {'General practitioner'}
        hospital  = {'MRC'}
        color = {'#CBEDFA'}
        navigation = {navigation}
        bgColor = {'#FC4891'}
        />
        <DoctorsCard 
        name = {'Dr Alieu Barry'} 
        job = {'General practitioner'}
        hospital  = {'Brikama'}
        color = {'#CBEDFA'}
        navigation = {navigation}
        bgColor = {'#F1435A'}
        />
        <DoctorsCard 
        name = {'Dr Momodou Baldeh'} 
        job = {'General practitioner'}
        hospital  = {'RVTH'}
        color = {'#CBEDFA'}
        navigation = {navigation}
        bgColor = {'#42BDEE'}
        />

        <DoctorsCard 
        name = {'Dr Sedat Douf'} 
        job = {'General practitioner'}
        hospital  = {'MRC'}
        color = {'#CBEDFA'}
        navigation = {navigation}
        bgColor = {'#FC4891'}
        />
        <DoctorsCard 
        name = {'Dr Alieu Barry'} 
        job = {'General practitioner'}
        hospital  = {'Brikama'}
        color = {'#CBEDFA'}
        navigation = {navigation}
        bgColor = {'#F1435A'}
        />
        <DoctorsCard 
        name = {'Dr Momodou Baldeh'} 
        job = {'General practitioner'}
        hospital  = {'RVTH'}
        color = {'#CBEDFA'}
        navigation = {navigation}
        bgColor = {'#42BDEE'}
        />

        <DoctorsCard 
        name = {'Dr Sedat Douf'} 
        job = {'General practitioner'}
        hospital  = {'MRC'}
        color = {'#CBEDFA'}
        navigation = {navigation}
        bgColor = {'#FC4891'}
        />
        <DoctorsCard 
        name = {'Dr Alieu Barry'} 
        job = {'General practitioner'}
        hospital  = {'Brikama'}
        color = {'#CBEDFA'}
        navigation = {navigation}
        bgColor = {'#F1435A'}
        />
      </ScrollView>
      <View style = {[styles.profileHeaderContainer, {backgroundColor: color,}]}>
        <Text style = { styles.SpecialistHeaderText}> {title} Specialists </Text>
    </View>
    <View style = { [styles.floatingBoating, {backgroundColor: 'white'}]}>
      <Ionicons
        name={"ios-arrow-round-down"}
        size={30}
        style={{ }}
        color={color}
      />
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
  profileHeaderContainer:{
    position: 'absolute',
    left: 0,
    width: 420,
    height: 150,
    paddingTop: 66,
    paddingHorizontal: 23,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    flexDirection: 'row',
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
  SpecialistHeaderText:{
    fontSize: 16,
  },
  scrollView:{
      marginTop: 100,
  },
  floatingBoating:{
    width: 50,
    height: 50, 
    borderRadius: 25, 
    position: 'absolute',
    bottom: 50,
    right:50,
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: "#3445FE",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,

  }
});
