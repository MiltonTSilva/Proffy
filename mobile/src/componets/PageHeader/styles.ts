import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
      padding: 30,
      backgroundColor: '#8257e5',
    },

    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    title: {
      fontFamily: 'Archivo_700Bold',
      color: '#fff',
      fontSize: 24,
      lineHeight: 32,

      marginVertical: 20,
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },


});

export default styles;