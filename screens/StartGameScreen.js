import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 40,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 12,
    elevation: 80, // shadow. Works only with Android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2}, // shadow offset for IOS
    shadowRadius: 6, //  shadow radius for IOS
    shadowOpacity: '0,25' // shadow opacity for IOS
  }
});

export default StartGameScreen;
