import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'column',
    alignContent: 'center',
    margin: 20
  },
    item: {
      margin: 0,
      backgroundColor: '#72458f',
      borderRadius: 10,
    },
    itemPhoto: {
      width: 350,
      height: 350,
      margin: 10,
      borderRadius: 10,
    },
    itemText: {
      color: 'white',
      marginTop: 5,
      fontSize: 30,
      fontWeight: 'bold',
    },
    authorText: {
      color: 'white',
      marginTop: 5,
      fontSize: 14,
    },
    articleText: {
      color: 'yellow',
      fontSize: 14,
      marginTop: 10,
      marginBottom: 5
    },
    contentText: {
      marginLeft: 5,
      alignContent: 'center',
      color: 'white',
      fontSize: 17
    }
  });

  export default styles;