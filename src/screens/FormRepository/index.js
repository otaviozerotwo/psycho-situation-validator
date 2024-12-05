import { KeyboardAvoidingView, SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./styles";

export default function FormRepository() {
  return (
    <KeyboardAvoidingView 
      behavior="padding"
      style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Formulário Situações</Text>
        <Text style={styles.label}>Data/Hora</Text>
        <TextInput 
          style={styles.input}
          placeholder="00/00/0000 00:00"
          placeholderTextColor="#4D4D4D"
        />

        <Text style={styles.label}>Situação</Text>
        <TextInput 
          style={styles.textArea}
          placeholder="Descreva a situação ..."
          placeholderTextColor="#4D4D4D"
          multiline
          // numberOfLines={5}
        />
      </View>

    </KeyboardAvoidingView>
  );
}