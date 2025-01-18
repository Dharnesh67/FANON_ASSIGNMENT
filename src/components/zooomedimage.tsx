import React, { useState } from 'react';
import { View, StyleSheet, Animated, Image, Pressable } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

const ZoomableImage = ({ imageSource }:any) => {
  const [zoomed, setZoomed] = useState(false);
  const scale = new Animated.Value(1);
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  const backgroundOpacity = new Animated.Value(0);

  const handlePressIn = () => {
    setZoomed(true);
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 2, // Zoom level
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(backgroundOpacity, {
        toValue: 0.5, // Background dim level
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    setZoomed(false);
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1, // Reset zoom
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(backgroundOpacity, {
        toValue: 0, // Reset dim
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleGesture = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Background dim */}
      {zoomed && (
        <Animated.View
          style={[
            styles.overlay,
            { opacity: backgroundOpacity },
          ]}
        />
      )}

      <PanGestureHandler onGestureEvent={handleGesture}>
        <Animated.View
          style={{
            transform: [
              { scale },
              { translateX },
              { translateY },
            ],
          }}
        >
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Image
              source={imageSource}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ZoomableImage;
