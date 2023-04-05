import { StyleSheet } from 'react-native';
import colorStyles from './colors';

const mainStyles = StyleSheet.create({
   screen: {
      flex: 1,
      backgroundColor: '#ffffff'
   },
   container: {
      paddingHorizontal: 15,
      paddingVertical: 10
   },
   closeDrawer: {
      alignSelf: "flex-end", 
      marginRight: 15, 
      marginTop: 15
   },
   input: {
      borderBottomWidth: 0.5,
      borderWidth: 0.5,
      borderRadius: 5,
      paddingLeft: 10,
      marginHorizontal: 5
   },
   card: {
      width: "100%",
      borderRadius: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
   },
   containerCard: {
      width: "100%",
      marginBottom: 15,
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
   }
})

export default mainStyles