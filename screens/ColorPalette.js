import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.header}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  blue: {
    backgroundColor: '#268bd2',
  },
  box: {
    paddingVertical: 20,
    color: '#fff',
    marginBottom: 15,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  container: {
    textAlign: 'center',
    marginVertical: 30,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  header: {
    fontWeight: '900',
    fontSize: 24,
    marginVertical: 10,
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default ColorPalette;
