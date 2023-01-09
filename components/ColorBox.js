import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  const textStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.text, textStyle]}>
        {' '}
        {colorName}:{hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default ColorBox;
