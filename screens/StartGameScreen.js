import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        // autoCapitalize="none" // works with none numeric symbols. Disabling capitalize. Do not needed in this case.
        // autoCorrect={false} // works with none numeric symbols. Disabling autocorrection. Do not needed in this case.
      />
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
    backgroundColor: '#008080',
    borderRadius: 12,
    elevation: 50, // shadow. Works only with Android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2}, // shadow offset for IOS
    shadowRadius: 6, //  shadow radius for IOS
    shadowOpacity: '0,25' // shadow opacity for IOS
  },
  numberInput: {
    height: 60,
    width: 60,
    fontSize: 48,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default StartGameScreen;
