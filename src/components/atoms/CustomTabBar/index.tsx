import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { BlurView } from '@react-native-community/blur';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { styles } from './styles';

const MenuBlur = () => {
  return (
    <View
      style={styles.tabContainer}
    >
      <BlurView
        blurAmount={20}
        blurType="dark"
        // reducedTransparencyFallbackColor="#000"
        style={styles.absolute}
      />
    </View>
  );
};

export default MenuBlur;
