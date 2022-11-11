import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 100,
      //margin: 16,
    },
    roundButton: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 50,
      backgroundColor: '#fff',
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    }

  });

  export {styles}