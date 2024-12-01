import type { UnionConfiguration } from '@/theme/types/config';
import type { Gutters } from '@/theme/types/gutters';

import { type ViewStyle } from 'react-native';

export const generateGutters = (configuration: UnionConfiguration): Gutters => {
  // Jika configuration.gutters adalah objek, kita akan iterasi melalui key-nya
  if (Array.isArray(configuration.gutters)) {
    // Jika masih berupa array, proses dengan cara yang lama
    return configuration.gutters.reduce((acc, curr) => {
      return Object.assign(acc, {
        [`gap_${curr}`]: { gap: curr },
        [`margin_${curr}`]: { margin: curr },
        [`marginBottom_${curr}`]: { marginBottom: curr },
        [`marginHorizontal_${curr}`]: { marginHorizontal: curr },
        [`marginLeft_${curr}`]: { marginLeft: curr },
        [`marginRight_${curr}`]: { marginRight: curr },
        [`marginTop_${curr}`]: { marginTop: curr },
        [`marginVertical_${curr}`]: { marginVertical: curr },
        [`padding_${curr}`]: { padding: curr },
        [`paddingBottom_${curr}`]: { paddingBottom: curr },
        [`paddingHorizontal_${curr}`]: { paddingHorizontal: curr },
        [`paddingLeft_${curr}`]: { paddingLeft: curr },
        [`paddingRight_${curr}`]: { paddingRight: curr },
        [`paddingTop_${curr}`]: { paddingTop: curr },
        [`paddingVertical_${curr}`]: { paddingVertical: curr },
      });
    }, {} as Gutters);
  } else if (typeof configuration.gutters === 'object') {
    // Jika configuration.gutters adalah objek, kita akan iterasi kunci dan nilai-nya
    return Object.entries(configuration.gutters).reduce((acc, [key, value]) => {
      return Object.assign(acc, {
        [`gap_${key}`]: { gap: value },
        [`margin_${key}`]: { margin: value },
        [`marginBottom_${key}`]: { marginBottom: value },
        [`marginHorizontal_${key}`]: { marginHorizontal: value },
        [`marginLeft_${key}`]: { marginLeft: value },
        [`marginRight_${key}`]: { marginRight: value },
        [`marginTop_${key}`]: { marginTop: value },
        [`marginVertical_${key}`]: { marginVertical: value },
        [`padding_${key}`]: { padding: value },
        [`paddingBottom_${key}`]: { paddingBottom: value },
        [`paddingHorizontal_${key}`]: { paddingHorizontal: value },
        [`paddingLeft_${key}`]: { paddingLeft: value },
        [`paddingRight_${key}`]: { paddingRight: value },
        [`paddingTop_${key}`]: { paddingTop: value },
        [`paddingVertical_${key}`]: { paddingVertical: value },
      });
    }, {} as Gutters);
  }

  // Kembalikan objek kosong jika struktur `gutters` tidak dikenal
  return {} as Gutters;
};


export const staticGutterStyles = {} as const satisfies Record<
  string,
  ViewStyle
>;
