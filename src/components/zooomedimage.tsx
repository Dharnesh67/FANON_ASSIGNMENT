import React from 'react';
import { View } from 'react-native';
import {
  PinchGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ZoomableImage = ({ imageComponent }:any) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPinchEvent = (event:any) => {
    scale.value = event.nativeEvent.scale;
  };

  const onPinchStateChange = (event:any) => {
    if (event.nativeEvent.state === 5) {
      // State 5 means the gesture ended
      scale.value = withTiming(1, { duration: 300 });
    }
  };

  return (
    <GestureHandlerRootView className="flex-1 bg-white justify-center items-center">
      <PinchGestureHandler
        onGestureEvent={onPinchEvent}
        onHandlerStateChange={onPinchStateChange}
      >
        <Animated.View className="w-full h-72" style={animatedStyle}>
          {imageComponent}
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

export default ZoomableImage;
