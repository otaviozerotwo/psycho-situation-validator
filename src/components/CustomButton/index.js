import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity> 
  );
};