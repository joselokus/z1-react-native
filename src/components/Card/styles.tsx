import { StyleSheet } from 'react-native';

const backgroundCardColor = '#72458f';

const styles = StyleSheet.create({
    containerChip: {
      flex: 1, 
      margin: 10
    },
    item: {
      backgroundColor: backgroundCardColor,
      borderRadius: 10,
      width: '100%',
      marginTop: 10
    },
    itemAll: {
      backgroundColor: '#72458f',
      borderRadius: 10,
      width: '100%',
      height: 350
    },
    itemPhoto: {
      width: 100,
      height: 100,
      margin: 10,
      borderRadius: 10,
    },
    itemPhotoAll: {
      width: '100%',
      height: 190,
      borderRadius: 10,
    },
    containerText: {
      marginLeft: 10,
      marginRight: 10,
      flexShrink: 1
    },
    itemText: {
      color: 'white',
      marginTop: 5,
      fontSize: 17,
      fontWeight: 'bold',
      flexShrink: 1
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
    }
  });

  export default styles;