
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors  from '../constants/colors';
import Font from '../constants/font';


const CustomButton = ({ type="solid", text, textStyle, style, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles[type], ...style }} onPress={onPress}>
        <Text style={{ ...styles[`${type}Text`], ...textStyle }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    solid: {
        backgroundColor: Colors.primary,
        padding: 20,
        width: "100%",
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center"
    },
    solidText: {
        color: Colors.secondary,
        fontSize: Font.SIZE_TEXT,
        fontWeight: Font.WEIGHT_BOLD
    },
    outlined: {
        backgroundColor: Colors.secondary,
        padding: 20,
        width: "100%",
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 5,
        alignItems: "center"
    },
    outlinedText: {
        color: Colors.primary,
        fontSize: Font.SIZE_TEXT,
        fontWeight: Font.WEIGHT_BOLD
    },
    text: {
        padding: 20,
        width: "100%",
        alignItems: "center"
    },
    textText: {
        color: Colors.primary,
        fontSize: Font.SIZE_TEXT,
        fontWeight: Font.WEIGHT_BOLD
    },
});

export default CustomButton;
