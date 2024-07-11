import { View, Text, Pressable, StyleSheet } from "react-native";

function onPressHandler(){
  console.log('pressed');
}

function PrimaryButton({children}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        style={({pressed}) =>
          pressed 
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer}
        onPress={onPressHandler}
        android_ripple={{color: '#E0FFFF'}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
    
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,
    margin: 5,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: '#20B2AA',
    paddingVertical: 12,
    paddingHorizontal: 12,
    elevation: 15
  },
  buttonText: {
    color: 'black',
    textAlign: 'center'
  },
  pressed: {
    opacity: '0.75'
  }
});
