import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton title="Add Situation" onPress={() => navigation.navigate("FormRepository")} />
    </SafeAreaView>
  );
};