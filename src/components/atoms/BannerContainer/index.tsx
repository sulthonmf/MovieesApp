// BannerContainer.tsx
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface BannerContainerProps {
  backgroundColor: string;
  children: React.ReactNode;
}

const BannerContainer: React.FC<BannerContainerProps> = ({
  backgroundColor,
  children,
}) => <View style={[styles.container, { backgroundColor }]}>{children}</View>;

export default BannerContainer;
