import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebeb',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 140,
      
      //margin: 16,
    },
    buttonPressed: {
      opacity: 0.5,
    },
    roundButton: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 50,
      backgroundColor: '#ffb265',
    },
    scrollview: {
      width:Dimensions.get('window').width,
      borderRadius: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: Dimensions.get('window').height * .42,
      
      
    },
    scrollitem:{
      width:Dimensions.get('window').width * .85,
      fontSize: 25,
      padding:7,
      margin:5,
      backgroundColor: '#ffb265',
      borderRadius: 15,
    },
    scrolltext:{
      padding:7,
      fontSize: 25,
      
    },
    profilePic: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 50,
      backgroundColor: 'gray',
    },
    settingsStyle: {
      width: 300,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 20,
      backgroundColor: '#ffb265',
    },
    containerProfile: {
      //flex: 2,
      backgroundColor: '#ebebeb',
      alignItems: 'center',
      fontSize: 20,
      fontWeight: "bold"
      //justifyContent: 'center',
      //padding: 100,
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    space: {
      width:20,
      height: 20,
    },
    Extraspace: {
      width:20,
      height: 170,
    },
    space2: {
      width: 20,
      height: 55,
    },
    featuredStyle: {
      backgroundColor: '#ffb265',
      alignItems: 'center',
      width: 300,
      height: 200,
      borderRadius: 20,
      justifyContent: 'center',
    },
    containerHorizontal: {
      flex: 1,
      backgroundColor: '#ebebeb',
      flexDirection: 'row',
      alignItems: 'center',
      //justifyContent: 'center',
      //margin: 16,
    },
    containerSearch:{
      margin: 10,
      width: 270,
    },
    input: {
      backgroundColor: '#ebebeb',
      padding: 10,
      borderRadius: 10,
      color: "#000",
      borderWidth: 1,
    },
    menu: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'center',
      bottom : 0,
      height: 100,
      width:Dimensions.get('window').width,
      backgroundColor: '#ffb265'
    },
    menubutton: {
      
      height: 75,
      width: 75,
      margin:10,
      borderRadius:10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tinyLogo: {
      width: 65,
      height: 65,
    },
    containerSettings: {
      flex: 1,
      backgroundColor: '#ebebeb',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 110,
      
      //margin: 16,
    },

  });

  export {styles}