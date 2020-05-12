import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getCurrentFrame } from 'expo/build/AR';

//import { MonoText } from '../components/StyledText';

export default function CategoryCard({title, color, src, navigation}) {
  return (
    <TouchableOpacity 
    onPress = {
        ()=>{
            navigation.push("SpecialistDoctorScreen", { title, color});
        }
    }>
      <View style={styles.container}>
          <View style = { [styles.cardImg, {backgroundColor: color}]}>
          <Image
                source={
                  require(`../assets/images/tooth.png`)
                }
                style={styles.categoryImage}
              /> 
          </View>
          <Text style = { styles.titleText}>{ title }</Text>
      </View>
      </TouchableOpacity>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    //backgroundColor: '#EDEAFE',
    width: 169,
    height: 73,
    borderRadius: 13,
    borderWidth: 1, 
    borderColor: '#F7F7F7',
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: '#F3F3F3',
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
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 23,
    color: '#01005B',
    fontWeight: '400',
    //height: 1.25,
},
cardImg:{
    width: 50,
    height: 50, 
    borderRadius: 15,
    justifyContent: "center",
    alignItems: 'center'
},
categoryImage:{
    height: 20,
}

});
