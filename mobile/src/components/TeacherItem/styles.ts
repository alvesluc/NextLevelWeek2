import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },

  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: "#EEE"
  },
  
  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: "Archivo_700Bold",
    color: "#32264D",
    fontSize: 20,
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 14,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: '#6A6180',
    marginBottom: 8,
  },

  footer: {
    backgroundColor: "#FAFAFC",
    padding: 24,
    alignItems: "center",
    marginTop: 16,
  },

  price: {
    fontFamily: "Poppins_400Regular",
    color: "#6A6180",
    fontSize: 14,
  },
  
  priceValue: {
    fontFamily: "Archivo_700Bold",
    color: "#8257E5",
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: "#8257E5",
    width: 56,
    height: 56, 
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  favorited: {
    backgroundColor: "#E33D3D",
  },
  
  contactButton: {
    backgroundColor: "#04D361",
    flex: 1,
    flexDirection: "row",
    height: 56, 
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  contactButtonText: {
    color: "#FFF",
    fontFamily:  "Archivo_700Bold",
    fontSize: 16,
    marginLeft: 16,
  },

});

export default styles;

