import { Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./styles";

export default function FormRepository() {
  return (
    <ScrollView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <KeyboardAvoidingView style={styles.form}>
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

        <Text style={styles.label}>Pensamento automático</Text>
        <TextInput 
          style={styles.textArea}
          placeholder="Descreva o pensamento automático ..."
          placeholderTextColor="#4D4D4D"
          multiline
          // numberOfLines={5}
        />

        <Text style={styles.label}>Reflexões</Text>
        <TextInput 
          style={styles.textArea}
          placeholder="Descreva as reflexões ..."
          placeholderTextColor="#4D4D4D"
          multiline
          // numberOfLines={5}
        />

        <Button title="Enviar" />
      </KeyboardAvoidingView>

    </ScrollView>
  );
}