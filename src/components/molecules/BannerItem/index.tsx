// BannerItem.tsx
import React from 'react';

import { BannerContainer, BannerText } from '@/components/atoms';

interface BannerItemProps {
  backgroundColor: string;
  title: string;
}

const BannerItem: React.FC<BannerItemProps> = ({ backgroundColor, title }) => (
  <BannerContainer backgroundColor={backgroundColor}>
    <BannerText text={title} />
  </BannerContainer>
);

export default BannerItem;
