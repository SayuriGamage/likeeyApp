import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles"; // ✅ importing styles

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text> 
      
      <TouchableOpacity onPress={() => alert("you touched")}>
        <Text>Press me</Text>
      </TouchableOpacity>

      <Pressable onPress={() => alert("you touched")}>
        <Text>Press me - pressable</Text>
      </Pressable>
    </View>
  );
}
