import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  form: {
    margin: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 32,
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