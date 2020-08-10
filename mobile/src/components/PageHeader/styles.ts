import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding:40,
    backgroundColor: "#8257E5"
  },

  topBar: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20,
      marginBottom: -20,
  },
  
  title: {
    fontFamily: 'Archivo_700Bold',
    color: "#FFF",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginTop: 40,
    marginBottom: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});

export default styles;