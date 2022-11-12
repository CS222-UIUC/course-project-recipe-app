import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
      backgroundColor: '#3397f5',
    },
    scrollview: {
      borderRadius: 50,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: 30
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
      backgroundColor: '#3397f5',
    },
    containerProfile: {
      //flex: 2,
      backgroundColor: '#fff',
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
    featuredStyle: {
      backgroundColor: '#3397f5',
      alignItems: 'center',
      width: 300,
      height: 200,
      borderRadius: 20,
      justifyContent: 'center',
    },
    containerHorizontal: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      //justifyContent: 'center',
      //margin: 16,
    },
    containerSearch:{
      margin: 10,

    },
    input: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      color: "#000",
      borderWidth: 1,
    },

  });

  export {styles}