import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getCurrentFrame } from 'expo/build/AR';





//import { SharedElement } from 'react-navigation-shared-element';


//importing components
import CategoryCard from '../components/CategoryCard';
import DoctorsCard from '../components/DoctorsCard';

//import { MonoText } from '../components/StyledText';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}>

        <View style={styles.welcomeContainer}>

          <Text style = { styles.helloText}>Hello</Text>
          <View style = { styles.userNameRowContainer}>
            <Text style = { styles.userNameText}>Lamin</Text>
            <View style={styles.userAvatar}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/avatar.png')
                  : require('../assets/images/avatar.png')
              }
              style={styles.avatarImage}
            /> 
            </View>
          </View>
        </View>

        <View style={styles.searchContainer}>
          
        </View>
        <View style = { styles.covidNewsContainer}>
        <View style = { styles.covidImageContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/docor.png')
                  : require('../assets/images/docor.png')
              }
              style={styles.doctorImage}
            /> 
          </View>

          <Text style = {styles.covidHealineText}>Do you have symptoms</Text>
          <Text style = {styles.covidHealineText}>of Covid 19?</Text>
          <TouchableOpacity
          onPress = {
            ()=>{
                //navigation.push("CovidScreen");
                navigation.navigate('Trace')
            }
        }
          >
            <View style = {styles.contactCovidDoctorButtton}>
              <Text style = { styles.covidBtnText}>Contact a doctor</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style ={ styles.categoryContainer}>
          <Text style = {styles.categoriesText}>Categories</Text>
          <ScrollView 
          style = {styles.categoryScrollContainer}
          horizontal = { true }
          showsHorizontalScrollIndicator={false}
          >
            <CategoryCard 
            title = {"Dental"} 
            color={'#E8505B'}
            src = {'tooth'} 
            navigation = {navigation}
            />
            <CategoryCard 
            title = {"Tooth"} 
            color={'#42BDEE'}
            src = {'tooth'} 
            navigation = {navigation}
            />
            <CategoryCard 
            title = {"Eye"} 
            color={'#FF766B'}
            src = {'tooth'} 
            navigation = {navigation}
            />
            <CategoryCard 
            title = {"Stomach"} 
            color={'#FC4891'}
            src = {'tooth'} 
            navigation = {navigation}
            />
          </ScrollView>
        </View>
        <View style={styles.doctorsListContainer}>
          <Text style = { styles.doctorCategoriesText}>Top Doctors</Text>
          <View style = { styles.doctorsCardContainer}>
            
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

          </View>
        </View>
      </ScrollView>

      
    </View>
  );
}

/*HomeScreen.navigationOptions = {
  header: null
}; */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  helloText:{
    fontFamily: "Helvetica Neue",
    fontWeight: "400",
    fontSize: 28,
    textAlign: "left",
    color: "#A5A4A4"
  },
  userNameRowContainer:{
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userNameText:{
    fontFamily: "Helvetica Neue",
    fontWeight: "700",
    fontSize: 28,
    textAlign: "left",
    color: "#090909"
  },
  userAvatar:{
    width: 40,
    height: 40,
    backgroundColor: '#FCD9D9',
    borderRadius: 20,
  },

  avatarImage:{
    position: 'absolute',
    width: 20,
    bottom: 0,
    left: 10,
  },
  searchContainer:{
    marginHorizontal: 23,
    height: 52,
    alignSelf: 'stretch',
    backgroundColor: '#F3F3F3',
    borderRadius: 11,

  },

  covidNewsContainer:{
    marginTop: 35,
    marginHorizontal: 23,
    paddingHorizontal: 23,
    height: 158,
    alignSelf: 'stretch',
    backgroundColor: '#FCD9D9',
    borderRadius: 11,
    justifyContent: "center", 
    shadowColor: "#29224C",   
    shadowOffset: {
      width: 0,
      height: 6,
  },
  shadowOpacity: 0.2,
  shadowRadius: 8,

  elevation: 2,

  },
  
  covidHealineText:{
    fontFamily: "Helvetica Neue",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21.55556,
    color: '#000000',
  },
  contactCovidDoctorButtton:{
    width: 158, 
    height: 53, 
    backgroundColor: '#E8505B',
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,  
    borderWidth: 1, 
    borderColor: '#BF4750',
    
  },
  covidBtnText:{
    fontFamily: "Helvetica Neue",
    fontSize: 16,
    color: '#FFF',
  },
  covidImageContainer:{
    position: 'absolute',
    right: 0,
    width: 110,
    height: 200,
    bottom: 0,
    
  },
  doctorImage:{
    alignSelf: 'stretch',
  },
  categoryContainer:{
    marginTop: 23,
    paddingHorizontal: 23,
  },

  categoriesText: {
    fontFamily: "Helvetica Neue",
    fontWeight: '700',
    fontSize: 20,
  },

  categoryScrollContainer:{
    paddingVertical: 23,
    borderRadius: 13,
  },
  doctorsListContainer:{
    padding: 23,
    backgroundColor: '#F3F3F3',
    alignItems: 'stretch',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderRadius: 26,
  },
  doctorCategoriesText:{
    fontFamily: "Helvetica Neue",
    fontWeight: '700',
    fontSize: 20,
    color: '#030303',
  },
  doctorsCardContainer:{
    paddingVertical: 23,
  },



  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 23,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  WelcomeContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
