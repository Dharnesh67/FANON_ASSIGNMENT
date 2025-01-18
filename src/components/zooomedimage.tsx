import React, { useState } from "react";
import { StyleSheet, Animated, Image, Dimensions } from "react-native";
import { GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const ZoomableImage = ({ imageSource }: any) => {
  const [zoomed, setZoomed] = useState(false);
  const scale = React.useRef(new Animated.Value(1)).current;
  const translateX = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(0)).current;

  const handleGestureEvent = Animated.event(
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

  const handleStateChange = (event: any) => {
    const { state, numberOfPointers } = event.nativeEvent;

    if (state === State.END) {
      if (!zoomed && numberOfPointers === 1) {
        // Double-tap detection
        setZoomed(true);
        Animated.spring(scale, {
          toValue: 2,
          useNativeDriver: true,
        }).start();
      } else {
        // Reset zoom and translation
        setZoomed(false);
        Animated.parallel([
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }),
        ]).start();
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler
        onGestureEvent={handleGestureEvent}
        onHandlerStateChange={handleStateChange}
      >
        <Animated.View
          style={{
            transform: [{ scale }, { translateX }, { translateY }],
          }}
        >
          <Image source={imageSource} style={styles.image} resizeMode="contain" />
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.3 ,
  },
});

export default ZoomableImage;
