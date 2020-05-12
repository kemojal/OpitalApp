import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function VideoCallingDoctorScreen({navigation}) {
  return (
    <View style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style = { styles.videoContainer}>
      <Image
              source={require('../assets/images/doctorInfo.png')
              }
              style={styles.doctorImage}
        /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  videoContainer:{
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  doctorImage:{
      width: 455,
      height: 800,
  }
});
