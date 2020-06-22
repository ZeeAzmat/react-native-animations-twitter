import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';

HEADER_MIN_HEIGHT = 70;
HEADER_MAX_HEIGHT = 120;
PROFILE_IMAGE_MIN_HEIGHT = 40;
PROFILE_IMAGE_MAX_HEIGHT = 80;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.image}>
          <Image source={require('./assets/dp.jpg')} style={{ flex: 1, width: null, height: null }} />
        </View>

        <View>
          <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 26, paddingLeft: 10, }} >
            Twitter Profile
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    top: 0,
    flex: 1,
    left: 0,
    right: 0,
    position: 'absolute',
    height: HEADER_MAX_HEIGHT,
    backgroundColor: 'lightskyblue',
  },
  image: {
    borderWidth: 3,
    marginLeft: 10,
    overflow: 'hidden',
    borderColor: 'white',
    width: PROFILE_IMAGE_MAX_HEIGHT,
    height: PROFILE_IMAGE_MAX_HEIGHT,
    borderRadius: PROFILE_IMAGE_MAX_HEIGHT/2,
    marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT/2,
  }
});
