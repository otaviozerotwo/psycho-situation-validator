import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  form: {
    flex: 1,
    marginVertical: 24,
    marginHorizontal: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
    color: "#fff",
  },
  input: {
    color: "#4D4D4D",
    borderColor: "#4D4D4D",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  textArea: {
    height: 114,
    color: "#4D4D4D",
    borderColor: "#4D4D4D",
    borderWidth: 1,
    borderRadius: 8,
    textAlignVertical: "top",
    padding: 16,
  },
});

export default styles;