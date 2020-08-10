import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
  },

  teacherList: {
    marginTop: -20,
  },

  searchForm: {
    marginBottom: 4,
  },

  label: {
    color: "#D4C2FF",
    fontFamily: 'Poppins_400Regular',
  },

  input: {
    height: 54,
    backgroundColor: "#FFF",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 8,
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBlock: {
    width: "48%"
  },

  submitButton: {
    marginTop: 8,
    backgroundColor: "#04D361",
    flexDirection: "row",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  submitButtonText: {
    color: "#FFF",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  },

});

export default styles;