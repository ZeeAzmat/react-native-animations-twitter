import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, Animated } from 'react-native';

HEADER_MIN_HEIGHT = 70;
HEADER_MAX_HEIGHT = 120;
PROFILE_IMAGE_MIN_HEIGHT = 40;
PROFILE_IMAGE_MAX_HEIGHT = 80;

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  })

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    extrapolate: 'clamp',
  })

  const profileImageMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2), HEADER_MAX_HEIGHT + 5],
    extrapolate: 'clamp',
  })

  const headerZIndex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const headerTitleBottom = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26],
    outputRange: [-20, -20, -20, 0],
    extrapolate: 'clamp',
  })

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.header, ...{ height: headerHeight, zIndex: headerZIndex } }} >
        <Animated.View style={{ position: 'absolute', bottom: headerTitleBottom }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Twitter Profile</Text>
        </Animated.View>
      </Animated.View>

      <ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
      >
        <Animated.View style={{ ...styles.image, ...{ height: profileImageHeight, width: profileImageHeight, marginTop: profileImageMarginTop } }}>
          <Image source={require('./assets/dp.jpg')} style={{ flex: 1, width: null, height: null }} />
        </Animated.View>

        <View>
          <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 26, paddingLeft: 10, }} >
            Twitter Profile
          </Text>
        </View>
        <View style={{ height: 1000 }}></View>
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
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
  },
  image: {
    borderWidth: 3,
    marginLeft: 10,
    overflow: 'hidden',
    borderColor: 'white',
    borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
    marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
  }
});
