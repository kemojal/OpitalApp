import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { getCurrentFrame } from 'expo/build/AR';


export default function ProfileScreen() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <View style = {styles.profileHeaderContainer}>
      <View style = {styles.userDetailContainer}>
        <Text style = { styles.userNameText}>Lamin Kambi</Text>
      </View>
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
    <View style={styles.scrollContainer}>
      <ScrollView  contentContainerStyle={styles.contentContainer}>
        <View style={styles.ScrollCard}>
        <Ionicons
          name="ios-filing"
          size={120}
          style={{ marginBottom: -3 }}
          color="#52D367"
        />
          <Text style= {styles.profileOptionText}>Appointments</Text>
        </View>
        <View style={styles.ScrollCard}>
        <Ionicons
          name="ios-filing"
          size={120}
          style={{ marginBottom: -3 }}
          color="#52D367"
        />
          <Text style= {styles.profileOptionText}>History</Text>
        </View>
        <View style={styles.ScrollCard}>
        <Ionicons
          name="ios-filing"
          size={120}
          style={{ marginBottom: -3 }}
          color="#52D367"
        />
          <Text style= {styles.profileOptionText}>Medication</Text>
        </View>
      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'blue',
    
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 23,
    paddingHorizontal: 23,
    backgroundColor: '#F4F7F6',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 300,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: -6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,

    elevation: 5,
    
    
  },
  ScrollCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 23,
    marginVertical: 10,
    backgroundColor: '#Fff',
    borderRadius: 40,
    height: 150,
    shadowColor: "#52D367",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,

    elevation: 5,
    
  },
  profileOptionText:{
    fontSize: 28,
    fontWeight: '700'
  },


  profileHeaderContainer:{
    backgroundColor: '#05C17D', //'#E8505B',
    position: 'absolute',
    left: 0,
    width: 420,
    height: 370,
    paddingTop: 66,
    paddingHorizontal: 23,
    //borderBottomLeftRadius: 60,
    //borderBottomRightRadius: 60,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userAvatar:{
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    backgroundColor: '#FCD9D9',
    borderRadius: 20,
  },
  avatarImage:{
    position: 'absolute',
    width: 20,
    bottom: 0,
    left: 10,
  },
  userDetailContainer:{
    alignItems: 'flex-start',
    flex: 0.7,
  },
  userNameText:{
    fontSize: 32,

  }
});

