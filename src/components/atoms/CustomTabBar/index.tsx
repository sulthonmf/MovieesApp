import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { BlurView } from '@react-native-community/blur';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { styles } from './styles';

const MenuBlur = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 55,
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <BlurView
          blurAmount={10}
          blurType="light"
          reducedTransparencyFallbackColor="white"
          style={styles.absolute}
        />
      </View>
    </View>
  );
};

export default MenuBlur;
