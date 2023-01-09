import { View, StyleSheet, RefreshControl, FlatList, Text } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import PalettePreview from '../components/PalettePreview';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const colorPalettes = await result.json();
    if (result.ok) {
      setColorPalettes(colorPalettes);
    }
  });

  useEffect(() => {
    handleFetchColorPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View>
      <FlatList
        style={styles.list}
        data={colorPalettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item);
            }}
            colorPalette={item}
          />
        )}
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />
        }
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddNewPaletteModal');
            }}
          >
            <Text>Launch Modal</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Home;
