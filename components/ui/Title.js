import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({children}) {
  return (
    <Text style={styles.title}>THIS IS GAME SCREEN</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent900,
    textAlign: 'center',
    borderWidth: 2,
    padding: 12
  }
})